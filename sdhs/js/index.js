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
