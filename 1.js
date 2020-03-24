$(function(){
    vitricuaedu =$("#khoiedu").offset().top;
    console.log(vitricuaedu);
    $(".xuong,.kn").click(function(){
         $('body,html').animate({scrollTop:vitricuaedu},800);
        // console.log("aSDa")
    });

    $(".sp").click(function(){
        $('body,html').animate({scrollTop:$("#khoisp").offset().top},800);
       // console.log("aSDa")
   });


})

// $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({
//         left: '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//       });
//     });
//   });