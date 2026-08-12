// Dashboard Loaded

console.log("Approver Dashboard Loaded");

// Get Buttons

const approveButtons = document.querySelectorAll(".approve-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");
const pendingCards = document.querySelector(".pending h1");
const approvedCards = document.querySelector(".approved h1");
const rejectedCards = document.querySelector(".rejected h1");

// Initial Counts

let pending = 12;
let approved = 148;
let rejected = 9;

// ----------------------
// Approve
// ----------------------

approveButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const row = button.parentElement.parentElement;

        row.cells[4].innerHTML =
        "<span style='color:green;font-weight:bold;'>Approved</span>";

        button.disabled = true;

        button.innerHTML = "Approved";

        const rejectBtn = row.querySelector(".reject-btn");

        rejectBtn.disabled = true;

        pending--;

        approved++;

        pendingCards.innerHTML = pending;
        approvedCards.innerHTML = approved;

        alert("Gate Pass Approved Successfully");

    });

});

// ----------------------
// Reject
// ----------------------

rejectButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const reason = prompt("Enter Reject Reason");

        if(reason==null || reason==""){

            return;

        }

        const row = button.parentElement.parentElement;

        row.cells[4].innerHTML =
        "<span style='color:red;font-weight:bold;'>Rejected</span>";

        button.disabled = true;

        button.innerHTML = "Rejected";

        const approveBtn = row.querySelector(".approve-btn");

        approveBtn.disabled = true;

        pending--;

        rejected++;

        pendingCards.innerHTML = pending;
        rejectedCards.innerHTML = rejected;

        alert("Request Rejected\nReason : " + reason);

    });

});

// ----------------------
// View Button
// ----------------------

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        window.location.href="view-request.html";

    });

});

// ----------------------
// Welcome Animation
// ----------------------

window.onload=()=>{

    const cards=document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".5s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*150);

    });

};