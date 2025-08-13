
// generate projects
const loadProjects = () => {
    const container = document.querySelector(".project-container");

    // if there isn't a container with class ".project-container" stop the execution
    if (!container)  return;

    // get the video list defined in video-info.js
    videoList().forEach(video => {
        // create container for each youtube video
        const frame = document.createElement("div");
        frame.className = "project-container__frame";
        frame.innerHTML = `
            <iframe class="project-container__video" width="560" height="315" src="https://www.youtube.com/embed/${video.video_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="project-container__video-info">
                <h2 class="project-container__video-info__title">${video.title}</h2>
                <p class="project-container__video-info__description">${video.description}</p>
            </div>
        `;

        // add the video to the container
        container.append(frame);
    });
}

const setupProjectAnimation = () => {
    gsap.from("h1", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power1.inOut"
    });

    gsap.from(".project-container__frame", {
        y: 100,
        stagger: 0.3,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power1.inOut"
    });
}

const setupProjectPage = () => {
    $(() => {
        loadProjects();
        setupProjectAnimation();
    })
}