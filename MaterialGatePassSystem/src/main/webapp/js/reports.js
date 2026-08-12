// ======================================
// Reports Dashboard JavaScript
// ======================================

console.log("Reports Dashboard Loaded Successfully");

// ---------------------------
// Dashboard Card Animation
// ---------------------------

window.onload = () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = ".5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

};

// ---------------------------
// Generate Report Button
// ---------------------------

const generateBtn = document.getElementById("generateBtn");

if(generateBtn){

generateBtn.addEventListener("click",()=>{

    const selects=document.querySelectorAll("select");

    const duration=selects[0].value;
    const department=selects[1].value;

    alert(

"Report Generated Successfully\n\n" +

"Duration : "+duration+"\n"+

"Department : "+department

    );

});

}

// ---------------------------
// Table Row Highlight
// ---------------------------

const rows=document.querySelectorAll("tbody tr");

rows.forEach(row=>{

    row.addEventListener("mouseenter",()=>{

        row.style.background="#E8F4FF";

    });

    row.addEventListener("mouseleave",()=>{

        row.style.background="";

    });

});

// ---------------------------
// Future Chart Placeholder
// ---------------------------

console.log("Chart.js can be integrated here later.");

// ---------------------------
// Statistics Counter Animation
// ---------------------------

const counters=document.querySelectorAll(".card h1");

counters.forEach(counter=>{

    let target=parseInt(counter.innerHTML);

    let count=0;

    let speed=Math.ceil(target/40);

    const update=()=>{

        if(count<target){

            count+=speed;

            if(count>target){

                count=target;

            }

            counter.innerHTML=count;

            setTimeout(update,25);

        }

    };

    update();

});

// ---------------------------
// Print Report
// ---------------------------

function printReport(){

    window.print();

}

console.log("Reports Module Ready");