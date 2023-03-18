export = ScratchStorage;
declare class ScratchStorage {
    defaultAssetId: {};
    builtinHelper: BuiltinHelper;
    webHelper: WebHelper;
    _helpers: ({
        helper: BuiltinHelper;
        priority: number;
    } | {
        helper: WebHelper;
        priority: number;
    })[];
    /**
     * @return {_Asset} - the `Asset` class constructor.
     * @constructor
     */
    get Asset(): _Asset;
    /**
     * @return {_AssetType} - the list of supported asset types.
     * @constructor
     */
    get AssetType(): any;
    /**
     * @return {_DataFormat} - the list of supported data formats.
     * @constructor
     */
    get DataFormat(): string;
    /**
     * Add a storage helper to this manager. Helpers with a higher priority number will be checked first when loading
     * or storing assets. For comparison, the helper for built-in assets has `priority=100` and the default web helper
     * has `priority=-100`. The relative order of helpers with equal priorities is undefined.
     * @param {Helper} helper - the helper to be added.
     * @param {number} [priority] - the priority for this new helper (default: 0).
     */
    addHelper(helper: Helper, priority?: number): void;
    /**
     * Synchronously fetch a cached asset from built-in storage. Assets are cached when they are loaded.
     * @param {string} assetId - The id of the asset to fetch.
     * @returns {?Asset} The asset, if it exists.
     */
    get(assetId: string): Asset;
    /**
     * Deprecated API for caching built-in assets. Use createAsset.
     * @param {_AssetType} assetType - The type of the asset to cache.
     * @param {_DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */
    cache(assetType: any, dataFormat: _DataFormat, data: Buffer, id: string): string;
    /**
     * Construct an Asset, and optionally generate an md5 hash of its data to create an id
     * @param {_AssetType} assetType - The type of the asset to cache.
     * @param {_DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} [id] - The id for the cached asset.
     * @param {bool} [generateId] - flag to set id to an md5 hash of data if `id` isn't supplied
     * @returns {_Asset}generated Asset with `id` attribute set if not supplied
     */
    createAsset(assetType: any, dataFormat: _DataFormat, data: Buffer, id?: string, generateId?: bool): _Asset;
    /**
     * Register a web-based source for assets. Sources will be checked in order of registration.
     * @param {Array.<AssetType>} types - The types of asset provided by this source.
     * @param {UrlFunction} getFunction - A function which computes a GET URL from an Asset.
     * @param {UrlFunction} createFunction - A function which computes a POST URL for asset data.
     * @param {UrlFunction} updateFunction - A function which computes a PUT URL for asset data.
     */
    addWebStore(types: Array<AssetType>, getFunction: UrlFunction, createFunction: UrlFunction, updateFunction: UrlFunction): void;
    /**
     * Register a web-based source for assets. Sources will be checked in order of registration.
     * @deprecated Please use addWebStore
     * @param {Array.<AssetType>} types - The types of asset provided by this source.
     * @param {UrlFunction} urlFunction - A function which computes a GET URL from an Asset.
     */
    addWebSource(types: Array<AssetType>, urlFunction: UrlFunction): void;
    /**
     * TODO: Should this be removed in favor of requesting an asset with `null` as the ID?
     * @param {_AssetType} type - Get the default ID for assets of this type.
     * @return {?string} The ID of the default asset of the given type, if any.
     */
    getDefaultAssetId(type: any): string | null;
    /**
     * Set the default ID for a particular type of asset. This default asset will be used if a requested asset cannot
     * be found and automatic fallback is enabled. Ideally this should be an asset that is available locally or even
     * one built into this module.
     * TODO: Should this be removed in favor of requesting an asset with `null` as the ID?
     * @param {_AssetType} type - The type of asset for which the default will be set.
     * @param {string} id - The default ID to use for this type of asset.
     */
    setDefaultAssetId(type: any, id: string): void;
    /**
     * Fetch an asset by type & ID.
     * @param {_AssetType} assetType - The type of asset to fetch. This also determines which asset store to use.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @param {_DataFormat} [dataFormat] - Optional: load this format instead of the AssetType's default.
     * @return {Promise.<Asset>} A promise for the requested Asset.
     *   If the promise is resolved with non-null, the value is the requested asset.
     *   If the promise is resolved with null, the desired asset could not be found with the current asset sources.
     *   If the promise is rejected, there was an error on at least one asset source. HTTP 404 does not count as an
     *   error here, but (for example) HTTP 403 does.
     */
    load(assetType: any, assetId: string, dataFormat?: _DataFormat): Promise<Asset>;
    /**
     * Store an asset by type & ID.
     * @param {_AssetType} assetType - The type of asset to fetch. This also determines which asset store to use.
     * @param {?DataFormat} [dataFormat] - Optional: load this format instead of the AssetType's default.
     * @param {Buffer} data - Data to store for the asset
     * @param {?string} [assetId] - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {Promise.<object>} A promise for asset metadata
     */
    store(assetType: any, dataFormat?: DataFormat, data: Buffer, assetId?: string | null): Promise<object>;
}
import BuiltinHelper = require("./BuiltinHelper");
import WebHelper = require("./WebHelper");
import _Asset = require("./Asset");
import _DataFormat = require("./DataFormat");
