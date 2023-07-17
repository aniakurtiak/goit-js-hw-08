const e=document.querySelector(".feedback-form");e.addEventListener("input",handlerInput);const t={};e.addEventListener("submit",(function(e){e.preventDafault();const{email:n,message:a}=e.currentTarget.elements;t[e.currentTarget.name]=e.target.value}));const n=localStorage.setItem("feedback-form-state",JSON.stringify(t));console.log(n);
//# sourceMappingURL=03-feedback.24f11145.js.map
