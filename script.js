const passwordBox = document.getElementById('password');
const passwordLengthInput = document.querySelector('.password-length-input')
const upperCaseCheckbox = document.getElementById("upperCase");
const lowerCaseCheckbox = document.getElementById("lowerCase");
const numberCheckbox = document.getElementById("number");
const symbolCheckbox = document.getElementById("symbol");


function createPassword() {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const number = '0123456789';
  const symbol = '@#$%^&*()_+|}{[]></-=';

  const length = passwordLengthInput.value;

  let password = '';
  let allChars = '';

  if (upperCaseCheckbox.checked) {
    allChars += upperCase;
  }
  if (lowerCaseCheckbox.checked) {
    allChars += lowerCase;
  }
  if (numberCheckbox.checked) {
    allChars += number;
  }
  if (symbolCheckbox.checked) {
    allChars += symbol;
  }

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand( "Copy" );
}