function slider(){
    console.log('slider start');
    var items = $('.members-slider li');
    var actives = [];
    var next;
    var prev;
    for(var i = 0; i < items.length; i++){
        if($(items[i]).css('display') != 'none'){
            actives.push(items[i]);
        }
    }
    next = actives.length % items.length;
    prev = (actives.length + 1) % items.length;
    if($(this).hasClass('right')){
        $(actives[actives.length-1]).addClass('hide');
        $(items[actives.length-1]).removeClass('hide');
        $(items[next]).prependTo(".members-slider ul");
    }else if($(this).hasClass('left')){
        $(actives[0]).addClass('hide');
        $(items[prev]).removeClass('hide');
        $(items[prev]).appendTo(".members-slider ul");
    }
    console.log(actives);

};

$(function(){
    $('#hamb').on('click',function(){
        $('.menu').toggleClass('show');
        $('.menu li').toggleClass('show');
    });
    $('.angle').on('click',slider);
    $('.works-items .item').hover( function(){
        $(this).children().removeClass('hide');
    }, function(){
        $(this).children().addClass('hide');
    });

    $('.blog-item').hover( function(){
        $(this).find('.hover').addClass('red');
    }, function(){
        $(this).find('.hover').removeClass('red');
    });
});