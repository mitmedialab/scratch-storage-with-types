export = Helper;
/**
 * Base class for asset load/save helpers.
 * @abstract
 */
declare class Helper {
    constructor(parent: any);
    parent: any;
    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @param {DataFormat} dataFormat - The file format / file extension of the asset to fetch: PNG, JPG, etc.
     * @return {Promise.<Asset>} A promise for the contents of the asset.
     */
    load(assetType: AssetType, assetId: string, dataFormat: DataFormat): Promise<Asset>;
}
