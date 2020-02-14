const title = document.querySelector("h1");
const container = document.querySelector("div");

const maxHeight = container.clientHeight; //taille entre les bordures intérieures verticales
const maxWidth = container.clientWidth; //taille entre les bordures intérieures horizontales

title.style.position = "relative"; //position du texte par rapport a sa div parent

let topPosition = 0;
let leftPosition = 0;
let pushToBottom = -2; //vitesse de déplacement vers le bas
let pushToRight = -2; //vitesse de déplacement vers la droite

function animate() {
    topPosition === 0 ? pushToBottom *= -1 : null;
    topPosition === (maxHeight - title.offsetHeight) ? pushToBottom *= -1 : null;

    leftPosition === 0 ? pushToRight *= -1 : null;
    leftPosition === (maxWidth - title.offsetWidth) ? pushToRight *= -1 : null;

    topPosition += pushToBottom;
    leftPosition += pushToRight;

    title.style.top = topPosition + "px";
    title.style.left = leftPosition + "px";

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);