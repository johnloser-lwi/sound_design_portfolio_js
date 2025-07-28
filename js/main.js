

const setupParallaxScroll = () => {
    $("main").attr('data-parallaxus-easing');
    $(".main-section").attr('data-parallaxus-transform',
        `{
            "0": {"opacity": 1, "translateY": "0%"},
            "50": {"opacity": 1, "translateY": "20%"},
            "60": {"opacity": 0.5, "translateY": "40%"},
            "100": {"opacity": 0, "translateY": "0%"}
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
    $(".hero-parallax").attr("data-pointer-events", "true");
    $(".hero-parallax__layer1").attr("data-depth", "0.2");
    $(".hero-parallax__layer2").attr("data-depth", "0.05");

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