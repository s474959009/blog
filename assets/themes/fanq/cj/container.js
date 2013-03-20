$(function(){
    var topDistance = 450;//go-top距顶端距离
    var showDistance = 1;//距离顶端多少距离开始显示go-top
    var gotopCon = "<div class='go-top'><a href='#'><img src='images/gotop.gif' /></a></div>"
    var thisTop = $(window).scrollTop() + topDistance;
    $("#container").css("position","relative");
    $("#container").append(gotopCon);
    $(".go-top").css("top",thisTop);
    if($(window).scrollTop() < showDistance){
        $(".go-top").hide();
        }
    $(window).scroll(function(){
        thisTop = $(this).scrollTop() + topDistance;
        $(".go-top").css("top",thisTop);
        if($(this).scrollTop() < showDistance){
            $(".go-top").fadeOut("fast");
            }else{
                $(".go-top").fadeIn("fast");
                }
        });
    $("a",".go-top").click(function(){
        $("html").animate({scrollTop:0},"fast");//IE,FF
        $("body").animate({scrollTop:0},"fast");//Webkit
        return false;
        });
    });