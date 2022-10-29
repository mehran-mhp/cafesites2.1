$('.owl-carousel').owlCarousel({
    rtl: true,
    loop:false,
    margin:20,
    lazyLoad: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
        },
        600:{
            items:4,
        },
        1000:{
            items:6,
        }
    }
})