export default function featuresGallery() {
    $(".js-init--features-gallery").each(function () {
        const $this = $(this);

        $this.slick({
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    });
}
