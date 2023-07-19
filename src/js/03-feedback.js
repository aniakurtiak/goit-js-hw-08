import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

const data = {};
function handlerInput(evt) {
  data[evt.target.name] = evt.target.value;
    saveFormStateThrottled();
    }

function saveFormState() {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};
const saveFormStateThrottled = throttle(saveFormState, 500);


const LS = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

const formInput = form.querySelector('input[name="email"]');
const formText = form.querySelector('textarea[name="message"]');

function fillForm() {

  //   if (LS) {
  // (formInput.value = LS.email) &&( formText.value = LS.message);
  //   }
  // }
  
//   if (LS.email) {
//     formInput.value = LS.email;
//   } else {
//     formInput.value = ''
//   }
  
//   if (LS.message) {
//     formText.value = LS.message;
//   } else {
//     formText.value = ''
//   }
// }
  
  if (LS.email) {
    formInput.value = LS.email;
  } else if (LS.message) {
    formText.value = LS.message;
  }
}
  

fillForm();


function handlerSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(LS);
  formInput.value = '';
  formText.value = '';
}
