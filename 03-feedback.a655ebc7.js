!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",handlerInput);var t={};e.addEventListener("submit",(function(e){e.preventDafault();var a=e.currentTarget.elements;a.email,a.message,t[e.currentTarget.name]=e.target.value}));var a=localStorage.setItem("feedback-form-state",JSON.stringify(t));console.log(a)}();
//# sourceMappingURL=03-feedback.a655ebc7.js.map
