const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const password = document.querySelectorAll("input[type='password']")[0].value;

    const confirm = document.querySelectorAll("input[type='password']")[1].value;

    if(password !== confirm){

        alert("Passwords do not match!");

        return;

    }

    alert("Registration Successful!");

    window.location.href="login.html";

});