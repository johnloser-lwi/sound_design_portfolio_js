const loadProjects = () => {
    const container = document.querySelector(".project-container");
    if (!container)  return;

    videoList().forEach(video => {
        const frame = document.createElement("div");
        frame.className = "project-container__frame";
        frame.innerHTML = `
            <iframe class="project-container__video" width="560" height="315" src="https://www.youtube.com/embed/${video.video_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2 class="project-container__video-title">${video.title}</h2>
            <p class="project-container__video-description">${video.description}</p>
        `;

        container.append(frame);
    });
}