$(function(){

    $('.category > li').hover(function(){

        $(this).find('.sub').stop().slideToggle();

    });

});

$(function(){
    $('.sub > li').mouseover(function(){
        $(this).find('.sub_2').stop().show();
    }).mouseout(function(){
        $('.sub_2').stop().hide();
    });
});