const loadCSS = (css) => {
    $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: `./css/${css}.css`
    }).appendTo("head");
}

const removeCSS = (css) => {
    $(`link[href='./css/${css}.css']`).remove();
}