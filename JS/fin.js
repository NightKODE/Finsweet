// --------------------- slider ---------------------
$(document).ready(function (){

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