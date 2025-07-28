

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
            "40": {"translateX": "0%", "opacity":1},
            "100": {"translateX": "0%", "opacity":1}
        }`);

    $(".bio-info__button").attr('data-parallaxus-transform',
        `{
            "0": {"translateX": "600%", "opacity":0},
            "40": {"translateX": "0%", "opacity":1},
            "100": {"translateX": "0%", "opacity":1}
        }`);
    $(".bio img, .bio-title").attr('data-parallaxus-transform',
        `{
            "0": {"translateX": "-50%", "opacity":0},
            "50": {"translateX": "0%", "opacity":1},
            "80": {"translateX": "0%", "opacity":1},
            "100": {"translateX": "0%", "opacity":1}
        }`);

    parallaxusSetup();
}

const setupBgVideo = () => {
    $(".hero-parallax__video").bgVideo({
        showPausePlay: false,
        pauseAfter: 0,
        fadeIn: 0,
    });
}

const setupParallaxJs = () => {
    $(".hero-parallax__layer1").attr("data-depth", "0.2");

    let parallaxInstance = new Parallax(document.querySelector(".hero-parallax"), {
        hoverOnly: true,
    });

    parallaxInstance.friction(0.5, 0.5);
}

$(() => {
    setupBgVideo();
    setupParallaxScroll();
    setupParallaxJs();
})