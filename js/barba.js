barba.init({
    transitions: [
        {
            name: "default",
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0, scale: 1.2, duration: 0.3, easing: "ease" });
            },
            beforeEnter: ({current}) => {
                current.container.style.display = "none";
            },
            enter(data) {
                return gsap.from(data.next.container, { opacity: 0, y: "10%", scale: 0.8, duration: 0.3, easing: "ease" });
            }
        },
        {
            name: "self"
        }
    ],
    views: [{
        namespace: "home",
        beforeEnter() {
            setupHomeAnimation();
        }
    }]
});