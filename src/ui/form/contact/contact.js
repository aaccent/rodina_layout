document.addEventListener('drop', (e) => e.preventDefault())
document.addEventListener('dragover', (e) => e.preventDefault())

function formatFileName(name) {
    if (name.length > 30) return `${name.slice(0, 30)}...`
    return name
}

void (function () {
    const dropFileZone = document.querySelector('.field:has(input[type="file"])')
    if (!dropFileZone) return

    const dropFileZoneText = dropFileZone.querySelector('p')
    const fileInput = dropFileZone.querySelector('input')

    if (!dropFileZoneText || !fileInput) return

    dropFileZone.addEventListener('dragover', () => {
        dropFileZone.classList.add('_dragover')
    })

    dropFileZone.addEventListener('dragleave', () => {
        dropFileZone.classList.remove('_dragover')
    })

    dropFileZone.addEventListener('drop', (e) => {
        fileInput.files = e.dataTransfer.files
        dropFileZoneText.textContent = formatFileName(fileInput.files[0].name)
    })

    fileInput.addEventListener('change', () => {
        if (!fileInput.files.length) return
        dropFileZoneText.textContent = formatFileName(fileInput.files[0].name)
    })
})()
