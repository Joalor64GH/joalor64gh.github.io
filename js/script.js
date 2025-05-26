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

// progress circle
const progressCircle = document.getElementById('progressCircle');
const progressBar = document.getElementById('progressBar');
const circumference = 2 * Math.PI * 18;

function updateProgress() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

    progressBar.style.strokeDashoffset = circumference * (1 - progress);

    if (progress > 0.01) {
        progressCircle.classList.add('visible');
    } else {
        progressCircle.classList.remove('visible');
    }
}

window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);

progressCircle.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

updateProgress();