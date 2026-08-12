// Show / Hide Password

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

if(togglePassword){

    togglePassword.addEventListener("click",()=>{

        if(password.type==="password"){

            password.type="text";

            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        }else{

            password.type="password";

            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });

}

// Login

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Approver Login Successful");

    window.location.href="dashboard.html";

});

}