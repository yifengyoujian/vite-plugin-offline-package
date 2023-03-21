import { Plugin } from 'vite';

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
interface Options {
    packageNameKey: string;
    packageNameValue: string;
    version: string;
    baseUrl: string;
    fileTypes: string[];
    indexFileName?: string;
    folderName?: string;
}

declare function setup(config: Options): Plugin;

export { setup as default };
