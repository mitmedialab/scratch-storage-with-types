export = FetchTool;
/**
 * Get and send assets with the fetch standard web api.
 */
declare class FetchTool {
    /**
     * Is get supported? false if the environment does not support fetch.
     * @returns {boolean} Is get supported?
     */
    get isGetSupported(): boolean;
    /**
     * Request data from a server with fetch.
     * @param {{url:string}} reqConfig - Request configuration for data to get.
     * @param {{method:string}} options - Additional options to configure fetch.
     * @returns {Promise.<Uint8Array>} Resolve to Buffer of data from server.
     */
    get({ url, ...options }: {
        url: string;
    }): Promise<Uint8Array>;
    /**
     * Is sending supported? false if the environment does not support sending
     * with fetch.
     * @returns {boolean} Is sending supported?
     */
    get isSendSupported(): boolean;
    /**
     * Send data to a server with fetch.
     * @param {Request} reqConfig - Request configuration for data to send.
     * @returns {Promise.<string>} Server returned metadata.
     */
    send({ url, withCredentials, ...options }: Request): Promise<string>;
}
