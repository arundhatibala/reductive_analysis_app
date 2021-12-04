/**
 * Trigger a file download
 * https://pqina.nl/blog/how-to-prompt-the-user-to-download-a-file-instead-of-navigating-to-it
 *
 * When browsers support evolves, it could use the FileSystem API:
 * https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 * https://web.dev/file-system-access/
 *
 * @param {*} filedata
 * @param {string} filename
 * @param {string} mimeType
 */
export function downloadAs(filedata, filename, mimeType) {
  const file = new Blob([filedata], { type: mimeType })

  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = URL.createObjectURL(file)
  link.download = filename

  document.body.appendChild(link)
  link.click()

  // timeout apparently needed on Firefox
  setTimeout(() => {
    URL.revokeObjectURL(link.href)
    link.remove()
  }, 0)
}
