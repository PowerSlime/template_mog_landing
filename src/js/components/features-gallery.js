export default function featuresGallery() {
    $(".js-init--features-gallery").each(function () {
        const $this = $(this);

        $this.slick({
            arrows: false,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    });
}
