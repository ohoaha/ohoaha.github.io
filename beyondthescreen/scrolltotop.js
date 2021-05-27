$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#scrolltotop').fadeIn();
    } else {
        $('#scrolltotop').fadeOut();
    }
});
$(document).ready(function() {
    $("#scrolltotop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
