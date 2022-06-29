function spoiler_visible(id) {
    element = document.getElementById("s" + id.toString());
    element.classList.toggle("spoiler-visible");

    element = document.getElementById("c" + id.toString());
    element.classList.toggle("head_checked");

    element = document.getElementById("p" + id.toString());
    element.classList.toggle("icon_rotate");
}