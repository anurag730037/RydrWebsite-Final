!function (a) { "use strict"; var t = a(window); if (t.on("load", (function () { a("#preloader").fadeOut("1000", (function () { a(this).remove() })) })), a.fn.classyNav && a("#uzaNav").classyNav(), a.fn.owlCarousel) { var o = a(".welcome-slides"); o.owlCarousel({ items: 1, loop: !0, autoplay: !0, smartSpeed: 1500, animateIn: "fadeIn", animateOut: "fadeOut", autoplayTimeout: 7e3, nav: !1 }), o.on("translate.owl.carousel", (function () { a("[data-animation]").each((function () { var t = a(this).data("animation"); a(this).removeClass("animated " + t).css("opacity", "0") })) })), a("[data-delay]").each((function () { var t = a(this).data("delay"); a(this).css("animation-delay", t) })), a("[data-duration]").each((function () { var t = a(this).data("duration"); a(this).css("animation-duration", t) })), o.on("translated.owl.carousel", (function () { o.find(".owl-item.active").find("[data-animation]").each((function () { var t = a(this).data("animation"); a(this).addClass("animated " + t).css("opacity", "1") })) })) } a.fn.owlCarousel && a(".portfolio-sildes").owlCarousel({ items: 4, margin: 50, loop: !0, autoplay: !0, smartSpeed: 1500, dots: !0, responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1400: { items: 4 } } }); a.fn.owlCarousel && a(".testimonial-slides").owlCarousel({ items: 1, margin: 0, loop: !0, autoplay: !0, autoplayTimeout: 1e4, smartSpeed: 1500, nav: !0, navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'] }); a.fn.owlCarousel && a(".team-sildes").owlCarousel({ items: 4, margin: 50, loop: !0, autoplay: !0, smartSpeed: 1500, dots: !0, responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1400: { items: 4 } } }); a.fn.imagesLoaded && a(".uza-portfolio").imagesLoaded((function () { a(".portfolio-menu").on("click", "button", (function () { var o = a(this).attr("data-filter"); t.isotope({ filter: o }) })); var t = a(".uza-portfolio").isotope({ itemSelector: ".single-portfolio-item", percentPosition: !0, masonry: { columnWidth: ".single-portfolio-item" } }) })), a(".portfolio-menu button.btn").on("click", (function () { a(".portfolio-menu button.btn").removeClass("active"), a(this).addClass("active") })), a.fn.magnificPopup && a(".video-play-btn").magnificPopup({ type: "iframe" }), a.fn.tooltip && a('[data-toggle="tooltip"]').tooltip(), t.width() > 767 && (new WOW).init(), a.fn.jarallax && a(".jarallax").jarallax({ speed: .2 }), a.fn.scrollUp && t.scrollUp({ scrollSpeed: 2e3, scrollText: '<i class="fa fa-angle-up"</i>' }), t.on("scroll", (function () { t.scrollTop() > 0 ? a(".main-header-area").addClass("sticky") : a(".main-header-area").removeClass("sticky") })), a.fn.counterUp && a(".counter").counterUp({ delay: 15, time: 1500 }), a('a[href="#"]').click((function (a) { a.preventDefault() })) }(jQuery);