import { Options, Bundles, Manifest } from "./types"

export default function manifest(config: Options, bundles: Bundles) {

    const items: Manifest[] = []

    const manifest: Manifest = {
        [config.packageNameKey]: config.packageNameValue,
        version: config.version,
        baseUrl: config.baseUrl,
        items
    }

    for (const file in bundles) {
        const bundle = bundles[file]
        const item: Manifest = {
            [config.packageNameKey]: config.packageNameValue,
            version: config.version,
            path: bundle.fileName,
            remoteUrl: `${config.baseUrl}/${bundle.fileName}`
        }
        items.push(item)
    }

    return JSON.stringify(manifest, null, 2)
}