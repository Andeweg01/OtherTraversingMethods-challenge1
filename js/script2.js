$(document).ready(function(){
 // put your code here

    $(".theButton").mouseenter(function(){
        $(this).addClass("makeBlack");
    })
    $(".theButton").mouseout(function(){
        $(this).removeClass("makeBlack");
    })
    $(".theButton").click(function(){
        $(this).fadeTo(500, 0);
    })
    $(".theButton").click(function(){
        $("#panel .container").siblings().fadeTo(500, .1);
    })
    $(".superButton").click(function(){
        $("#panel .container").siblings().fadeTo(500, 1);
    })
});