//contenedor
const contenedor = document.getElementById('ContenedorSoftwareVideojuegos');
const controladorMensaje = document.getElementById('MensajeControlador')

//Software Momiji-Soft
const botonProyectos = document.getElementById('BtnVerProyectos');
const frameSoftware = document.getElementById('FrameSoftware');
const framesVideojuegos = document.getElementById('FrameVideojuegos');
const Musica = document.getElementById('Musica')
const Mensaje = document.getElementById('Mensaje')

const Negative = document.getElementById('ProyectoProhibido');
Negative.addEventListener('click', (event) => {
    Negative.style.color = "red";
})

let controlador = 0
let Musicacontrol = 0
botonProyectos.addEventListener('click', (event) => {
    controlador += 1
    Musicacontrol += 1
    if (controlador == 1 && Musicacontrol == 1) {

        Musica.play()

        Mensaje.innerHTML = "Musica: (Fan-Made)_Momiji's_Theme_ Awakening_Wolf's_Instinct <br> Creditos al logo: 'saulgoodman_334' en discord"
        Mensaje.style.textAlign = "center"
        Mensaje.style.color = "white"
        Mensaje.style.textShadow = "2px 2px 8px red"

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
        contenedor.style.border = "2px solid red"
        contenedor.style.boxShadow = "2px 2px 8px red"
        contenedor.style.backgroundImage = "url(Imagenes/Momiji_1.jpg)"
        contenedor.style.backgroundSize = "cover"
        contenedor.style.backgroundRepeat = "no-repeat"
        contenedor.style.backgroundAttachment = "fixed"

        controladorMensaje.style.display = "flex"

    } else if (controlador == 2) {
        controlador = 0

        Musicacontrol = 0
        Musica.pause()
        Musica.currentTime = 0

        frameSoftware.src = ""
        contenedor.style.display = "none"
        controladorMensaje.style.display = "none"
    }
});

//Videojuegos Momiji-Soft

//Mensaje titulo
const BotonVerContenido = document.getElementById('Presionar');
let controladorInfoInicial = 0;
const ContenedorInformacionInicial = document.getElementById('InformacionDemas');
const TituloContenedorInformacionInicial = document.getElementById('Titulo');
const ContenidoInformacionInicial = document.getElementById('Contenido');

BotonVerContenido.addEventListener('click', (event) => {
    controladorInfoInicial += 1;

    if (controladorInfoInicial == 1) {
        ContenedorInformacionInicial.style.display = "block";
        ContenedorInformacionInicial.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        ContenedorInformacionInicial.style.marginTop = "-30px";
        ContenedorInformacionInicial.style.marginBottom = "20px";
        ContenedorInformacionInicial.style.padding = "1%";
        ContenedorInformacionInicial.style.border = "2px solid red";
        ContenedorInformacionInicial.style.boxShadow = "3px 3px 8px red";

        TituloContenedorInformacionInicial.textContent = "Momiji-Soft~"
        TituloContenedorInformacionInicial.style.textAlign = "center";
        TituloContenedorInformacionInicial.style.color = "white";
        TituloContenedorInformacionInicial.style.textShadow = "3px 3px 3px red";

        ContenidoInformacionInicial.style.textAlign = "center";
        ContenidoInformacionInicial.style.marginTop = "20px";
        ContenidoInformacionInicial.style.color = "white";
        ContenidoInformacionInicial.style.textShadow = "3px 3px 3px red";
        ContenidoInformacionInicial.style.padding = "10px";
        ContenidoInformacionInicial.innerHTML = "Proyectos hechos con mucho amor, atencion, dedicacion y honor al personaje de touhou: <strong> Momiji inubashiri </strong> <3 <br> Estoy enamorado <3 <br> Disfrutalos tanto como yo disfrute hacerlos <3"


    } else if (controladorInfoInicial == 2) {
        controladorInfoInicial = 0;
        ContenedorInformacionInicial.style.display = "none";
    }
});