$(function() {

    $(document).keypress("I", function(e) {
        if (e.ctrlKey && e.keyCode == 48) {
            $('.del').removeClass('hide');
        }
    });

    $(document).keypress("I", function(e) {
        if (e.ctrlKey && e.keyCode == 49) {
            $.get("http://ipinfo.io", function(response) {
                alert(response.ip);
            }, "jsonp");
        }
    });

    $('.ghost-botton').click(function() {
        window.alert("WHOA");
        $('.ghost-botton').addClass('animated bounceOutLeft');
    });

    // $('.footer_link').click(function() {
    //     window.alert("WHOA");
    //     $('.jumbo_text').addClass('animated bounceOutLeft');
    // });

    $(document).on('click', 'a', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    //Keep track of last scroll
    var lastScroll = 0;

    $(window).bind('scroll', function() {
        // console.log($(window).scrollTop());

        if ($(window).scrollTop() > 100) {
            $('.footer').hide();
        } else {
            $('.footer').show();
        }

        // $('.bodyWrapper::before').css({
        //     'background-postition': '100%' + '5' + '%',
        //     'filter': 'blur(20px)'
        // })

    });
    // 000000000
    // 000000000
    // 000000000
});