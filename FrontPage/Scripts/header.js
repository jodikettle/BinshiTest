function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 80
            container = $("header"),
            header = $(".navbar"),
            logo = $(".navbar-brand")
            jumbo = $(".jumbotron")
            shares = $(".shares-box");
            var mobileScroll = 80;

            var width = $(window).width();


         console.log("Scrolling " + distanceY);

         if (width > 768) {
             if (distanceY >= shrinkOn) {
                 jumbo.addClass("hideJumbo");
                 logo.addClass("showLogo");
                 container.addClass("smallHeader");
                 header.addClass("smaller");
             } else {
                 if (jumbo.hasClass("hideJumbo")) {
                     jumbo.removeClass("hideJumbo");
                 }
                 if (logo.hasClass("showLogo")) {
                     logo.removeClass("showLogo");
                 }
                 if (container.hasClass("smallHeader")) {
                     container.removeClass("smallHeader");
                 }
                 if (header.hasClass("smaller")) {
                     header.removeClass("smaller");
                 }
             }
         }
         else {
             if (distanceY >= mobileScroll) {
                 shares.addClass('hide');
             }
             else {
                 if (shares.hasClass("hide")) {
                     shares.removeClass('hide');
                 }
             }
         }
    });
}
window.onload = init();