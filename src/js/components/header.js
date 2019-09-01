import {throttle} from "lodash-es";

export default function header() {
    const header = document.querySelector(".js-init--header");
    const body = document.querySelector("body");

    if (header) {
        window.addEventListener("scroll", throttle(function () {
            if (!body.style.top) {
                header.classList.toggle("active", window.scrollY !== 0);
            }
        }, 200));
    }

    $("#main-nav").hcOffcanvasNav({
        insertClose: false,
    });
}
