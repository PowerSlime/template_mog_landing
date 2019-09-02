export default function smoothScroll() {
    $("a[href^='#']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $.scrollTo(this.getAttribute("href"), 400);
    });
}
