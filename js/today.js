$(function(){

    $.ajax({

        url: "./js/today.json",

        dataType: "json",

        success : function(data){

        if(data.length>0){

            for(var i in data){

            $(".imgbox").eq(i).find("img").attr("src", "img/"+data[i].img);

            $(".imgbox").eq(i).find("span").text(data[i].left);

            $(".flexbox").eq(i).find("p").text(data[i].title);

            $(".flexbox").eq(i).find("h5").text(data[i].subtitle);

            $(".flexbox").eq(i).find("span").text(data[i].discount);

            $(".flexbox").eq(i).find("a").text(data[i].price);

            }
        }
        }
    });
});



function prev(){

$('.slide li:last').prependTo('.slide');
$('.slide').css('margin-left',-1920);
$('.slide').stop().animate({marginLeft:0},1000);
}

function next(){
$('.slide').stop().animate({marginLeft:-1920},1000, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
});
}


function slide(){
$('.slide').stop().animate({marginLeft:-1920},1000, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
});
}

setInterval(slide, 3000);
$(function(){
    $('.prev').click(function(){    
        prev();
    });

    $('.next').click(function(){
        next();
    });
});

