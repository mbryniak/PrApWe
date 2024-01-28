window.onload = function () {
    const MIN_EMAIL_LENGHT = 5;
    const MIN_PASSWORD_LENGHT = 8;

    let form = document.getElementById('form');
    let emailInput = document.getElementById('email-input');
    let passwrdInput = document.getElementById('password-input');


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            window.alert('Poprawnie wysłany formularz');
        }
        window.alert('Poprawnie wysłany formularz');

    });
};

function validateForm() {

  let validEmail =true;
  let validPassword = true;
  if (emailUnput.value.length < )

  return false;

}