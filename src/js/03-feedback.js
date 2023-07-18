const form = document.querySelector('.feedback-form');

form.addEventListener('input', handlerInput);
const data = {};
function handlerInput(evt) {
  data[evt.target.name] = evt.target.value;
    saveFormState();
    }

function saveFormState() {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const LS = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(LS);

const fillFormInput = LS ? form.querySelector('input[name="email"]').value = LS.email : '';
const fillFormText = LS ? form.querySelector('textarea[name="message"]').value = LS.email : '';