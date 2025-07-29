barba.init({
    prevent: ({ el }) => el.classList && el.classList.contains('prevent-barba'),
    transitions: [
        {
            name: "default",
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0, scale: 1.2, duration: 0.2, ease: "power1.out" });
            },
            beforeEnter: ({current}) => {
                // making sure the next page will enter from the top instantly
                window.scrollTo({top: 0, behavior: "instant"});

                // hide current container so it doesn't take up space and causing problems in animation
                current.container.style.display = "none";
            },
            enter(data) {
                // set a bit delay to deal with the css delay. It can avoid some weird flashing due to css unload and load.
                return gsap.from(data.next.container, { opacity: 0, y: "10%", scale: 1.2, duration: 0.2, delay: 0.2, ease: "power1.in" });
            },
            afterEnter() {
                setupButtons();
            },
        },
        {
            name: "self"
        }
    ],
    views: [
        {
            namespace: "home",
            beforeEnter() {
                loadCSS("home");
                setupHomeAnimation();
            },
            // a weird work around so the bgVideo game play instantly after transition
            afterEnter() {
                setupHomeAnimation();
            },
            afterLeave() {
                removeCSS("home");
            }
        },
        {
            namespace: "projects",
            beforeEnter() {
                loadCSS("projects");
                loadProjects();
            },
            afterLeave() {
                removeCSS("projects");
            }
        }
    ]
});

setupButtons();
setupHomeAnimation();