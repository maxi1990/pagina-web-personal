let ubicacionprincipal = window.pageYOffset;


  AOS.init();

window.addEventListener("scroll", function () {
    let desplazamientoactual 
    = this.window.pageYOffset;

    if (ubicacionprincipal>= desplazamientoactual) {
    document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }

    ubicacionprincipal = desplazamientoactual;
})


// menu


let enlacesheader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function () {
    if (semaforo) {
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = true;
    }

    enlacesheader.classList.toggle("menudos")
})

