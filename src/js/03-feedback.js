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
