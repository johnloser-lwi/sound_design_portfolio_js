const header = document.createElement("header");
header.innerHTML = `
    <div class="header-links">
        <a class="header-links__title link" href="./index.html">Weiqin Yang Sound</a>
        <nav class="header-links__nav">
            <ul>
                <li><a href="#" class="link">Projects</a></li>
                <li><a href="#" class="link">More</a></li>
            </ul>
        </nav>
    </div>
`;
header.classList.add("grid");
document.querySelector("body").prepend(header);