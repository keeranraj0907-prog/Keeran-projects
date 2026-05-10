function myFunction() {

const randomColor= Math.floor(Math.random() *16777215).toString
(16);

const paddedColor= "#"+ randomColor.padStart(6,ʼ0ʼ);
document.body.style.backgroundColor = paddedColor;

}

// button.addEventListener(ʼclickʼ, function() {

//button.style.backgroundColor =getRandomColor();

// }) ;


