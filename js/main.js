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
    var members = new Slider('.members-slider');
    $('.control-circle li').on('click',function(){
      if(!$(this).hasClass('active')){
        var items = $('.quote-item li');
        $('.control-circle .active').removeClass('active');
        $(this).addClass('active');
        $('.quote-item .actives').css('display','none');
        $('.quote-item .actives').removeClass('actives');
        $(items[$(this).index()]).addClass('actives');
        $(items[$(this).index()]).fadeIn();
      }
    });
});
function Slider(slider){
  var item = $(slider).find('li');
  var controllers = $(slider).find('.angle');
  this.sliderWidth = function(){
      return $(slider).width();
  }
  this.sliderHeight = function(){
      return $(slider).height();
  }
  this.itemWidth = function(){
      var item1 = $(slider).find('li');
      return $(item1).width();
  }
  this.getAlign = function(sliderWidth,itemWidth,amount){
    var amToShow = Math.min(Math.floor(sliderWidth/itemWidth),amount);
    var whiteSpace = sliderWidth - itemWidth*amToShow;
    var align = whiteSpace/(amToShow+1);
    return align;
  }
  this.itemsAmount = function(){
      var item = $(slider).find('li');
      return item.length;
  }
  this.startedShowing = function(align){
    var item1 = $(slider).find('li');
    $(item1).css('margin-left',align);
  }

  var that = this;
  $(window).on('resize',function(){
    //console.log(that.sliderWidth(),that.itemWidth(),that.itemsAmount());
    that.startedShowing(that.getAlign(that.sliderWidth(),that.itemWidth(),that.itemsAmount()))
  });

  var moveLeft = function(){
    var ul = $(slider).find('ul').get(0);
    var item = $(slider).find('li:last-child');
    $(item).clone().prependTo(ul);
    $(ul).css('left',-(that.itemWidth() + that.getAlign(that.sliderWidth(),that.itemWidth(),that.itemsAmount())));
    $(ul).animate({
            left:0
        },400,function(){
          $(ul).css('left','');
          item.remove();
        });
  }
  var moveRight = function(){
    var ul = $(slider).find('ul').get(0);
    var item = $(slider).find('li:first-child');
    var width = item.width();
    var align = that.getAlign(that.sliderWidth(),width,that.itemsAmount());
    $(item).clone().appendTo(ul);
    $(ul).animate({
            right:width+align
        },400,function(){
          $(ul).css('right','');
          item.remove();
        });
  }
  $(controllers).on('click',function(){
    this.id == 'left' ? moveLeft():moveRight();
  });

  this.startedShowing(this.getAlign(this.sliderWidth(),this.itemWidth(),this.itemsAmount()));
}
