var interval = setInterval(modifySidebar, 50);

function modifySidebar() {
    const section = document.querySelector('div[aria-label="Recommended Channels"');
    console.log('inhere')

    if (section) {
        clearInterval(interval);
        section.remove();
    }
}
