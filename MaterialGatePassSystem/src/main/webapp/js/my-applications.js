// ===========================================
// My Applications
// ===========================================

const tableBody = document.querySelector("#applicationTable tbody");
const noData = document.getElementById("noData");

// Get Data

let gatePasses = JSON.parse(localStorage.getItem("gatePasses")) || [];

// Clear Table

tableBody.innerHTML = "";

// No Data

if(gatePasses.length === 0){

    noData.style.display = "block";

}else{

    noData.style.display = "none";

}

// Display Applications

gatePasses.forEach((gatePass,index)=>{

    let material = "-";

    if(gatePass.materials.length > 0){

        material = gatePass.materials[0].materialName;

    }

    let statusClass = "pending";

    if(gatePass.status === "Approved"){

        statusClass = "approved";

    }

    if(gatePass.status === "Rejected"){

        statusClass = "rejected";

    }

    tableBody.innerHTML += `

    <tr>

        <td>${gatePass.id}</td>

        <td>${material}</td>

        <td>${gatePass.department}</td>

        <td>${gatePass.date}</td>

        <td class="${statusClass}">
            ${gatePass.status}
        </td>

        <td>

            <button class="viewBtn" onclick="viewApplication(${index})">

                View

            </button>

        </td>

    </tr>

    `;

});

// ==============================
// View Application
// ==============================

function viewApplication(index){

    localStorage.setItem("selectedGatePass",index);

    window.location.href="view-application.html";

}

// ==============================
// Search
// ==============================

const searchInput=document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const rows=document.querySelectorAll("#applicationTable tbody tr");

rows.forEach(row=>{

const text=row.innerText.toLowerCase();

row.style.display=text.includes(value) ? "" : "none";

});

});

// ==============================
// Filter
// ==============================

const statusFilter=document.getElementById("statusFilter");

statusFilter.addEventListener("change",()=>{

const value=statusFilter.value;

const rows=document.querySelectorAll("#applicationTable tbody tr");

rows.forEach(row=>{

const status=row.cells[4].innerText.trim();

if(value==="all"){

row.style.display="";

}

else if(status===value){

row.style.display="";

}

else{

row.style.display="none";

}

});

});

console.log("Applications Loaded Successfully");