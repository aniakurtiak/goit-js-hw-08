!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){a[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))}));var a={};var t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t);t&&(e.querySelector('input[name="email"]').value=t.email),t&&(e.querySelector('textarea[name="message"]').value=t.email)}();
//# sourceMappingURL=03-feedback.d3d3e2d2.js.map
