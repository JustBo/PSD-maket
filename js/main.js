$(function(){

    $('a[href^="#"').click( function() {
        if($(this).attr('class') === "scroll"){
            var scroll_element = $(this).attr('href');
        }
        $('html, body').animate({ scrollTop:$(scroll_element).offset().top }, 900);
        return false;
  });

    $('#hamb').on('click',function(){
        if($('.menu').hasClass('show')){
            $('.menu').addClass('animated fadeOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function(){
                    $(this).removeClass('animated fadeOutRight');
                    $('.menu').removeClass('show');
                });
        }else{
          $('.menu').addClass('show');
          $('.menu').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
              function(){
                  $(this).removeClass('animated fadeInRight');
              });
        }
    });

    $('.works li').on('click',function(){
        var workType = $(this).html();
        var items = $('.works-items .work');
        var i;
        $('.works ul>.active').removeClass('active');
        $(this).addClass('active');
        if(workType == 'All'){
            for(i = 0; i < items.length; i++){
                $(items[i]).removeClass('hide');
            }
        }else{
            var itemsType = $('.works-items .item .work-type p');
            for(i = 0; i < items.length; i++){
                if($(itemsType[i]).html() != workType){
                    $(items[i]).addClass('hide');
                }else{
                    $(items[i]).removeClass('hide');
                }
            }
        }
        $('.works-items').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function(){
                $(this).removeClass('animated fadeInUp');
            });
    });
    $('.works-items .item').hover( function(){
        $(this).find('.work-info').removeClass('hide');
        $(this).find('.work-info').addClass('animated zoomIn');
    }, function(){
        $(this).find('.work-info').addClass('hide');
    })
    $('.blog-item').hover( function(){
        $(this).find('.hover').addClass('red');
    }, function(){
        $(this).find('.hover').removeClass('red');
    });
    $('.slides').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('#left'),
        nextArrow: $('#right'),
        responsive:[{
            breakpoint:1212,
            settings:{
                slidesToShow: 3,
            }
        },
        {
            breakpoint:920,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint:570,
            settings:{
                slidesToShow: 1,
            }
        }],
    });
    $('.quote-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        dots:true,
    });
});
