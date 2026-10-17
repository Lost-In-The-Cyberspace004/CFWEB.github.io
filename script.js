const Contenedor = document.querySelector(".CambioDeColorTodo");
Contenedor.classList.add("CambioDeColor");

const MensajeEscondido = document.querySelector('.MensajeEscondido');
const Anio = document.getElementById('FechaActual');
const OS = document.getElementById('OS');

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





const Python = document.getElementById('Python');
function PythonFuncion(){
    Python.addEventListener('click', (event) => {
        Python.textContent = "Lenguaje de mierda, no sabes cuanto odie aprender esta basura"
        Python.style.color = "red"

        setTimeout((event) => {
            Python.style.color = "white";
            Python.textContent = "Python"
        }, 3000);

    });
}







function AnioPagina() {
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
TextoEscondido();
PythonFuncion();