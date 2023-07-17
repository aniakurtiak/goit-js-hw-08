const form = document.querySelector('.feedback-form');
form.addEventListener('input', handlerInput);
// const data = {};
function handlerSubmit(evt) {
    evt.preventDafault();
    const { email, message } = evt.currentTarget.elements;
    // data[evt.currentTarget.name] = evt.target.value;
   const data = {
        em: email.value,
        text: message.value
    }
    console.log(data);
}

form.addEventListener('submit', handlerSubmit);

const dataInput = localStorage.setItem("feedback-form-state", JSON.stringify(data));
console.log(dataInput);