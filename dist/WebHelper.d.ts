export = WebHelper;
/**
 * @typedef {function} UrlFunction - A function which computes a URL from asset information.
 * @param {Asset} - The asset for which the URL should be computed.
 * @returns {(string|object)} - A string representing the URL for the asset request OR an object with configuration for
 *                              the underlying fetch call (necessary for configuring e.g. authentication)
 */
declare class WebHelper extends Helper {
    /**
     * @type {Array.<StoreRecord>}
     * @typedef {object} StoreRecord
     * @property {Array.<string>} types - The types of asset provided by this store, from AssetType's name field.
     * @property {UrlFunction} getFunction - A function which computes a URL from an Asset.
     * @property {UrlFunction} createFunction - A function which computes a URL from an Asset.
     * @property {UrlFunction} updateFunction - A function which computes a URL from an Asset.
     */
    stores: {
        /**
         * - The types of asset provided by this store, from AssetType's name field.
         */
        types: Array<string>;
        /**
         * - A function which computes a URL from an Asset.
         */
        getFunction: UrlFunction;
        /**
         * - A function which computes a URL from an Asset.
         */
        createFunction: UrlFunction;
        /**
         * - A function which computes a URL from an Asset.
         */
        updateFunction: UrlFunction;
    }[];
    /**
     * Set of tools to best load many assets in parallel. If one tool
     * cannot be used, it will use the next.
     * @type {ProxyTool}
     */
    assetTool: ProxyTool;
    /**
     * Set of tools to best load project data in parallel with assets. This
     * tool set prefers tools that are immediately ready. Some tools have
     * to initialize before they can load files.
     * @type {ProxyTool}
     */
    projectTool: ProxyTool;
    /**
     * Register a web-based source for assets. Sources will be checked in order of registration.
     * @deprecated Please use addStore
     * @param {Array.<AssetType>} types - The types of asset provided by this source.
     * @param {UrlFunction} urlFunction - A function which computes a URL from an Asset.
     */
    addSource(types: Array<AssetType>, urlFunction: UrlFunction): void;
    /**
     * Register a web-based store for assets. Sources will be checked in order of registration.
     * @param {Array.<AssetType>} types - The types of asset provided by this store.
     * @param {UrlFunction} getFunction - A function which computes a GET URL for an Asset
     * @param {UrlFunction} createFunction - A function which computes a POST URL for an Asset
     * @param {UrlFunction} updateFunction - A function which computes a PUT URL for an Asset
     */
    addStore(types: Array<AssetType>, getFunction: UrlFunction, createFunction: UrlFunction, updateFunction: UrlFunction): void;
    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @param {DataFormat} dataFormat - The file format / file extension of the asset to fetch: PNG, JPG, etc.
     * @return {Promise.<Asset>} A promise for the contents of the asset.
     */
    load(assetType: AssetType, assetId: string, dataFormat: DataFormat): Promise<Asset>;
    /**
     * Create or update an asset with provided data. The create function is called if no asset id is provided
     * @param {AssetType} assetType - The type of asset to create or update.
     * @param {?DataFormat} dataFormat - DataFormat of the data for the stored asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {?string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {Promise.<object>} A promise for the response from the create or update request
     */
    store(assetType: AssetType, dataFormat: DataFormat, data: Buffer, assetId: string | null): Promise<object>;
}
declare namespace WebHelper {
    export { UrlFunction };
}
import Helper = require("./Helper");
/**
 * - A function which computes a URL from asset information.
 */
type UrlFunction = Function;
import ProxyTool = require("./ProxyTool");
import Asset = require("./Asset");
