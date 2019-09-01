export default function mainGallery() {
    $(".js-init--main-gallery").each(function () {
        const $this = $(this);

        $this.slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
        })
    });
}
