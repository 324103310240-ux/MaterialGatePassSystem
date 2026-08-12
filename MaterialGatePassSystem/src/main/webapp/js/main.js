window.onload = () => {

    document.querySelectorAll(".portal-card").forEach(card=>{

        card.style.opacity="0";

        card.style.transform="translateY(80px)";

        setTimeout(()=>{

            card.style.transition=".8s";

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        },300);

    });

}