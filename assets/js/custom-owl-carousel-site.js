$('.owl-carousel').owlCarousel({
    rtl: true,
    loop:false,
    margin:20,
    lazyLoad: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            autoplay:true,
            autoplayTimeout: 2000,
            stagePadding: 50,
            loop: true
        },
        600:{
            items:2,
            autoplay:true,
            autoplayTimeout: 2000,
            stagePadding: 50,
            loop: true
        },
        1000:{
            items:2,
            stagePadding: 100,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        }
    }
})