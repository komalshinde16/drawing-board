console.log("draw board");
const boxes = document.querySelectorAll(".child");
const eraserBtn = document.getElementById("eraserbutton");
const input = document.getElementById("myinput");
const down = document.getElementById("Download");

 let color= "black";

  input.onchange= () => {
    color = input.value;
  };
   
  eraserBtn.onclick = () => {
    color = "white";
  };
  

  // onmousedown
  let isMouseClicked = false;
  
  document.onmousedown = () => {
    isMouseClicked = true;
  };
  
  // onmouseup

  document.onmouseup = () => {
    isMouseClicked = false;
  };
  
  for (let i = 0; i <= 64; i++) {
    boxes[i].onmouseenter = () => {
      if (isMouseClicked) {
        boxes[i].style.backgroundColor = color;
      }
    };
  }
  

  function setColor(){
    const userChoice = prompt("Enter color");
    color= userChoice;
  };



// download function

down.onclick =() => {
  
}


  


