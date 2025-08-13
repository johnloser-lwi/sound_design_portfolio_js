const setupContactAnimation = () => {
    gsap.from("h1", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power1.inOut"
    });

    gsap.from(".contact-form", {
        y: 100,
        stagger: 0.3,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power1.inOut"
    });
}

const setupContactPage = () => {
    setupContactAnimation();
};