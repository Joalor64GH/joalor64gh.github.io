document.querySelectorAll('.version-container').forEach(container => {
    const downloadBtn = container.querySelector('.download-btn');
    const previewBtn = container.querySelector('.preview-btn');
    const downloadWindowsUrl = container.getAttribute('data-download-windows-url');
    const downloadAndroidUrl = container.getAttribute('data-download-android-url');
    const previewUrl = container.getAttribute('data-preview-url');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const modal = document.getElementById('downloadModal');
            const windowsLink = document.getElementById('windowsDownload');
            const androidLink = document.getElementById('androidDownload');

            if (downloadWindowsUrl) {
                windowsLink.href = downloadWindowsUrl;
                windowsLink.style.display = 'inline-block';
            } else {
                windowsLink.style.display = 'none';
            }

            if (downloadAndroidUrl) {
                androidLink.href = downloadAndroidUrl;
                androidLink.style.display = 'inline-block';
            } else {
                androidLink.style.display = 'none';
            }

            modal.style.display = 'block';
        });
    }

    if (previewBtn && previewUrl) {
        previewBtn.addEventListener('click', () => {
            window.open(previewUrl, '_blank');
        });
    }
});

function closeModal() {
    document.getElementById('downloadModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('downloadModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};