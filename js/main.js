

const setupParallaxScroll = () => {
    $(".hero-parallax__layer2").attr('data-parallaxus-transform', '{"0": {"scale": 1}, "80": {"scale": 0.95}, "100": {"scale": 0.9}}');
    $(".hero-parallax__layer2").attr('data-parallax', 'scroll');
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