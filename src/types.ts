/**
 * The options for the plugin.
 * @interface Options
 * @prop {string} packageNameKey - The key to use for the package name.
 * @prop {string} packageNameValue - The value to use for the package name.
 * @prop {string} version - The version of the package.
 * @prop {string} baseUrl - The base URL to use for the package.
 * @prop {string[]} fileTypes - The file types to include in the package.
 * @prop {string} [indexFileName] - The name of the index file.
 * @prop {string} [folderName] - The name of the folder to use for the package.
 */
export interface Options {
    packageNameKey: string,
    packageNameValue: string,
    version: string,
    baseUrl: string,
    fileTypes: string[],
    indexFileName? : string,
    folderName? : string
}

export interface Bundles {
    [path: string]: {
        fileName: string,
        type: string,
    },
}

export interface Manifest {
    [key: string]: string | number | string[] | Manifest[] | undefined,
    version: string,
    items?: Manifest[],
    path?: string,
    remoteUrl?: string
}