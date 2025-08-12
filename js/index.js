
// initialize barba
barba.init({
    // prevent certain elements using barba navigation, but doesn't really achieve what i want
    // so I had to add custom click events to every anchor tag in order to have more control
    // but I leave it here just in case
    prevent: ({ el }) => el.classList && el.classList.contains('prevent-barba'),
    // define a default transition for pages
    transitions: [
        {
            name: "default",
            // the leave transition for the previous page
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0, scale: 1.2, duration: 0.2, ease: "power1.out" });
            },
            beforeEnter: ({current}) => {
                // making sure the next page will enter from the top instantly
                window.scrollTo({top: 0, behavior: "instant"});

                // hide previous screen so it doesn't take up space and causing problems in animation
                current.container.style.display = "none";

                // Prevent footer flashing during transition
                document.querySelector("footer").style.display = "none";
            },
            enter(data) {
                // set a bit delay to deal with the css delay. It can avoid some weird flashing due to css unload and load.
                return gsap.from(data.next.container, { opacity: 0, y: "10%", scale: 1.2, duration: 0.2, delay: 0.2, ease: "power1.in" });
            },
            afterEnter() {
                // setup custom click events for buttons after the new page loads
                setupButtons();

                // Prevent footer flashing during transition
                document.querySelector("footer").style.display = "unset";
            },
        },
        {
            // this is to bypass barba loading the same page
            // but again, it doesn't work as intended and still causing css unload which will have a weird flash
            // I will leave it here just in case, but it doesn't do anything in the current setup
            name: "self"
        }
    ],
    // setup custom hooks for the page lifecycle
    // namespace is the name of the page
    views: [
        {
            namespace: "home",
            beforeEnter() {
                // load css related to home page
                loadCSS("home");
                setupHomeAnimation();
            },
            // I do realize that I called setupHomeAnimation twice in the lifecycle
            // it's a work around so the bgVideo game play instantly after transition
            afterEnter() {
                setupHomeAnimation();
            },
            afterLeave() {
                // unload css related to home page
                removeCSS("home");
            }
        },
        // pretty much the same thing here
        {
            namespace: "projects",
            beforeEnter() {
                loadCSS("projects");
                // setup project page
                setupProjectPage();
            },
            afterLeave() {
                removeCSS("projects");
            }
        }
    ]
});

setupButtons();
setupHomeAnimation();
gsap.registerPlugin(ScrollTrigger) ;