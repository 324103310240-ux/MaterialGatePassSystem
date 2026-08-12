let gatePasses=JSON.parse(localStorage.getItem("gatePasses"))||[];

let index=localStorage.getItem("selectedGatePass");

let data=gatePasses[index];

if(data){

document.getElementById("requestId").value=data.id;

document.getElementById("status").value=data.status;

document.getElementById("department").value=data.department;

document.getElementById("gatePassType").value=data.gatePassType;

}