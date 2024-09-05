/* Mobaile menu slider */
$('.navbar-toggler').on("click", function () {
    $('.bix-sidebar-overlay').fadeIn();
    $('.bix-mobile-menu').addClass("bix-menu-open");
});

$('.bix-sidebar-overlay, .bix-close').on("click", function () {
    $('.bix-sidebar-overlay').fadeOut();
    $('.bix-mobile-menu').removeClass("bix-menu-open");
});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});


// 
$('.morelesss-button').click(function() {
    var $this = $(this);
    $this.closest('.recommended-text').find('.moretextt').slideToggle(); 
    if ($this.text() == "διαβάστε περισσότερα") {
      $this.text("διάβασε λιγότερο");
    } else {
      $this.text("διαβάστε περισσότερα");
    }
  });