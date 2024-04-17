$(document).ready(function() {
        $(".fa-times").click(function() {
            $("#special-gift").hide();
        })
    
        $(window).scroll(function() {
            $("header").css("background-color", (window.scrollY > 100) ? "#fff" : "transparent");
        });
    
        $(".showNotification").click(function() {
            $("#notification-container").fadeIn();
        });

        $("#close-btn").click(function() {
                $("#notification-container").fadeOut();
        });
})