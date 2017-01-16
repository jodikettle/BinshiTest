function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 80
            container = $("header"),
            header = $(".navbar"),
            logo = $(".navbar-brand")
            jumbo = $(".jumbotron");


        console.log("Scrolling " + distanceY);

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
    });
}
window.onload = init();