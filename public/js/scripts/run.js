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

        $('.bodyWrapper').css({
            'background-postition': '100%' + '50' + (lastScroll * 0.5) + '%',
            // 'filter': 'blur(20px)'
        })

    });

    // $('.voteModal').on('shown.bs.modal', function() {
    //     $(this).focus()
    // });

    // $('.modal').on('shown.bs.modal', function() {
    //     $(this).focus();
    // });


    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // 000000000
    // 000000000
    // 000000000
});