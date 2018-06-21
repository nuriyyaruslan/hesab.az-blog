$(document).ready(function () {
    $(document).on('click','.up-img',function () {
        $('html, body').animate({scrollTop : 0},400);
        return false;
    })
    if($(document).width()<=769){
        $(".button-collapse").sideNav();
    }

    $(".button-collapse").click(function () {
        if($("#slide-out").offset().left < 0){
            $('.aside-icon').attr("src", "img/blog_icons/close.png");
        } else {
            $('.aside-icon').attr("src", "img/blog_icons/menu.svg");
        }
    })


    $(document).on('click','.side_menu',function () {
        if($(".list-nav").is(':visible')){
            $('.aside-icon').attr("src", "img/blog_icons/menu.svg");
            $('.list-nav').hide();

        } else {
            $('.aside-icon').attr("src", "img/blog_icons/close.svg");
            $('.list-nav').show();
        }
    })

})

