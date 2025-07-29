
// use parallaxus for scroll effect
// add a data-parallaxus-transform to enable the plugin on the element
// use a json string to describe the setps of animation
const setupParallaxScroll = () => {
    // hero section
    $(".hero").attr('data-parallaxus-transform',
        `{
            "0": {"opacity": 1, "translateY": "0%"},
            "50": {"opacity": 1, "translateY": "0%"},
            "80": {"opacity": 0.5, "translateY": "25%"},
            "100": {"opacity": 0.5, "translateY": "15%"}
        }`);
    $(".hero-parallax__title-wrap").attr('data-parallaxus-transform',
        `{
            "0": {"opacity": 1, "scale": 1, "translateY": "0%"},
            "30": {"opacity": 0.5, "scale": 0.95, "translateY": "5%"},
            "100": {"opacity": 0, "scale": 0.95, "translateY": "5%"}
        }`);

    $(".hero-link__about-me__wraper").attr('data-parallaxus-transform',
        `{
            "0": {"opacity": 1},
            "10": {"opacity": 0},
            "100": {"opacity": 0}
        }`);

    // bio section
    $(".bio-info__title, .bio-info__text").attr('data-parallaxus-transform',
        `{
            "0": {"translateX": "100%", "opacity":0},
            "20": {"translateX": "0%", "opacity":1},
            "100": {"translateX": "0%", "opacity":1}
        }`);

    $(".bio-info__button").attr('data-parallaxus-transform',
        `{
            "0": {"translateX": "600%", "opacity":0},
            "20": {"translateX": "0%", "opacity":1},
            "100": {"translateX": "0%", "opacity":1}
        }`);
    $(".bio img, .bio-title").attr('data-parallaxus-transform',
        `{
            "0": {"translateX": "-50%", "opacity":0},
            "20": {"translateX": "0%", "opacity":1},
            "80": {"translateX": "0%", "opacity":1},
            "100": {"translateX": "0%", "opacity":1}
        }`);

    parallaxusSetup();
}

// setup bgVideo for hero section
const setupBgVideo = () => {
    $(".hero-parallax__video").bgVideo({
        showPausePlay: false,
        pauseAfter: 0,
        fadeIn: 500,
    });

    // manually play the video since there are some problem with barba transition
    const video = document.querySelector('.jquery-background-video');
    video.play();
}

// for the here title parallax effect
const setupParallaxJs = () => {
    // data-depth defines how much the title follows the mouse
    $(".hero-parallax__layer1").attr("data-depth", "0.2");

    let parallaxInstance = new Parallax(document.querySelector(".hero-parallax"), {
        hoverOnly: true,
    });

    // friction change the behavior of tween
    parallaxInstance.friction(0.5, 0.5);
}

// the about me button need to bypass the barba and scroll to about me section
const setupAboutMeButton = () => {
    $(".hero-link__about-me").click(e => {
        e.preventDefault();
        document.querySelector("#about-me").scrollIntoView({behavior: "smooth"});
    });
}

// setup script for home page
const setupHomeAnimation = () => {
    $(() => {
        setupBgVideo();
        setupParallaxScroll();
        setupParallaxJs();
        setupAboutMeButton();
    });
}