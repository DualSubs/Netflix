export interface Settings {
    /**
     * [字幕] 启用类型
     *
     * 请选择要使用的字幕，双语字幕将使用您选择类型呈现。
     *
     * @remarks
     *
     * Possible values:
     * - `'Translate'` - 翻译字幕（翻译器）
     *
     * @defaultValue "Translate"
     */
    Type?: 'Translate';
    /**
     * [字幕] 主语言（源语言）
     *
     * 当“主语言”字幕存在时，将生成“主语言/副语言（翻译）”与“主语言（外挂）”的字幕或字幕选项。仅当源语言识别不准确时更改此选项。
     *
     * @remarks
     *
     * Possible values:
     * - `'AUTO'` - 自动 - Automatic
     * - `'ZH'` - 中文（自动）
     * - `'ZH-HANS'` - 中文（简体）
     * - `'ZH-HK'` - 中文（香港）
     * - `'ZH-HANT'` - 中文（繁体）
     * - `'EN'` - English - 英语（自动）
     * - `'ES'` - Español - 西班牙语（自动）
     * - `'JA'` - 日本語 - 日语
     * - `'KO'` - 한국어 - 韩语
     * - `'DE'` - Deutsch - 德语
     * - `'FR'` - Français - 法语
     * - `'TR'` - Türkçe - 土耳其语
     * - `'KM'` - ភាសាខ្មែរ - 高棉语
     *
     * @defaultValue "AUTO"
     */
    /**
     * [字幕] 副语言（目标语言）
     *
     * 当“副语言”字幕存在时，将生成“副语言/主语言（官方）”的字幕或字幕选项。
     *
     * @remarks
     *
     * Possible values:
     * - `'ZH'` - 中文（自动）
     * - `'ZH-HANS'` - 中文（简体）
     * - `'ZH-HK'` - 中文（香港）
     * - `'ZH-HANT'` - 中文（繁体）
     * - `'EN'` - English - 英语（自动）
     * - `'ES'` - Español - 西班牙语（自动）
     * - `'JA'` - 日本語 - 日语
     * - `'KO'` - 한국어 - 韩语
     * - `'DE'` - Deutsch - 德语
     * - `'FR'` - Français - 法语
     * - `'TR'` - Türkçe - 土耳其语
     * - `'KM'` - ភាសាខ្មែរ - 高棉语
     *
     * @defaultValue "ZH"
     */
    Languages?: ('AUTO' | 'ZH' | 'ZH-HANS' | 'ZH-HK' | 'ZH-HANT' | 'EN' | 'ES' | 'JA' | 'KO' | 'DE' | 'FR' | 'TR' | 'KM' | 'ZH' | 'ZH-HANS' | 'ZH-HK' | 'ZH-HANT' | 'EN' | 'ES' | 'JA' | 'KO' | 'DE' | 'FR' | 'TR' | 'KM')[];
    /**
     * [字幕] 主语言（源语言）字幕位置
     *
     * 主语言（源语言）字幕的显示位置。
     *
     * @remarks
     *
     * Possible values:
     * - `'Forward'` - 上面（第一行）
     * - `'Reverse'` - 下面（第二行）
     *
     * @defaultValue "Forward"
     */
    Position?: 'Forward' | 'Reverse';
    /**
     * [翻译器] 服务商API
     *
     * 请选择翻译器所使用的服务商API，更多翻译选项请使用BoxJs。
     *
     * @remarks
     *
     * Possible values:
     * - `'Google'` - Google Translate
     * - `'Microsoft'` - Microsoft Translator（需填写API）
     *
     * @defaultValue "Google"
     */
    Vendor?: 'Google' | 'Microsoft';
    /**
     * [翻译器] 只显示翻译字幕
     *
     * 是否仅显示翻译后字幕，不显示源语言字幕。
     *
     * @defaultValue false
     */
    ShowOnly?: boolean;
    /**
     * [储存] 配置类型
     *
     * 默认优先使用设置面板或 BoxJS 保存的配置，其次使用插件配置，最后使用脚本默认配置。
     *
     * @remarks
     *
     * Possible values:
     * - `'Argument'` - 插件配置优先
     * - `'PersistentStore'` - 持久化存储优先
     * - `'database'` - 仅使用默认配置
     *
     * @defaultValue "PersistentStore"
     */
    Storage?: 'Argument' | 'PersistentStore' | 'database';
    /**
     * [调试] 日志等级
     *
     * 选择脚本日志的输出等级，低于所选等级的日志将全部输出。
     *
     * @remarks
     *
     * Possible values:
     * - `'OFF'` - 关闭
     * - `'ERROR'` - ❌ 错误
     * - `'WARN'` - ⚠️ 警告
     * - `'INFO'` - ℹ️ 信息
     * - `'DEBUG'` - 🅱️ 调试
     * - `'ALL'` - 全部
     *
     * @defaultValue "WARN"
     */
    LogLevel?: 'OFF' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'ALL';
}
