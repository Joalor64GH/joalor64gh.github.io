// basic theme toggle
const body = document.body;

toggleTextChange();

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('lightmode') === 'enabled') {
        body.classList.add('lightmode');
    }
});

function toggleTheme() {
    if (body.classList.contains('lightmode')) {
        body.classList.remove('lightmode');
        localStorage.setItem('lightmode', 'disabled');
    } else {
        body.classList.add('lightmode');
        localStorage.setItem('lightmode', 'enabled');
    }
    toggleTextChange();
}

function toggleTextChange() {
    document.getElementById("toggle-text").innerText = (localStorage.getItem('lightmode') === 'enabled') ? "🌙" : "☀️";
}