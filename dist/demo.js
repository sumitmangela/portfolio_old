



// image slider main
$(document).ready(function(){
    
 
                $('.single').slick({
                autoplay : true,
                  pauseOnFocus : false,
                    pauseOnHover : false,
                 arrows : false,
                    draggable : false,
                    dots : true,
                    
                         });
              
                $('.left').click(function(){
                  $('.single').slick('slickPrev');
                })

                $('.right').click(function(){
                  $('.single').slick('slickNext');
                })

        });

 //rating lazy load 
    

       $(window).scroll(function() {
         
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

           
   if (wS > (hT+hH-wH)){
 
       var j= 1, m=300;
       while(j<=5)
           {   
              dotimeout(j,m); 
               j++;
               m=m+300;
           }
         
   }
        function dotimeout(i,t)
        {
            setTimeout(function(){change(i)},t);
        }
       
        function change(i){
            $(".image-class"+i).addClass("source-change");
        }
});

//scrolltotop
 
   $(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '600' , // Distance from top before showing element (px)
    topSpeed: 300 , // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 500, // Animation in speed (ms)
    animationOutSpeed: 500, // Animation out speed (ms)
  scrollText: '^',
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});





//scrollify
 $(function() {
          $.scrollify({
              section : ".scroll",
          });
        });



//copy to clipboard
function copy(clicked_id){
    
   var $text = $("<input>");
  $("body").append($text);
  $text.val($(clicked_id).text()).select();
  document.execCommand("copy");
  $text.remove();
  console.log(clicked_id);
  console.log("copied");
    $(".dissapear").addClass("appear");
     setTimeout(function(){
          $(".dissapear").removeClass("appear");
     },2000);
    
    if(clicked_id=="#email")
        {
            document.getElementById('copymessage').innerHTML= "Email-id copied";
        }
    else{
        document.getElementById('copymessage').innerHTML= "Mobile No. copied";
    }
    
}


