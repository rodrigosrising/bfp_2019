// The jQuery script that makes the Arrows for quantity work.
jQuery(document).ready(function($) {

    $(document).foundation();

    new WOW().init(); // scroll animation effects

    // $(".navButton").click(function () {
    //     $(".responsiveNav").addClass("visibleNav");
    //     $(".body").addClass("scrollLock");
    // });


    // $(".responsiveNavCloseButton").click(function () {
    //     $(".responsiveNav").removeClass("visibleNav");
    //     $(".body").removeClass("scrollLock");
    // });
    // $(document).keydown(function (e) {
    //     // ESCAPE key pressed
    //     if (e.keyCode == 27) {
    //         $(".responsiveNav").removeClass("visibleNav");
    //         $(".body").removeClass("scrollLock");
    //     }
    // });






    $( ".website-link" ).hover(
        function() {
            $("#quemSomos").addClass("bg-cor7");
        }, function() {
            $("#quemSomos").removeClass("bg-cor7");
        }
    );
    $( ".design-link" ).hover(
        function() {
            $("#quemSomos").addClass("bg-cor8");
        }, function() {
            $("#quemSomos").removeClass("bg-cor8");
        }
    );
    $( ".publicidade-link" ).hover(
        function() {
            $("#quemSomos").addClass("bg-cor9");
        }, function() {
            $("#quemSomos").removeClass("bg-cor9");
        }
    );
    $( ".editorial-link" ).hover(
        function() {
            $("#quemSomos").addClass("bg-cor10");
        }, function() {
            $("#quemSomos").removeClass("bg-cor10");
        }
    );
    $( ".especiais-link" ).hover(
        function() {
            $("#quemSomos").addClass("bg-amarelo");
        }, function() {
            $("#quemSomos").removeClass("bg-amarelo");
        }
    );



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

