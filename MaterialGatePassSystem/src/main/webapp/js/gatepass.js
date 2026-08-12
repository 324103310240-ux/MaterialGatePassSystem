// ======================================
// Material Gate Pass System
// ======================================

const form = document.getElementById("gatePassForm");
const addRowBtn = document.getElementById("addRow");

// =============================
// Add Material Row
// =============================

addRowBtn.addEventListener("click", function () {

    const tbody = document.querySelector("#materialTable tbody");

    const row = document.createElement("tr");

    row.innerHTML = `

    <td>
        <input type="text" class="materialName" placeholder="Material Name" required>
    </td>

    <td>
        <input type="text" class="category" placeholder="Category" required>
    </td>

    <td>
        <input type="number" class="quantity" placeholder="Quantity" required>
    </td>

    <td>
        <select class="unit">
            <option>Nos</option>
            <option>Kg</option>
            <option>Ton</option>
        </select>
    </td>

    <td>

        <button type="button" class="deleteBtn">

        Delete

        </button>

    </td>

    `;

    tbody.appendChild(row);

});

// =============================
// Delete Row
// =============================

document.addEventListener("click",function(e){

if(e.target.classList.contains("deleteBtn")){

e.target.closest("tr").remove();

}

});

// =============================
// Submit Form
// =============================

form.addEventListener("submit",function(e){

e.preventDefault();

const materials=[];

document.querySelectorAll("#materialTable tbody tr").forEach(row=>{

let materialName;

let category;

let quantity;

let unit;

if(row.querySelector(".materialName")){

materialName=row.querySelector(".materialName").value;

category=row.querySelector(".category").value;

quantity=row.querySelector(".quantity").value;

unit=row.querySelector(".unit").value;

}

else{

materialName=document.getElementById("materialName").value;

category=document.getElementById("category").value;

quantity=document.getElementById("quantity").value;

unit=document.getElementById("unit").value;

}

materials.push({

materialName,

category,

quantity,

unit

});

});

let gatePasses=JSON.parse(localStorage.getItem("gatePasses"))||[];

const gatePass={

id:"GP"+String(gatePasses.length+1).padStart(3,"0"),

date:new Date().toLocaleDateString(),

gatePassType:document.getElementById("gatePassType").value,

department:document.getElementById("department").value,

priority:document.getElementById("priority").value,

purpose:document.getElementById("purpose").value,

vehicleNo:document.getElementById("vehicleNo").value,

vehicleType:document.getElementById("vehicleType").value,

transport:document.getElementById("transport").value,

driverName:document.getElementById("driverName").value,

driverMobile:document.getElementById("driverMobile").value,

license:document.getElementById("license").value,

destination:document.getElementById("destination").value,

returnDate:document.getElementById("returnDate").value,

remarks:document.getElementById("remarks").value,

status:"Pending",

materials:materials

};

gatePasses.push(gatePass);

localStorage.setItem("gatePasses",JSON.stringify(gatePasses));

alert("Gate Pass Submitted Successfully!");

form.reset();

window.location.href="my-applications.html";

});