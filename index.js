var color = ["red","green","cyan","black","voilet","blue","yellow","purple","orange",];
  var index = 0;
  var isTriangle = false;
  
  const Shape = document.getElementById("change-shape");
  const Color = document.getElementById("change-color");
  
  Shape.addEventListener("click", changeShape);
  Color.addEventListener("click", changeColor);
  
  function changeColor() {

    if (index === color.length) {
      index = 0;
    }
    document.getElementById("circle-container").style.backgroundColor = color[index];
    index++;
  }
  
  function changeShape() {
    if (!isTriangle) {
      var i = document.getElementsByClassName("innerShape")[0];
      i.classList.add( "triangle-bottom-left");
      isTriangle = true;
    }else{
      var i = document.getElementsByClassName("triangle-bottom-left")[0];
      i.className = "innerShape";
      isTriangle = false;
    }
  }