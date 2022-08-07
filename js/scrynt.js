$(document).ready(function(){

  // рисуем шестигранник
  function draw1(){
    let canvas = document.getElementById('canvas1');
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(10,0);
    ctx.lineTo(30,0);
    ctx.lineTo(40,20);
    ctx.lineTo(30,40);
    ctx.lineTo(10,40);
    ctx.lineTo(0,20);
    ctx.fillStyle = '#f5f5f5';
    ctx.fill();
  }  draw1();

  function draw2(){
    let canvas = document.getElementById('canvas2');
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(10,0);
    ctx.lineTo(30,0);
    ctx.lineTo(40,20);
    ctx.lineTo(30,40);
    ctx.lineTo(10,40);
    ctx.lineTo(0,20);
    ctx.fillStyle = '#f5f5f5';
    ctx.fill();
  }  draw2();

  function draw3(){
    let canvas = document.getElementById('canvas3');
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(10,0);
    ctx.lineTo(30,0);
    ctx.lineTo(40,20);
    ctx.lineTo(30,40);
    ctx.lineTo(10,40);
    ctx.lineTo(0,20);
    ctx.fillStyle = '#f5f5f5';
    ctx.fill();
  }  draw3();
  
  function draw4(){
    let canvas = document.getElementById('canvas4');
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(10,0);
    ctx.lineTo(30,0);
    ctx.lineTo(40,20);
    ctx.lineTo(30,40);
    ctx.lineTo(10,40);
    ctx.lineTo(0,20);
    ctx.fillStyle = '#f5f5f5';
    ctx.fill();
  }  draw4();


//--------    accardion  ----------------
$('.wrapper>article').not(':first-of-type').hide();
// $('.wrapper>article').hide();  
  
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
});
//     menu -------------
  $(".fa-bars").on('click',upMeny);
  function upMeny(){
   $(".min-nav-heder").fadeIn(350).hover(maiMeny,doutMeny);
  }
   
  function maiMeny() {
     $(".min-nav-heder").css({"transform":"scale(1.2)", 'transition': 'all .45s ease'});
  }
  function doutMeny(){
   $(".min-nav-heder").fadeOut(850);
  }
//     imput text-------------
$("#loop").on('click',upText);
function upText(){
 $(".input-top-wrap").fadeIn(250);
}
$(".cont-text-heder").on('click',doutText);
function doutText(){
 $(".input-top-wrap").fadeOut(350);
}
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
    $('.s-zakaz').fadeIn(300); 
   });
  
  $('#x-form,#f-x').on('click',  function (){
    $('.s-zakaz').fadeOut(300);
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

