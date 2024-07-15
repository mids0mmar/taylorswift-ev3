AOS.init(); //script-propio-de-plugin

let slider = tns({
    container: '.my-slider',
    items: 1,
    // center: true,
    // loop: false,
    // swipeAngle: false,
    // speed: 400,
    autoplay: false,
    nav: false,
    controls: true,
    prevButton: '.custom-prev',
    nextButton: '.custom-next',
    responsive: {
        640: {
            edgePadding: 0,
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30
        },
        900: {
            items: 3
        }
    }
});
