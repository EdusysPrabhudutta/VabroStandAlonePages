// <script src="/lib/jquery/jquery.min.js"></script>
// <script src="/lib/bootstrap/bootstrap.min.js"></script>
// Preloader js
$(window).on("load", function () {
  "use strict";
  $(".preloader").fadeOut(0);
});

(function ($) {
  "use strict";
  $(".code-tabs ul.nav-tabs").each(function () {
    $(this).find("li:first").addClass("active");
  });

  $(".code-tabs .tab-content").each(function () {
    $(this).find("div:first").addClass("active");
  });

  $(".accordion-header").on("click", function () {
    let that = $(this);
    $(this)
      .closest(".accordion")
      .find(".accordion-item .accordion-header")
      .each(function () {
        if ($(this).is(that)) {
          if ($(this).hasClass("active")) {
            $(this).addClass("collapsed").removeClass("active");
          } else {
            $(this).addClass("active").removeClass("collapsed");
          }
        } else {
          if ($(this).closest(".faq-section").length != 0) {
            return;
          }
          if ($(this).hasClass("active")) {
            $(this).addClass("collapsed").removeClass("active");
          }
        }
      });
  });
})(jQuery);
