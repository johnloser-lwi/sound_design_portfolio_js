barba.init({
    prevent: ({ el }) => el.classList && el.classList.contains('prevent-barba'),
    transitions: [
        {
            name: "default",
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0, scale: 1.2, duration: 0.2, ease: "power1.out" });
            },
            beforeEnter: ({current}) => {
                current.container.style.display = "none";
            },
            enter(data) {
                return gsap.from(data.next.container, { opacity: 0, y: "10%", scale: 1.2, duration: 0.2, ease: "power1.in" });
            }
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
            },
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
            },
            afterLeave() {
                removeCSS("projects");
            }
        }
    ]
});