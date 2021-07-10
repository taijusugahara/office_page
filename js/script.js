// slick
// $(function(){
//   $('#rec-slick').slick({
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       autoplay: true,
//       speed: 1000,
//       autoplaySpeed: 5000,
//       arrows: false,
//       centerPadding: '100px',
//       centerMode: true,
//           responsive: [
//               {
//               breakpoint: 767,
//               settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               centerPadding: 0,
//               centerMode: true,
//               }
//           }
//       ]
//   });
// });

// 背景画像スライド
$(function() {
  $('.header').bgSwitcher({
   images: [' https://taijusugahara.github.io/office_page/images/home-to.png',' https://taijusugahara.github.io/office_page/images/home-top2.png',' https://taijusugahara.github.io/office_page/images/home-top3.png'], 
　 interval: 5000,
　 loop: true,
　 shuffle: false,
　 effect: "fade", // fade,blind,clip,slide,drop,hide
　 duration: 500,
　 easing: "swing" // linear,swing
   });
  });

//   ある地点まで行った時に表示
$(function () {
   $(window).on("scroll", function () {
     const sliderHeight = $("header").height();
     if (sliderHeight -50 < $(this).scrollTop()) {
       $(".header_top").addClass("header-scroll");
     } else {
       $(".header_top").removeClass("header-scroll");
     }
   });
 });

 // バーガー
$(function(){
   $('.nav-btn').on('click',function(){
       $(this).toggleClass('-active');
       $('.burger_links').toggleClass('-active');
   });
 });

//  同じクラスの高さを合わせる
 jQuery(window).load(function() {
   $('.works_contents').each(function(i, box) {
       var maxHeight = 0;
       $(box).find('.works_explanation').each(function() {
           if ($(this).height() > maxHeight) maxHeight = $(this).height();
       });
       $(box).find('.works_explanation').height(maxHeight);
   });
});