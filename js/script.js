// basic theme toggle
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    if (localStorage.getItem('lightmode') === 'enabled') {
        body.classList.add('lightmode');
    }

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === "d") {
            if (body.classList.contains('lightmode')) {
                body.classList.remove('lightmode');
                localStorage.setItem('lightmode', 'disabled');
            } else {
                body.classList.add('lightmode');
                localStorage.setItem('lightmode', 'enabled');
            }
        }
    });
});