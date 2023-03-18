export = Asset;
declare class Asset {
    /**
     * Construct an Asset.
     * @param {AssetType} assetType - The type of this asset (sound, image, etc.)
     * @param {string} assetId - The ID of this asset.
     * @param {DataFormat} [dataFormat] - The format of the data (WAV, PNG, etc.); required iff `data` is present.
     * @param {Buffer} [data] - The in-memory data for this asset; optional.
     * @param {bool} [generateId] - Whether to create id from an md5 hash of data
     */
    constructor(assetType: AssetType, assetId: string, dataFormat?: DataFormat, data?: Buffer, generateId?: bool);
    /** @type {AssetType} */
    assetType: AssetType;
    /** @type {string} */
    assetId: string;
    /** @type {Asset[]} */
    dependencies: Asset[];
    setData(data: any, dataFormat: any, generateId: any): void;
    /** @type {DataFormat} */
    dataFormat: DataFormat;
    /** @type {Buffer} */
    data: Buffer;
    clean: boolean;
    /**
     * @returns {string} - This asset's data, decoded as text.
     */
    decodeText(): string;
    /**
     * Same as `setData` but encodes text first.
     * @param {string} data - the text data to encode and store.
     * @param {DataFormat} dataFormat - the format of the data (DataFormat.SVG for example).
     * @param {bool} generateId - after setting data, set the id to an md5 of the data?
     */
    encodeTextData(data: string, dataFormat: DataFormat, generateId: bool): void;
    /**
     * @param {string} [contentType] - Optionally override the content type to be included in the data URI.
     * @returns {string} - A data URI representing the asset's data.
     */
    encodeDataURI(contentType?: string): string;
}
