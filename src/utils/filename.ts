/** Restore an attachment name by removing its complete storage ID prefix. */
export function getOriginalFilename(file: { id: string; filename: string }): string {
    const prefix = `${file.id}-`;
    return file.filename.startsWith(prefix) ? file.filename.slice(prefix.length) : file.filename;
}
