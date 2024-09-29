window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById("root");
    const button = document.getElementById("change-btn");
    button.addEventListener("click", function(){
        const bgColor = randomRgbColor();
        root.style.backgroundColor = bgColor;
    });

}


function randomRgbColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green}, ${blue})`;
}
