const header = document.createElement("header");
header.innerHTML = `
    <div class="header-links">
        <a class="header-links__title link" href="./index.html">Weiqin Yang Sound</a>
        <nav class="header-links__nav">
            <ul>
                <li><a href="./projects.html" class="link">Projects</a></li>
                <li><a href="#" class="link">More</a></li>
            </ul>
        </nav>
    </div>
`;
header.classList.add("grid");
document.querySelector("body").prepend(header);

const footer = document.createElement("footer");
footer.innerHTML = `
    <div class="footer-socials">
        <ul>
            <li><a href="#"><img src="./assets/images/brands-github.svg" alt="Github"></a></li>
            <li><a href="#"><img src="./assets/images/brands-instagram.svg" alt="Instagram"></a></li>
            <li><a href="#"><img src="./assets/images/brands-linkedin.svg" alt="LinkedIn"></a></li>
        </ul>
    </div>
    <p class="footer-copyright">&copy;2025 Weiqin Yang. All rights reserved.</p>
`;
footer.classList.add("grid");
document.querySelector("body").append(footer);
