// Dashboard Loaded

console.log("Dashboard Loaded Successfully");

// Highlight Sidebar

const menu = document.querySelectorAll(".sidebar ul li");

menu.forEach(item=>{

    item.addEventListener("click",()=>{

        menu.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});

// Welcome Animation

window.onload=()=>{

    document.querySelectorAll(".card").forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".6s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*200);

    });

};