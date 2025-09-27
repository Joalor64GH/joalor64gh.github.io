function getVersionParam() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('v'), 10) || 1;
}

function renderVersion(data) {
    const version = data.versionInfo;
    const container = document.getElementById('version-dynamic-content');
    if (!version) {
        container.innerHTML = "<p>Version not found.</p>";
        return;
    }

    const newIcon = version.meta.isNew ? `
        <div class="version-icon-top-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"
                fill="#00ff00">
                <path
                    d="M79.162 75.367q-4.04 0.495 -4.655 4.519 -0.615 4.022 -4.611 3.247t-5.823 2.859q-1.829 3.635 -5.389 1.663 -3.559 -1.972 -6.423 0.92 -2.862 2.893 -5.638-0.084 -2.775-2.977 -6.391-1.109 -3.616 1.866 -5.336-1.822 -1.72-3.689 -5.736-3.031 -4.016 0.657 -4.513-3.381 -0.496-4.04 -4.519-4.655 -4.023-0.616 -3.247-4.611 0.777-3.994 -2.859-5.824 -3.635-1.827 -1.663-5.387 1.973-3.56 -0.92-6.422 -2.893-2.864 0.084-5.639 2.977-2.775 1.11-6.391-1.867 -3.617 1.821 -5.336 3.688 -1.72 3.03 -5.737-0.657 -4.016 3.382 -4.512 4.039 -0.496 4.655 -4.519 0.615-4.023 4.61-3.247 3.995 0.777 5.824-2.859 1.828-3.636 5.388-1.663t6.422-0.919c1.908-1.93 3.788-1.901 5.638 0.083q2.776 2.976 6.392 1.111 3.616-1.867 5.337 1.821 1.72 3.688 5.736 3.03 4.016-0.658 4.512 3.381 0.497 4.039 4.519 4.654t3.247 4.611q-0.776 3.996 2.859 5.824 3.636 1.829 1.663 5.388 -1.972 3.56 0.92 6.423 2.892 2.863 -0.085 5.638c-2.977 2.775 -2.354 3.981 -1.109 6.392q1.866 3.615 -1.823 5.337 -3.688 1.72 -3.03 5.736c0.439 2.679 -0.687 4.181 -3.38 4.513" />
                <text x="50%" y="52%" text-anchor="middle" fill="white" font-size="30px"
                    font-family="Urbanist" font-weight="bold" dy=".3em">NEW</text>
                </svg>
        </div>
    ` : '';
    container.innerHTML = `
        <div class="version-container" style="background-color: ${version.visu.colCont};" 
            data-download-windows-url="${version.meta.downloadWin}"
            data-download-android-url="${version.meta.downloadAnd}"
            data-preview-url="${version.meta.preview}">
            <div class="version-content">
                <div class="version-image">
                    <img src="/img/wallpapers/${version.visu.img}" alt="${version.meta.name}">
                </div>
                <div class="version-info">
                    <div class="version-name-container">
                        ${newIcon}
                        <div class="version-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100"
                                fill=${version.visu.colVerIcon}>
                                <path
                                    d="M79.162 75.367q-4.04 0.495 -4.655 4.519 -0.615 4.022 -4.611 3.247t-5.823 2.859q-1.829 3.635 -5.389 1.663 -3.559 -1.972 -6.423 0.92 -2.862 2.893 -5.638-0.084 -2.775-2.977 -6.391-1.109 -3.616 1.866 -5.336-1.822 -1.72-3.689 -5.736-3.031 -4.016 0.657 -4.513-3.381 -0.496-4.04 -4.519-4.655 -4.023-0.616 -3.247-4.611 0.777-3.994 -2.859-5.824 -3.635-1.827 -1.663-5.387 1.973-3.56 -0.92-6.422 -2.893-2.864 0.084-5.639 2.977-2.775 1.11-6.391-1.867 -3.617 1.821 -5.336 3.688 -1.72 3.03 -5.737-0.657 -4.016 3.382 -4.512 4.039 -0.496 4.655 -4.519 0.615-4.023 4.61-3.247 3.995 0.777 5.824-2.859 1.828-3.636 5.388-1.663t6.422-0.919c1.908-1.93 3.788-1.901 5.638 0.083q2.776 2.976 6.392 1.111 3.616-1.867 5.337 1.821 1.72 3.688 5.736 3.03 4.016-0.658 4.512 3.381 0.497 4.039 4.519 4.654t3.247 4.611q-0.776 3.996 2.859 5.824 3.636 1.829 1.663 5.388 -1.972 3.56 0.92 6.423 2.892 2.863 -0.085 5.638c-2.977 2.775 -2.354 3.981 -1.109 6.392q1.866 3.615 -1.823 5.337 -3.688 1.72 -3.03 5.736c0.439 2.679 -0.687 4.181 -3.38 4.513" />
                                <text x="50%" y="52%" text-anchor="middle" fill="white" font-size="40px"
                                    font-family="Urbanist" font-weight="bold" dy=".3em">V${version.meta.version}</text>
                            </svg>
                        </div>
                        <h2 class="version-name">${version.meta.name}</h2>
                    </div>
                    <p class="version-date">Released: ${version.meta.date}</p>
                    <p class="version-description">${version.meta.desc}</p>
                    <div class="version-buttons">
                        <button class="btn download-btn">⤓ Download</button>
                        <button class="btn preview-btn">► Preview</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const versionContainer = container.querySelector('.version-container');
    const downloadBtn = versionContainer.querySelector('.download-btn');
    const previewBtn = versionContainer.querySelector('.preview-btn');
    const downloadWindowsUrl = versionContainer.getAttribute('data-download-windows-url');
    const downloadAndroidUrl = versionContainer.getAttribute('data-download-android-url');
    const previewUrl = versionContainer.getAttribute('data-preview-url');

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
            const modal = document.getElementById('previewModal');
            const iframe = document.getElementById('previewVideo');
            iframe.src = `https://www.youtube.com/embed/${version.meta.previewID}?autoplay=1`;
            modal.style.display = 'flex';
        });
    }

    if (data.characters) {
        renderCharacters(data.characters, data.versionInfo.meta.version);
    } else {
        document.getElementById('characters-grid').innerHTML = '';
    }
}

