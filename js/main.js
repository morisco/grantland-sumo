(function ($) {

$(document).ready(function(){
   $('.slides-1').slick({
      slidesToShow: 3,
      dots: true,
      focusOnSelect:true,
      arrows :false,
      onInit: function(){
         var caption = $('.slides-1 div[index="0"]').attr('data-caption');
         $('.caption-1').html(caption);
      },
      onAfterChange: function(){
         var index = $('.slides-1').slickCurrentSlide();
         var caption = $('.slides-1 div[index="'+index+'"]').attr('data-caption');
         $('.caption-1').html(caption);
      }
   });

   $('.slides-2').slick({
      slidesToShow: 3,
      dots: true,
      focusOnSelect:true,
      arrows :false,
      onInit: function(){
         var caption = $('.slides-2 div[index="0"]').attr('data-caption');
         $('.caption-2').html(caption);
      },
      onAfterChange: function(){
         var index = $('.slides-2').slickCurrentSlide();
         var caption = $('.slides-2 div[index="'+index+'"]').attr('data-caption');
         $('.caption-2').html(caption);
      }
   });

   initScrollWatch();

});

function initScrollWatch(){
   window.startSword = $('#sword').position().top - $(window).height();
   window.swordHeight = $('.blood').height();
   window.swordWidth = $('.blood').width();
   window.swordLeft = parseInt($('.blood').position().left);
   window.swordTop = parseInt($('.blood').position().top);
   window.endSword = $('#sword').position().top + $(window).height();
   window.lastScroll = 0;
   $(window).on('scroll',trackScroll);
}

function trackScroll(){
   var scrollPos     = $(window).scrollTop(),
       scrollRatio   = scrollPos/startSword
       width         = '',
       height        = '',
       newLeft       = '',
       newTop        = '';

   if(startSword < scrollPos && endSword > scrollPos){
         
         width    = swordWidth * scrollRatio;
         height   = swordHeight * scrollRatio;
         newLeft  = swordLeft * (1-((1-swordWidth/width)/2.3));
         newTop   = swordTop * (1-((1-swordWidth/width)/3.3));

         $('.blood').css({'height':height, 'width':width, 'left' : newLeft, 'top':newTop});
   }
   lastScroll = scrollPos;
}

}(jQuery));