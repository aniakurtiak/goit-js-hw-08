const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}));const t={};const a=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(a);a&&(e.querySelector('input[name="email"]').value=a.email),a&&(e.querySelector('textarea[name="message"]').value=a.email);
//# sourceMappingURL=03-feedback.b84d8f36.js.map