function renderCharacters(characters, versionId) {
    const grid = document.getElementById('characters-grid');
    if (!characters || !Array.isArray(characters)) {
        grid.innerHTML = '';
        return;
    }
    const columns = (versionId === 6) ? 6 : 5;
    let html = '<div class="characters-table">';
    characters.forEach((char, i) => {
        if (i % columns === 0) html += '<div class="character-row">';
        html += `
            <div class="character-cell" data-index="${i}">
                <img src="img/foreverbox/characters/${char.imgs[0].img}" alt="${char.name}" class="character-thumb">
                <div class="character-name">${char.name}</div>
            </div>
        `;
        if ((i + 1) % columns === 0) html += '</div>';
    });
    if (characters.length % columns !== 0) html += '</div>';
    html += '</div>';
    grid.innerHTML = html;

    grid.querySelectorAll('.character-cell .character-thumb').forEach(img => {
        img.addEventListener('click', function () {
            const idx = parseInt(this.parentElement.getAttribute('data-index'), 10);
            showCharacterModal(characters[idx]);
        });
    });
}

function showCharacterModal(char) {
    const modal = document.getElementById('character-modal');
    let tabsHtml = '';
    let imgsHtml = '';
    if (Array.isArray(char.imgs)) {
        if (char.imgs.length > 1) {
            tabsHtml = `<div class="character-modal-tabs">` +
                char.imgs.map((img, idx) =>
                    `<button class="character-modal-tab${idx === 0 ? ' active' : ''}" data-tab="${idx}">${img.title}</button>`
                ).join('') +
                `</div>`;
        } else {
            tabsHtml = '';
        }
        imgsHtml = `<div class="character-modal-imgs">` +
            char.imgs.map((img, idx) =>
                `<div class="character-modal-img-block" style="display:${idx === 0 ? 'block' : 'none'}" data-img="${idx}">
                <img src="img/foreverbox/characters/${img.img}" alt="${char.name}">
            </div>`
            ).join('') +
            `</div>`;
    }
    modal.innerHTML = `
        <div class="character-modal-content">
            <span class="character-modal-close" id="character-modal-close">&times;</span>
            <h2>${char.name}</h2>
            ${tabsHtml}
            ${imgsHtml}
            <p class="character-modal-desc">${char.desc}</p>
            <div class="character-modal-meta">
                <span><b>Age:</b> ${char.age}</span> | 
                <span><b>Gender:</b> ${getCharacterGender(char.gender)}</span>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
    document.getElementById('character-modal-close').onclick = () => {
        modal.style.display = 'none';
    };
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };

    const tabs = modal.querySelectorAll('.character-modal-tab');
    const imgBlocks = modal.querySelectorAll('.character-modal-img-block');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const idx = this.getAttribute('data-tab');
            imgBlocks.forEach((block, i) => {
                block.style.display = (i == idx) ? 'block' : 'none';
            });
        });
    });
}

function getCharacterGender(gender) {
    switch (gender) {
        case "M":
            return "Male";
        case "F":
            return "Female";
        default:
            return gender;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const v = getVersionParam();
    fetch(`./data/foreverbox/v${v}.json`)
        .then(res => {
            if (!res.ok) throw new Error("Version not found");
            return res.json();
        })
        .then(data => renderVersion(data))
        .catch(() => {
            document.getElementById('version-dynamic-content').innerHTML = "<p>Version not found.</p>";
        });
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

function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    const iframe = document.getElementById('previewVideo');
    iframe.src = "";
    modal.style.display = "none";
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById('previewModal');
    if (event.target === modal) {
        closePreviewModal();
    }
});