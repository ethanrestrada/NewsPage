const btnSwitch = document.getElementById("btnSwitch");
const indicador = document.querySelector(".indicador");

    btnSwitch.onclick = function(){
        document.body.classList.toggle("white");
        indicador.classList.toggle("active");
      
      if(document.body.classList.contains("white")){
        localStorage.setItem("white-mode", "true");
      } else {
        localStorage.setItem("white-mode", "false");
      }
    }

if(localStorage.getItem("white-mode") === "true" ){
  document.body.classList.add("white");
  indicador.classList.add("active");
} else {
  document.body.classList.remove("white");
  indicador.classList.remove("active");
}