$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 600,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right-arrow.png"></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});
