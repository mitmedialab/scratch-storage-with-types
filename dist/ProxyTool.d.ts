export = ProxyTool;
/**
 * @typedef {object} Request
 * @property {string} url
 * @property {*} body
 * @property {string} method
 * @property {boolean} withCredentials
 */
/**
 * Get and send assets with other tools in sequence.
 */
declare class ProxyTool {
    constructor(filter?: string);
    /**
     * Sequence of tools to proxy.
     * @type {Array.<Tool>}
     */
    tools: Array<Tool>;
    /**
     * Is get supported? false if all proxied tool return false.
     * @returns {boolean} Is get supported?
     */
    get isGetSupported(): boolean;
    /**
     * Request data from with one of the proxied tools.
     * @param {Request} reqConfig - Request configuration for data to get.
     * @returns {Promise.<Buffer>} Resolve to Buffer of data from server.
     */
    get(reqConfig: Request): Promise<Buffer>;
    /**
     * Is sending supported? false if all proxied tool return false.
     * @returns {boolean} Is sending supported?
     */
    get isSendSupported(): boolean;
    /**
     * Send data to a server with one of the proxied tools.
     * @param {Request} reqConfig - Request configuration for data to send.
     * @returns {Promise.<Buffer|string|object>} Server returned metadata.
     */
    send(reqConfig: Request): Promise<Buffer | string | object>;
}
declare namespace ProxyTool {
    export { TOOL_FILTER, Request };
}
type Request = {
    url: string;
    body: any;
    method: string;
    withCredentials: boolean;
};
declare namespace TOOL_FILTER {
    const ALL: string;
    const READY: string;
}
/**
 * Constant values that filter the set of tools in a ProxyTool instance.
 */
type TOOL_FILTER = string;
