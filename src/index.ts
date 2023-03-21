import { type Plugin } from "vite"
import { type Options } from "./types"
import createZip from "./zip"
import manifest from "./manifest"

function setup(config: Options): Plugin {
    const zip = createZip()

    return {
        name: "vite-plugin-offline-package",
        enforce: "post",
        async generateBundle(_option, bundles) {
            for (const file in bundles) {
                const bundle = bundles[file]
                if (bundle.type === "asset") {
                    zip.file(bundle.fileName, bundle.source)
                }
                if (bundle.type === "chunk") {
                    zip.file(bundle.fileName, bundle.code)
                }
            }

            const json = manifest(config, bundles)

            zip.file(`${config?.indexFileName ?? "index"}.json`, json)

            const blob = await zip.generate()
            this.emitFile({
                type: "asset",
                fileName: `${config?.folderName ?? "package"}.zip`,
                source: blob
            })
        }
    }
}

export default setup