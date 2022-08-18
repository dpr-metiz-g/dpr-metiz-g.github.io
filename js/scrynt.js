$(document).ready(function(){


//--------    accardion В ----------------
$('.wrapper>article').hide();
 
  
$('.wrapper>h3').click(function() {
  
  var findArticle = $(this).next();
  var findWrapper = $(this).closest('.wrapper');
  
  if (findArticle.is(':visible')) {
    findArticle.slideUp('fast');
  }
  else {
    findWrapper.find('>article').slideUp('fast');
    findArticle.slideDown('fast');
  }
    setTimeout(() => {  //изменяем высоту окна под аккардеон
      var hAb_1= $('.wrapperA ').height(); 
 
      $('.cont-mash-bild').animate({
        'height': hAb_1 + 280
       } , 400 );
    }, 200);

});
//-----------------accardion A-----------

$('.wrapper ').hide();

$('.wrapperA>h2').on('click',function() { 

$('.wrapperA ').addClass('anima-wrapperA');

  $('.wrapper ').slideUp('fast');
  $('.wrapper > article ').slideUp('fast');

  var findArticleClass = $(this).next();
  var hA_1= 0;
  var hAoff_1=0;
   if  (findArticleClass.is(':visible')){
    $('.wrapper ').closest('.wrapper').slideUp('fast'); 
//-------------------
setTimeout(() => {  //изменяем высоту 
  hAoff_1 = $('.mash-bild').height(); 
  $('.cont-mash-bild').animate({
    'height': hAoff_1 +280
   } , 800 );
  

        }, 350); 

    findArticleClssa.slideDown('fast');
   } else  {
    findArticleClass.slideDown('fast');
  }

    setTimeout(() => {  //изменяем высоту 
      hA_1 = $('.mash-bild').height(); 
         $('.cont-mash-bild').animate({
        'height': hA_1 +280
       } , 400 );
    }, 350); 

});


//     menu -------------
  $(".fa-bars").on('click',upMeny);
  function upMeny(){
   $(".min-nav-heder").fadeToggle(350).hover(maiMeny,doutMeny);
  }   
  function maiMeny() {
     $(".min-nav-heder").css({"transform":"scale(1.2)", 'transition': 'all .45s ease'});
  }
  function doutMeny(){
   $(".min-nav-heder").fadeOut(850);
  }
$('.min-nav-heder >a').click(function(){
  $(".min-nav-heder").fadeOut(350);
});

  // --------------map------------

  $('.b1').on('click',upSert);
  function upSert(){ 
   $('#cont-up').fadeIn(350);
  }
  $('#x-sertf').on('click',doutSert);
  function doutSert(){
   $('#cont-up').fadeOut(350);
  }

  $('.b2').on('click',upSert2);
  function upSert2(){
   $('#cont-up2').fadeIn(350);
  }
  $('#x-sertf2').on('click',doutSert2);
  function doutSert2(){
   $('#cont-up2').fadeOut(350);
  }

  // ---------------------zakaz----------------

  $('.btn-prais , .btn-footer').on('click', function() {
    $('.s-zakaz').fadeIn(200); 
   });
  
  $('#x-form,#f-x').on('click',  function (){
    $('.s-zakaz').fadeOut();
   });
// // ------------------------

//---------slider partner---------
$('.cont-slid-top').slick({
  infinite: true,
  autoplay: true,
  speed: 1500,               //время
  slidesToShow: 5,         //основной размер
  slidesToScroll: 2,  
  prevArrow : false,
  nextArrow : false,
  responsive: [
    {
      breakpoint: 1024,        // до 1024
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,         // до 600
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2 ,
      }
    },
    {
      breakpoint: 480,         // до 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
      }
    }
  ]
});
// --------slider   firm ----------------------
$('.cont-slid').slick({
  infinite: true,
  speed: 300,               //время
  slidesToShow: 4,         //основной размер
  slidesToScroll: 1,  
  prevArrow : "<button class= ' prev arrow ' >&#10095</button>",
  nextArrow : "<button class= ' next arrow ' >&#10094</button>",
  responsive: [
    {
      breakpoint: 1024,        // до 1024
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow : "<button class= ' prev arrow ' >&#10095</button>",
        nextArrow : "<button class= ' next arrow ' >&#10094</button>"
      }
    },
    {
      breakpoint: 600,         // до 600
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1 ,
        prevArrow : "<button class= ' prev arrow ' >&#10095</button>",
        nextArrow : "<button class= ' next arrow ' >&#10094</button>"
      }
    },
    {
      breakpoint: 480,         // до 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        prevArrow : "<button class= ' prev arrow ' >&#10095</button>",
        nextArrow : "<button class= ' next arrow ' >&#10094</button>"
      }
    }
  ]
});

 //  -----button top  кнопка Наверх----------------
 $(window).scroll(function(){
  if ($(this).scrollTop() > $(this).height())
  {
    $(".btn-up").addClass("act");
  }else{
    $(".btn-up").removeClass("act");
  }
});
$('.btn-up').click(function(){
  $('html , body').stop().animate({scrollTop:0},'slow','swing');
});



});
//-------------------прелоудер ---------------
$(window).on('load',function(){
  $(".preloyder").delay(500).fadeOut(100);
});

