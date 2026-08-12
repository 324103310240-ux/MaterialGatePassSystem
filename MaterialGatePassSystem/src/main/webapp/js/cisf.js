// ==========================
// CISF Login
// ==========================

const togglePassword=document.getElementById("togglePassword");
const password=document.getElementById("password");

if(togglePassword){

togglePassword.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");

    }

    else{

        password.type="password";

        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");

    }

});

}

const form=document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("CISF Login Successful");

    window.location.href="dashboard.html";

});

console.log("CISF Portal Loaded");