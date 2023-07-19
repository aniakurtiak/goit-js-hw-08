import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

let data = {};
function handlerInput(evt) {
  data = {
    email: form.elements.email.value,
      message: form.elements.message.value,
  }
  saveFormStateThrottled();
}

function saveFormState() {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
const saveFormStateThrottled = throttle(saveFormState, 500);

const LS = JSON.parse(localStorage.getItem('feedback-form-state'));
const formInput = form.querySelector('input[name="email"]');
const formText = form.querySelector('textarea[name="message"]');

function fillForm() {
  if (LS && LS.email) {
    formInput.value = LS.email;
  }
  if (LS && LS.message) {
    formText.value = LS.message;
  }
}

window.addEventListener('load', fillForm);

function handlerSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(LS);
  formInput.value = '';
  formText.value = '';
}
