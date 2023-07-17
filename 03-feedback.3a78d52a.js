!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",handlerInput),e.addEventListener("submit",(function(e){e.preventDafault();var t=e.currentTarget.elements,a=t.email,n=t.message,r={em:a.value,text:n.value};console.log(r)}));var t=localStorage.setItem("feedback-form-state",JSON.stringify(data));console.log(t)}();
//# sourceMappingURL=03-feedback.3a78d52a.js.map
