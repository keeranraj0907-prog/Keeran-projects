const balloon = document.getElementById(″balloon″)

let size=200;
let color= {″red″,″green″,″blue″};
let colorIndex= 0;

function updateBalloon()  {
    balloon.style.width  = size+″px″;
    balloon.style.height = size+″px″;
    balloon.style.backgroundColor = color(colorIndex);
}
