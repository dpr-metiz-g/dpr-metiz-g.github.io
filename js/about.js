$(document).ready(function(){
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
 $(".input-top-wrap").fadeIn(350);
}
$(".about-text,.cont-calck").on('click',doutText);
function doutText(){
 $(".input-top-wrap").fadeOut(350);
}

// ---------------img button -----------------
$('.about-img').hover(function(){
  $('.ab-button').fadeIn(500);
},function(){
  $('.ab-button').fadeOut(500);
})
$('a[href=" #form-prais"],.btn-footer').on('click', function() {
  $('.hidden').fadeIn(500);
  var datatext=$(this).data('text');
  var dataform=$(this).data('form');
  $('.form-callback> h2').text(datatext);
  $('.hidden> [name="admin-data"]').val(dataform);
 });

$('#x-form').on('click',  function (){
  $('.hidden').fadeOut(500);
 });

  // ---------------------zakaz----------------

  $('.btn-footer').on('click', function() {
    $('.s-zakaz').fadeIn(300); 
   });
  
  $('#x-form').on('click',  function (){
    $('.s-zakaz').fadeOut(300);
   });

// ----------calckulator----------------------

$('#formCalk').on('submit',function(e){
  e.preventDefault();
});
var  numb,radio,mass ;
var rezul=0;
var rezultat=0;

// посчитывает запрос
$('#app').on('click', function (){
  var numb= $('#number').val();
  numb=parseFloat(numb); 
    if( (rezul!=NaN) && (numb!=NaN) ){
      if(checkRadio()==11){
        rezultat=rezul*numb;
       rezultat=rezultat.Crop(3);
        $('#rezul').text(rezultat+' кг');
      }
      if(checkRadio()==22){
        rezultat=parseInt(numb/rezul);
        rezultat=rezultat.Crop(3);
        $('#rezul').text(rezultat+' шт');
      }
    }
 });
// для округления чисел
 Number.prototype.Crop = function (x){
  var s = this+'', a = s.split('.');
  a[1]=a[1]||'';
  return parseFloat(a[0]+'.'+a[1].substring(0,x));
}


function checkRadio(){
  var radio=$('input[name =ves]:checked','#formCalk').val();
  return radio;
}
var ulBlock ="";
var wHeig_x=0;
var wHeig=$('.c-menu-wrap').height();    //высота 1блока
var wH=$('.cont-calck').height();    //высота Окна



//открывает список продукции
$('.calck-menu ul>li').on('click',function(){
$('.c-menu').on('click',function(){  
  if($('.gost-wrap').css('display')=='block' ){
    $('.gost-wrap,.saze-wrap,.sazL-wrap').css({'width':'0','opacity':'0'});
  }
});
$('.gost').on('click',function(){  
  if($('.saze-wrap').css('display')=='block' ){
    $('.saze-wrap,.sazL-wrap').css({'width':'0','opacity':'0'});
  }
});
$('.saze-wrap').on('click',function(){  
   if($('.sazL-wrap').css('display')=='block' ){
    $('.sazL-wrap').css({'width':'0','opacity':'0'});
  }
});
   ulBlock=$(this).attr('data-cl');
  $(ulBlock).fadeIn(200).animate({
   width: "20vw",    //Должно СТАТЬ
   opacity:1
}, 500);
wHeig_x = $(ulBlock).height();
  if(wHeig < wHeig_x){
    var y =wHeig_x-wHeig ;
  $('.cont-calck').height(wH+y+100);  //увеличиваем экран под блок
  }    
});
//выберает по клику вес 1 шт
$('.sazeL').on('click',  function (){
   var mass=$(this).attr('data-vess');
    mass=parseFloat(mass); 
    rezul=mass/1000;
    $('.wind-calck,.cont-wind').animate({
    height: '150px',    //Должно СТАТЬ wind
    opacity: 1
} , 300);
   $(window).scrollTop(100);  
   $('.cont-calck').height(wH+150);
   $('#rezul').text(rezul +' кг в 1 шт');
   $('.gost-wrap,.saze-wrap,.sazL-wrap').fadeOut(500);
 });
//очищает
$('#stop').on('click',  function (){
  $('#rezul').text('');
  rezul=0;
  $('.gost-wrap,.saze-wrap,.sazL-wrap').fadeOut(500);
  $('.wind-calck,.cont-wind').animate({
    height: '0px',    //wind
    opacity: 0
} , 300);
  $('.cont-calck').height(wH+60);
  setTimeout(2000);
});


});
//-------------------прелоудер ---------------
$(window).on('load',function(){
  $(".preloyder").delay(1000).fadeOut("slow");
});

















