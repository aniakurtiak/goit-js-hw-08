const e=document.querySelector(".feedback-form");e.addEventListener("input",handlerInput),e.addEventListener("submit",(function(e){e.preventDafault();const{email:t,message:n}=e.currentTarget.elements,a={em:t.value,text:n.value};console.log(a)}));const t=localStorage.setItem("feedback-form-state",JSON.stringify(data));console.log(t);
//# sourceMappingURL=03-feedback.8d283a38.js.map
