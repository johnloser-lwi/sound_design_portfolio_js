
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

    // mobile menu buttons
    const menuBtn = document.querySelector(".header-links__burger");
    const nav = document.querySelector(".header-links__nav");

    menuBtn.addEventListener("click", () => {
        // Use gsap to show and nav bar and hide burger menu button
        gsap.to(".header-links__nav", {
            opacity: 1,
            duration: 0.2
        });
        gsap.to(".header-links__burger", {
            opacity: 0,
            duration: 0.2
        });

        nav.style.pointerEvents = "unset";

        // when clicking elsewhere close menu
        const closeMenu = (e) => {
            if (e.target.closest(".header-links__burger")) return;
            // Only close if click is outside the nav or burger
            gsap.to(".header-links__nav", {
                opacity: 0,
                duration: 0.2
            });
            gsap.to(".header-links__burger", {
                opacity: 1,
                duration: 0.2
            });
            document.removeEventListener("click", closeMenu);
            nav.style.pointerEvents = "none";
        };
        setTimeout(() => {
            document.addEventListener("click", closeMenu);
        }, 0);
    });
}

const setupWindow = () => {
    const nav = document.querySelector(".header-links__nav");
    // reset nav bar behavior when window size changes
    window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
            // window width < 768px
            // hide nav bar and make sure it doesn't have point events
            nav.style.opacity = "0";
            nav.style.pointerEvents = "none";
        }
        else {
            // reverse the change above
            nav.style.opacity = "1";
            nav.style.pointerEvents = "unset";
        }
    })
}