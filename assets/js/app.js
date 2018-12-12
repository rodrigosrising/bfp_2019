// The jQuery script that makes the Arrows for quantity work.
jQuery(document).ready(function($) {

    $(document).foundation();

    new WOW().init(); // scroll animation effects

    $(".navButton").click(function () {
        $("html").toggleClass("scrollLock");
        $(".body").toggleClass("open");
    });


    // $(".responsiveNavCloseButton").click(function () {
    //     $("html").removeClass("scrollLock");
    //     $(".body").removeClass("open");
    // });


    // $( ".navButton" ).toggleClass(function() {
    //     if ( $( this ).parent().is( ".bar" ) ) {
    //         $("html").addClass("scrollLock");
    //         $(".body").addClass("open");
    //     } else {
    //         $("html").removeClass("scrollLock");
    //         $(".body").removeClass("open");
    //     }
    // });

    $(document).keydown(function (e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            $("html").removeClass("scrollLock");
            $(".body").removeClass("open");
        }
    });





    // $( ".website-link" ).hover(
    //     function() {
    //         $("#quemSomos").addClass("bg-cor7");
    //     }, function() {
    //         $("#quemSomos").removeClass("bg-cor7");
    //     }
    // );
    // $( ".design-link" ).hover(
    //     function() {
    //         $("#quemSomos").addClass("bg-cor8");
    //     }, function() {
    //         $("#quemSomos").removeClass("bg-cor8");
    //     }
    // );
    // $( ".publicidade-link" ).hover(
    //     function() {
    //         $("#quemSomos").addClass("bg-cor9");
    //     }, function() {
    //         $("#quemSomos").removeClass("bg-cor9");
    //     }
    // );
    // $( ".editorial-link" ).hover(
    //     function() {
    //         $("#quemSomos").addClass("bg-cor10");
    //     }, function() {
    //         $("#quemSomos").removeClass("bg-cor10");
    //     }
    // );
    // $( ".especiais-link" ).hover(
    //     function() {
    //         $("#quemSomos").addClass("bg-amarelo");
    //     }, function() {
    //         $("#quemSomos").removeClass("bg-amarelo");
    //     }
    // );



    $('.blogHomeSlider').owlCarousel({
        loop:true,
        autoplay: true,
        autoplaySpeed: 350,
        autoplayHoverPause: true,
        margin:10,
        nav:false,
        items:1,
    })

});

