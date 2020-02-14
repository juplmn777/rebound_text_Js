const title = document.querySelector("h1");
const container = document.querySelector("div");

const maxHeight = container.clientHeight;//taille entre les bordures intérieures verticales
const maxWidth = container.clientWidth;//taille entre les bordures intérieures horizontales

title.style.position = "relative";//position du texte par rapport a sa div parent