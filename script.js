const Contenedor = document.querySelector(".CambioDeColorTodo");
Contenedor.classList.add("CambioDeColor");

const MensajeProyectoPersonal = document.getElementById('Personal');
const MensajeEscondido = document.querySelector('.MensajeEscondido');
const Anio = document.getElementById('FechaActual');

function Cronometro() {
    setTimeout(() => {
        MensajeProyectoPersonal.style.color = "white";
        MensajeProyectoPersonal.style.textShadow = "2px 2px 5px black";
        MensajeProyectoPersonal.style.textDecoration = "None";
    }, 3000);
}

function ProyectosPersonales() {
    MensajeProyectoPersonal.addEventListener('click', (event) => {
        MensajeProyectoPersonal.style.color = "red";
        MensajeProyectoPersonal.style.textShadow = "2px 2px 2px white";
        MensajeProyectoPersonal.style.textDecoration = "line-through";
        Cronometro();
    });
}

function TextoEscondido() {
    MensajeEscondido.addEventListener('click', (event) => {
        MensajeEscondido.style.opacity = "100%";
        MensajeEscondido.classList.add("ElementoEscondido");
        MensajeEscondido.textContent = "Momiji Inubashiri. Mi personaje favorito <3 dentro de todos mis proyectos hay un poquito de ella <3";

        setTimeout(() => {
            MensajeEscondido.style.opacity = "1%";
            MensajeEscondido.textContent = "Mi personaje favorito: Momiji Inubashiri <3";
        }, 3000);
    });
}

function AnioPagina(){
    const fechaActual = new Date();
    Anio.textContent = fechaActual.getFullYear();
}

const HorasF = document.getElementById('HorasF').textContent;
const HorasP = document.getElementById('HorasP').textContent;
const TotalHoras = document.getElementById('Total');

let numero1H = parseInt(HorasF);
let numero2H = parseInt(HorasP);
let operacion = numero1H + numero2H;
console.log(operacion);
TotalHoras.textContent = operacion;

AnioPagina();
ProyectosPersonales();
TextoEscondido();