'use strict';

// write code here
const allInputs = document.getElementsByTagName('input');

function capitalizeFirstLetterOfString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

[...allInputs].forEach((input) => {
  const label = document.createElement('label');
  const placeholderName = capitalizeFirstLetterOfString(input.name.split(/(?=[A-Z])/).join(' '));

  input.setAttribute('placeholder', placeholderName);

  label.setAttribute('for', input.id);
  label.className = 'field-label';
  label.textContent = input.name.split(/(?=[A-Z])/).join(' ');
  input.parentNode.insertBefore(label, input);
});
