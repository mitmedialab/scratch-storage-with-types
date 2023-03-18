export = BuiltinHelper;
declare class BuiltinHelper extends Helper {
    /**
     * In-memory storage for all built-in assets.
     * @type {Object.<AssetType, AssetIdMap>} Maps asset type to a map of asset ID to actual assets.
     * @typedef {Object.<string, BuiltinAssetRecord>} AssetIdMap - Maps asset ID to asset.
     */
    assets: any;
    /**
     * Call `setDefaultAssetId` on the parent `ScratchStorage` instance to register all built-in default assets.
     */
    registerDefaultAssets(): void;
    /**
     * Synchronously fetch a cached asset for a given asset id. Returns null if not found.
     * @param {string} assetId - The id for the asset to fetch.
     * @returns {?Asset} The asset for assetId, if it exists.
     */
    get(assetId: string): Asset | null;
    /**
     * Alias for store (old name of store)
     * @deprecated Use BuiltinHelper.store
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */
    cache(assetType: any, dataFormat: DataFormat, data: Buffer, id: string): string;
    /**
     * Deprecated external API for _store
     * @deprecated Not for external use. Create assets and keep track of them outside of the storage instance.
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {(string|number)} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */
    store(assetType: any, dataFormat: DataFormat, data: Buffer, id: (string | number)): string;
    /**
     * Cache an asset for future lookups by ID.
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {(string|number)} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */
    _store(assetType: any, dataFormat: DataFormat, data: Buffer, id: (string | number)): string;
    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {?Promise.<Asset>} A promise for the contents of the asset.
     */
    load(assetType: any, assetId: string): Promise<Asset> | null;
}
declare namespace BuiltinHelper {
    export { BuiltinAssetRecord };
}
import Helper = require("./Helper");
import Asset = require("./Asset");
import DataFormat = require("./DataFormat");
type BuiltinAssetRecord = {
    /**
     * - The type of the asset.
     */
    type: any;
    /**
     * - The format of the asset's data.
     */
    format: DataFormat;
    /**
     * - The asset's unique ID.
     */
    id: string | null;
    /**
     * - The asset's data.
     */
    data: Buffer;
};
