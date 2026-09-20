//contenedor
const contenedor = document.getElementById('ContenedorSoftwareVideojuegos');

//Software Momiji-Soft
const botonProyectos = document.getElementById('BtnVerProyectos');
const frameSoftware = document.getElementById('FrameSoftware');
const framesVideojuegos = document.getElementById('FrameVideojuegos');

let controlador = 0
botonProyectos.addEventListener('click', (event) => {
    controlador += 1
    if (controlador == 1) {

        frameSoftware.src = "Momiji_Soft_Htmls/Software.html"
        frameSoftware.style.width = "700px"
        frameSoftware.style.height = "500px"
        frameSoftware.style.border = "2px solid yellow"
        frameSoftware.style.borderRadius = "22px"
        frameSoftware.style.boxShadow = "3px 3px 8px orange"

        framesVideojuegos.src = "Momiji_Soft_Htmls/Videojuegos.html"
        framesVideojuegos.style.width = "700px"
        framesVideojuegos.style.height = "500px"
        framesVideojuegos.style.border = "2px solid orange"
        framesVideojuegos.style.borderRadius = "22px"
        framesVideojuegos.style.boxShadow = "3px 3px 8px red"

        contenedor.style.display = "flex"
        contenedor.style.gap = "20px"
        contenedor.style.margin = "2% 5% 2% 5%"
        contenedor.style.padding = "2%"
        contenedor.style.border = "1px solid red"
        contenedor.style.boxShadow = "2px 2px 8px red"
        contenedor.style.backgroundImage = "url(Imagenes/Momiji_1.jpg)"
        contenedor.style.backgroundSize = "cover"
        contenedor.style.backgroundRepeat = "no-repeat"
        contenedor.style.backgroundAttachment = "fixed"
    
    } else if (controlador == 2){
        controlador = 0
        frameSoftware.src = ""
        contenedor.style.display = "none"
    }
});

//Videojuegos Momiji-Soft