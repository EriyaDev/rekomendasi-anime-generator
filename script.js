const button = document.querySelector(".btn");
const mode = document.querySelector(".mode-container img");

    
let loader = document.querySelector(".loading");
loader.style.display = "none";

let recommendation = document.querySelector(".recommendation");
recommendation.style.display = "none";

button.addEventListener("click", loading);

function loading(){

    // Loading Animation
    let loader = document.querySelector(".loading");
    let loaderSvg = document.querySelector(".loader-svg");
    let animeContainer = document.querySelector(".anime");
    let footer = document.querySelector("footer");
    let instruction = document.querySelector(".instruction");
    let detail = document.querySelector(".detail");
    

    loader.classList.add("loader");
    loader.style.display = "flex";
    animeContainer.style.display = "none";
    button.style.display = "none";
    footer.style.display = "none";
    instruction.style.display = "none";
    detail.style.display = "none";
    recommendation.style.display = "flex";


    setTimeout(function(){
        loader.classList.remove("loader");
        animeContainer.style.display = "flex";
        button.style.display = "flex";
        footer.style.display = "flex";
        loader.style.display = "none";
        detail.style.display = "flex";
    }, 2000)
}


mode.addEventListener("click", changeMode);

function changeMode(){
    let element = document.querySelector(".light-mode");
    element.classList.toggle("dark-mode");
    
    let  value = document.querySelectorAll(".value");
    for(let i = 0; i < value.length; i++){
        value[i].classList.toggle("value-dark");
    }

    if(mode.getAttribute("src") == "images/dark-mode.svg"){
        mode.setAttribute("src", "images/light-mode.svg")
    }
    else if(mode.getAttribute("src") == "images/light-mode.svg"){
        mode.setAttribute("src", "images/dark-mode.svg")
    }
}