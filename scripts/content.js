window.addEventListener("load", () => {
    var jsInitChecktimer = setInterval(checkForJS_Finish, 50);

    function checkForJS_Finish () {
        const section = document.querySelector('div[aria-label="Recommended Channels"');

        if (section) {
            clearInterval(jsInitChecktimer);
            section.remove();
        }
    }
}, false);
