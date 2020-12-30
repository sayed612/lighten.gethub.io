$(document).ready(function(){
  
    
    $('.one').click(function(){
        
          $('.sl_one').animate({
              left:'0%'
          },1000);
           $('.sl_two').animate({
              left:'100%'
          },1000);
        $('.sl_three').animate({
              left:'100%'
          },1000);
        
      });
    $('.two').click(function(){
          $('.sl_one').animate({
              left:'-100%'
          },1000);
           $('.sl_two').animate({
              left:'0%'
          },1000);
        $('.sl_three').animate({
              left:'100%'
          },1000);
      });
    $('.three').click(function(){
          $('.sl_three').animate({
              left:'0%'
          },1000);
           $('.sl_two').animate({
              left:'-100%'
          },1000);
            $('.sl_one').animate({
              left:'-100%'
          },1000);
      });
    
    ///to top buttin
    $(window).scroll(function(){

         if($(window).scrollTop() >=650){
             
                  $('#top').css('display' , 'block');
             }else{
                  $('#top').css('display' , 'none');
         }
         
        
    });
    $('#top').click(function(ev){
            ev.preventDefault();
            $('html , body').animate({
            scrollTop: 0
        },1000);
        })
    
})