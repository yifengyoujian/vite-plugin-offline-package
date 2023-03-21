import JSZip from "jszip"

export default function createZip() {
    const zip = new JSZip()
    const folder = zip.folder('package')!;
    return {
        file(path: string, content: string | Uint8Array) {
            folder.file(path, content)
        },
        async generate() {
            return await folder.generateAsync({ type: "nodebuffer" })
        }
    }
}