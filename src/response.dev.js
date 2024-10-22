import {
	$platform,
	URL,
	_,
	Storage,
	fetch,
	notification,
	log,
	logError,
	wait,
	done,
	getScript,
	runScript,
} from "./utils/utils.mjs";
import database from "./function/database.mjs";
import setENV from "./function/setENV.mjs";
import detectFormat from "./function/detectFormat.mjs";
/***************** Processing *****************/
// 解构URL
const url = new URL($request.url);
log(`⚠ url: ${url.toJSON()}`, "");
// 获取连接参数
const METHOD = $request.method;
const HOST = url.hostname;
const PATH = url.pathname;
const PATHs = url.pathname.split("/").filter(Boolean);
log(`⚠ METHOD: ${METHOD}`, "");
// 解析格式
let FORMAT = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
if (FORMAT === "application/octet-stream" || FORMAT === "text/plain" || FORMAT === undefined) FORMAT = detectFormat(url, $response.body, FORMAT);
log(`⚠ FORMAT: ${FORMAT}`, "");
(async () => {
	/**
	 * 设置
	 * @type {{Settings: import('./types').Settings}}
	 */
	const { Settings, Caches, Configs } = setENV("DualSubs", "Netflix", database);
	log(`⚠ Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case false:
			break;
		default:
			// 创建空数据
			let body = {};
			// 格式判断
			switch (FORMAT) {
				case undefined: // 视为无body
					break;
				case "application/x-www-form-urlencoded":
				case "text/plain":
				default:
					break;
				case "application/x-mpegURL":
				case "application/x-mpegurl":
				case "application/vnd.apple.mpegurl":
				case "audio/mpegurl":
					//body = M3U8.parse($response.body);
					//log(`🚧 body: ${JSON.stringify(body)}`, "");
					//$response.body = M3U8.stringify(body);
					break;
				case "text/xml":
				case "text/html":
				case "text/plist":
				case "application/xml":
				case "application/plist":
				case "application/x-plist":
					//body = XML.parse($response.body);
					//log(`🚧 body: ${JSON.stringify(body)}`, "");
					break;
				case "text/vtt":
				case "application/vtt":
					//body = VTT.parse($response.body);
					//log(`🚧 body: ${JSON.stringify(body)}`, "");
					//$response.body = VTT.stringify(body);
					break;
				case "text/json":
				case "application/json":
					if ($response.body.includes("}{")) body = JSON.parse(`[${$response.body.replaceAll('}{','},{')}]`);
					else body = JSON.parse($response.body ?? "{}");
					log(`🚧 body: ${JSON.stringify(body, null, 2)}`, "");
					// 主机判断
					switch (HOST) {
						case "www.netflix.com":
						case "logs.netflix.com":
							// 路径判断
							switch (PATH) {
								case "msl/playapi/cadmium/licensedmanifest":
								case "msl/playapi/cadmium/manifest/1":
								case "msl/playapi/cadmium/event/1":
								case "msl/playapi/cadmium/logblob/1":
								case "log/cadmium/logblob/1":
								case "nq/msl_v1/cadmium/pbo_manifests/%5E1.0.0/router":
								case "nq/msl_v1/cadmium/pbo_licenses/%5E1.0.0/router":
									body.forEach(item => {
										if (item?.errordata){
											const errordata = atob(item.errordata);
											throw new Error(`${errordata.internalcode}: ${errordata.errormsg}`);
										};
										if (item?.entityauthdata){
											const authdata = item.entityauthdata;
											log(`🚧 authdata: ${JSON.stringify(authdata, null, 2)}`, "");
											//Storage.setItem(`@DualSubs.${"Netflix"}.Caches.MSL.authdata`, authdata);
										};
										if (item?.headerdata){
											const headerdata = JSON.parse(atob(item.headerdata));
											log(`🚧 headerdata: ${JSON.stringify(headerdata, null, 2)}`, "");
											if (headerdata.keyresponsedata) {
												const keyresponsedata = headerdata.keyresponsedata;
												log(`🚧 keyresponsedata: ${JSON.stringify(keyresponsedata, null, 2)}`, "");
												log(`🚧 hmacKeyEncStr: ${keyresponsedata.keydata.hmackey}`, "");
												log(`🚧 encKeyEncStr: ${keyresponsedata.keydata.encryptionkey}`, "");
												Storage.setItem(`@DualSubs.${"Netflix"}.Caches.MSL.keyresponsedata`, keyresponsedata);
											};
										};
										if (item?.mastertoken?.tokendata){
											const tokendata = JSON.parse(atob(item.mastertoken.tokendata));
											log(`🚧 tokendata: ${JSON.stringify(tokendata, null, 2)}`, "");
											Storage.setItem(`@DualSubs.${"Netflix"}.Caches.MSL.tokendata`, tokendata);
										};
									});
									break;
							};
							break;
						default: // 其他主机
							break;
					};
					if (Array.isArray(body)) $response.body = body.map(item => JSON.stringify(item)).join("");
					else $response.body = JSON.stringify(body);
					break;
				case "application/protobuf":
				case "application/x-protobuf":
				case "application/vnd.google.protobuf":
				case "application/grpc":
				case "application/grpc+proto":
				case "application/octet-stream":
					break;
			};
			break;
	};
})()
	.catch((e) => logError(e))
	.finally(() => done($response));
