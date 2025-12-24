// first quadrant ko lagi
let quad1 = document.querySelector('.item1');
quad1.addEventListener("mouseover", function() {
    quad1.style.backgroundColor = "rgb(241, 109, 160)";
    quad1.style.cursor = "crosshair";
});
quad1.addEventListener("mouseout", function() {
    quad1.style.backgroundColor = "white";
    quad1.style.cursor = "default";
     
});
// second quadrant ko lagi
let quad2 = document.querySelector('.item2');
quad2.addEventListener("mouseover", function() {
    quad2.style.backgroundColor =" rgb(115, 233, 190)";
    quad2.style.cursor = "cell";
});
quad2.addEventListener("mouseout", function() {
    quad2.style.backgroundColor = "white";
    quad2.style.cursor = "default";
});
// third quadrant ko lagi
let quad3 = document.querySelector('.item3');
quad3.addEventListener("mouseover", function() {
    quad3.style.backgroundColor = "rgb(122, 128, 236)"; 
    quad3.style.cursor = "all-scroll";

});
quad3.addEventListener("mouseout", function() {
    quad3.style.backgroundColor = "white" 
    quad3.style.cursor = "default";
    
});
// fourth quadrant ko lagi
let quad4 = document.querySelector('.item4');       
quad4.addEventListener("mouseover", function() {
    quad4.style.backgroundColor =  "rgb(120, 182, 215)";  
    quad4.style.cursor = "grab";

});
quad4.addEventListener("mouseout", function() {
    quad4.style.backgroundColor = "white"
    quad.style.cursor = "default";
});