$(function(){
    $('#hamb').on('click',function(){
        $('.menu').toggleClass('show');
        $('.menu').addClass('animated fadeInDown');
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
        
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
    });
});