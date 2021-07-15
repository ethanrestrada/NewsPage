const btnSwitch = document.getElementById("btnSwitch");
const indicador = document.querySelector(".indicador");

    btnSwitch.onclick = function(){
        document.body.classList.toggle("white");
        indicador.classList.toggle("active");
    }