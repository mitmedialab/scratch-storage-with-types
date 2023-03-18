export = PublicFetchWorkerTool;
/**
 * Get and send assets with a worker that uses fetch.
 */
declare class PublicFetchWorkerTool {
    /**
     * Shared instance of an internal worker. PublicFetchWorkerTool proxies
     * it.
     * @type {PrivateFetchWorkerTool}
     */
    inner: PrivateFetchWorkerTool;
    /**
     * Is get supported?
     * @returns {boolean} Is get supported?
     */
    get isGetSupported(): boolean;
    /**
     * Request data from a server with a worker that uses fetch.
     * @param {{url:string}} reqConfig - Request configuration for data to get.
     * @returns {Promise.<Buffer>} Resolve to Buffer of data from server.
     */
    get(reqConfig: {
        url: string;
    }): Promise<Buffer>;
    /**
     * Is sending supported?
     * @returns {boolean} Is sending supported?
     */
    get isSendSupported(): boolean;
    /**
     * Send data to a server with a worker that uses fetch.
     * @throws {Error} A not implemented error.
     */
    send(): void;
}
/**
 * Get and send assets with a worker that uses fetch.
 */
declare class PrivateFetchWorkerTool {
    /**
     * Return a static PrivateFetchWorkerTool instance on demand.
     * @returns {PrivateFetchWorkerTool} A static PrivateFetchWorkerTool
     *   instance
     */
    static get instance(): PrivateFetchWorkerTool;
    /**
     * What does the worker support of the APIs we need?
     * @type {{fetch:boolean}}
     */
    _workerSupport: {
        fetch: boolean;
    };
    /**
     * A possible error occurred standing up the worker.
     * @type {!Error}
     */
    _supportError: Error;
    /**
     * The worker that runs fetch and returns data for us.
     * @type {!Worker}
     */
    worker: Worker;
    /**
     * A map of ids to fetch job objects.
     * @type {object}
     */
    jobs: object;
    /**
     * Is get supported?
     *
     * false if the environment does not workers, fetch, or fetch from inside a
     * worker. Finding out the worker supports fetch is asynchronous and will
     * guess that it does if the window does until the worker can inform us.
     * @returns {boolean} Is get supported?
     */
    get isGetSupported(): boolean;
    /**
     * Request data from a server with a worker using fetch.
     * @param {{url:string}} reqConfig - Request configuration for data to get.
     * @param {{method:string}} options - Additional options to configure fetch.
     * @returns {Promise.<Buffer>} Resolve to Buffer of data from server.
     */
    get({ url, ...options }: {
        url: string;
    }): Promise<Buffer>;
    /**
     * Is sending supported? always false for FetchWorkerTool.
     * @returns {boolean} Is sending supported?
     */
    get isSendSupported(): boolean;
    /**
     * Send data to a server.
     * @throws {Error} A not implemented error.
     */
    send(): void;
}
