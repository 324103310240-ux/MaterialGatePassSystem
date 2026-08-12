console.log("CISF Dashboard Loaded");

// Verify Button

const verifyBtn=document.getElementById("verifyBtn");

verifyBtn.addEventListener("click",()=>{

    const gatepass=document.getElementById("gatepass").value;

    if(gatepass===""){

        alert("Enter Gate Pass Number");

        return;

    }

    alert("Gate Pass Verified Successfully\n\nGate Pass : "+gatepass);

});

// View Buttons

document.querySelectorAll("table button").forEach(button=>{

    button.addEventListener("click",()=>{

        alert("Gate Pass Details");

    });

});

// Card Animation

window.onload=()=>{

    const cards=document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(30px)";

        setTimeout(()=>{

            card.style.transition=".5s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*150);

    });

};