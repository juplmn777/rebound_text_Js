const title = document.querySelector("h1");
const container = document.querySelector("div");

const maxHeight = container.clientHeight;//taille entre les bordures intérieures verticales
const maxWidth = container.clientWidth;//taille entre les bordures intérieures horizontales

title.style.position = "relative";//position du texte par rapport a sa div parent

let topPosition = 0;
let leftPosition = 0;
let pushToBottom = -2;//vitesse de déplacement vers le bas
let pushToRight = -2;//vitesse de déplacement vers la droite

function animate(){
    
}