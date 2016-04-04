(function () {
  emailjs.init('user_x66lJyvxkADLHriBJmiKV');
})();

$(document).ready(function () {

  function propForm(disabled) {
    $form.find('input, textarea, button').attr('disabled', disabled);
  }

  function clearForm(){
    $form.find('input, textarea, button').val('');
  }

  var $form = $('#contactForm'),
    $msgSending = $('#msgSending'),
    $msgSent = $('#msgSent'),
    $msgSentError = $('#msgSentError'),
    $btnContact = $('.btn-contact');

  $form.submit(function (e) {
    e.preventDefault();
    propForm(true);
    $msgSending.show();
    $msgSent.hide();
    $msgSentError.hide();
    emailjs
      .send('gmail', '1', {
        'name': $('#name').val(),
        'message': $('#message').val(),
        'email': $('#email').val()
      })
      .then(function () {
        propForm(false);
        $msgSending.hide();
        $msgSent.show();
        clearForm();
      }, function () {
        propForm(false);
        $msgSending.hide();
        $msgSentError.show();
        clearForm();
      });
  });

  $btnContact.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $form.offset().top
    }, 500);
  });

});