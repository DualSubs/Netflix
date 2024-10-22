export interface Settings {
    /**
     * 总功能开关
     *
     * 是否启用此APP修改
     *
     * @defaultValue true
     */
    Switch?: boolean;
    /**
     * [字幕]只显示翻译字幕
     *
     * 是否仅显示翻译后的字幕，不显示源语言字幕。
     *
     * @defaultValue false
     */
    ShowOnly?: boolean;
    /**
     * [字幕]主语言（源语言）字幕位置
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
     * [翻译器]服务商API
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
}
