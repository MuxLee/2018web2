$(document).ready(function () {
    var img = $("#slide > li > img");
    var count = 0;
    var max = img.length-1;
    /*
     function slide() {
        $(img[count]).animate({"left": "1000"}, function () {
            $(this).css({"left": "-1000"});
        });
        count++;
        if (count > max) count = 0;
        $(img[count]).animate({"left": "0"});
    }
     */
    function wrapWindowMask() {
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#popup_mask').css({'width': maskWidth, 'height': maskHeight});

        $('#popup_mask').fadeIn(500);
        $('#popup_mask').fadeTo("slow", 0.7);

        var left = ($(window).scrollLeft() + ($(window).width() - $('.popup').width()) / 2);
        var top = ($(window).scrollTop() + ($(window).height() - $('.popup').height()) / 2);

        $('.popup').css({'left': left, 'top': top, 'position': 'absolute'});
        $('.popup').show();
    }

    $('.login').click(function(e){
        e.preventDefault();
        wrapWindowMask();
    });

    $('#sign_ok').click(function(e){
        e.preventDefault();
        $('#popup_mask, .popup').fadeOut();
    });

    $('#popup_mask').click(function(){
        $(this).hide();
        $('.popup').hide();
    });

    setInterval(function () {
        if($(img[count]).is(":animated"))return;
        $(img).eq(count).animate({"left": "1000px"},800 ,function () {
            $(this).css({"left": "-1000px"});
        });
        console.log(count);
        count++;
        if (count > max) count = 0;
        $(img[count]).animate({"left": "0"},800);
    },2000);
});
