export = AssetType;
/**
 * Enumeration of the supported asset types.
 * @type {Object.<String,AssetType>}
 * @typedef {Object} AssetType - Information about a supported asset type.
 * @property {string} contentType - the MIME type associated with this kind of data. Useful for data URIs, etc.
 * @property {string} name - The human-readable name of this asset type.
 * @property {DataFormat} runtimeFormat - The default format used for runtime, in-memory storage of this asset. For
 *     example, a project stored in SB2 format on disk will be returned as JSON when loaded into memory.
 * @property {boolean} immutable - Indicates if the asset id is determined by the asset content.
 */
declare const AssetType: any;
declare namespace AssetType {
    export { AssetType };
}
/**
 * - Information about a supported asset type.
 */
type AssetType = {
    /**
     * - the MIME type associated with this kind of data. Useful for data URIs, etc.
     */
    contentType: string;
    /**
     * - The human-readable name of this asset type.
     */
    name: string;
    /**
     * - The default format used for runtime, in-memory storage of this asset. For
     * example, a project stored in SB2 format on disk will be returned as JSON when loaded into memory.
     */
    runtimeFormat: DataFormat;
    /**
     * - Indicates if the asset id is determined by the asset content.
     */
    immutable: boolean;
};
import DataFormat = require("./DataFormat");
