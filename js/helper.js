
/* 
manually load page related css since barba doesn't unload the head
*/
const loadCSS = (css) => {
    $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: `./css/${css}.css`
    }).appendTo("head");
}

/* 
manually unload page related css since barba doesn't unload the head
*/
const removeCSS = (css) => {
    $(`link[href='./css/${css}.css']`).remove();
}

/* 
This is function is used to add custom click events to prevent default barba navigation on the same page.
*/
const setupButtons = () => {
    const btns = document.querySelectorAll(".nav-link");

    btns.forEach(btn => {
        // if this anchor is a link on the nav bar, then highlight it if it's the current page
        const isLink = btn.classList.contains("link");
        console.log(window.location.href);
        if (window.location.href === btn.href && isLink) {
            btn.classList.add("link-current");
        } else if (isLink) {
            btn.classList.remove("link-current");
        }

        // add click event
        btn.addEventListener("click", e => {
            // prevent default navigation event
            e.preventDefault();

            // skip navigation if it's the same page
            if (window.location.href === btn.href) return;

            // add the highlight here so it stay highlighted during transition
            if (isLink) btn.classList.add("link-current");
            barba.go(btn.href);
        });
    });
}
