// ===============================
// View Request Page
// ===============================

console.log("View Request Loaded Successfully");

// Get Buttons

const approveBtn = document.getElementById("approveBtn");
const rejectBtn = document.getElementById("rejectBtn");
const remarks = document.getElementById("remarks");

// ----------------------------
// Approve Request
// ----------------------------

approveBtn.addEventListener("click",()=>{

    if(confirm("Are you sure you want to APPROVE this Gate Pass?")){

        alert("✅ Gate Pass Approved Successfully!");

        approveBtn.innerHTML="Approved";

        approveBtn.disabled=true;

        rejectBtn.disabled=true;

        approveBtn.style.background="#198754";

    }

});

// ----------------------------
// Reject Request
// ----------------------------

rejectBtn.addEventListener("click",()=>{

    if(remarks.value.trim()==""){

        alert("Please enter remarks before rejecting.");

        remarks.focus();

        return;

    }

    if(confirm("Reject this request?")){

        alert("❌ Request Rejected");

        rejectBtn.innerHTML="Rejected";

        rejectBtn.disabled=true;

        approveBtn.disabled=true;

        rejectBtn.style.background="#dc3545";

    }

});

// ----------------------------
// Animation
// ----------------------------

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

// ----------------------------
// Print Function
// ----------------------------

function printRequest(){

    window.print();

}