// --------------------- slider ---------------------
$(function (){

  $(".customers__slider").slick({
    dots: true,
    appendDots: $(".customers__slider-dots"),
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
  })
  $(".customers__prev").on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
  })
  $(".customers__next").on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
  })
  // ------------------- accordeon ------------------------
  $('.asked__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('asked__acc-link--active')) {
      $(this).removeClass('asked__acc-link--active')
      $(this).children('.asked__acc-text').slideUp()
    } else {
      $('.asked__acc-link').removeClass('asked__acc-link--active')
      $('.asked__acc-text').slideUp()
      $(this).addClass('asked__acc-link--active')
      $(this).children('.asked__acc-text').slideDown()
    }
  })

})