window.addEventListener("load",()=>{
    const sounds= document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
            "#c060d3",
            "#8eb4a2",
            "#d3d160",
            "#c060d3",
            "#d36060",
            "#60d394"


    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime= 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation = 'jump is case';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});

