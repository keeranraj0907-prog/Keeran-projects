const balloon = document.getElementById(″balloon″)

let size=200;
let color= {″red″,″green″,″blue″};
let colorIndex= 0;

function updateBalloon()  {
    balloon.style.width  = size+″px″;
    balloon.style.height = size+″px″;
    balloon.style.backgroundColor = color(colorIndex);
}

balloon.addEventListener(″click″ , () => {
    size +=10;
    colorIndex = (colorIndex+1 ) %color.length;
   
    if(size>420) {
        size=200:
    
    }

    updateBalloon();
});

balloon.addEventListener(″mouseleave″ ,() => {
   size -=5;
   if(size<200) size=200;

   colorIndex = {colorIndex-1 +color.length) %color.length;
   
   updateBalloon();
});
