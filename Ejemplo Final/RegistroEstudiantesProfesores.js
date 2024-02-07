
const formulario = document.getElementById("formulario");
const cardsEstudiantes = document.getElementById("cardsEstudiantes");
const cardsProfesores = document.getElementById("cardsProfesores");
const templateEstudiante = document.getElementById("templateEstudiante").content;
const templateProfesor = document.getElementById("templateProfesor").content;

const alert = document.getElementById("alert");

const estudiantes = [];
const profesores = [];

document.addEventListener("click", (e) => {
    // preguntamos por uid
    if (e.target.dataset.uid) {
        if (e.target.matches(".btn-success")) {
            estudiantes.map((item) => {
                // modificamos en caso de que sea true
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = true;
                }
                console.log(item);
                return item;
            });
        }
        if (e.target.matches(".btn-danger")) {
            estudiantes.map((item) => {
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = false;
                }
                console.log(item);
                return item;
            });
        }
        Persona.pintarPersonaUI(estudiantes, "Estudiante");
    }
});

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        // agregamos uid
        this.uid = `${Date.now()}`;
    }

    static pintarPersonaUI(personas, tipo) {
        if (tipo === "Estudiante") {
            cardsEstudiantes.textContent = "";
            const fragment = document.createDocumentFragment();

            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoEstudiante());
            });

            cardsEstudiantes.appendChild(fragment);
        }

        if (tipo === "Profesor") {
            cardsProfesores.textContent = "";
            const fragment = document.createDocumentFragment();
            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoProfesor());
            });
            cardsProfesores.appendChild(fragment);
        }
    }
}

class Estudiante extends Persona {
    #estado = true;
    #estudiante = "Estudiante";

    set setEstado(estado) {
        this.#estado = estado;
    }

    get getEstudiante() {
        return this.#estudiante;
    }

    agregarNuevoEstudiante() {
        const clone = templateEstudiante.cloneNode(true);

        clone.querySelector("h5 .text-primary").textContent = 'Nombre: ' + this.nombre;
        clone.querySelector("h6").textContent = 'Categoria: ' + this.getEstudiante;
        clone.querySelector(".lead").textContent = 'Edad: ' + this.edad;

        if (this.#estado) {
            clone.querySelector(".badge").className = "badge bg-success";
            clone.querySelector(".btn-success").disabled = true;
            clone.querySelector(".btn-danger").disabled = false;
        } else {
            clone.querySelector(".badge").className = "badge bg-danger";
            clone.querySelector(".btn-danger").disabled = true;
            clone.querySelector(".btn-success").disabled = false;
        }
        clone.querySelector(".badge").textContent = this.#estado ? "Aprobado" : "Reprobado";

        // reemplaze por uid
        clone.querySelector(".btn-success").dataset.uid = this.uid;
        clone.querySelector(".btn-danger").dataset.uid = this.uid;

        return clone;
    }
}

class Profesor extends Persona {
    #profesor = "Profesor";

    agregarNuevoProfesor() {
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector("h5").textContent = 'Nombre: ' + this.nombre;
        clone.querySelector("h6").textContent = 'Categoria: ' + this.#profesor;
        clone.querySelector(".lead").textContent = 'Edad: ' + this.edad;
        return clone;
    }
}

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    alert.classList.add("d-none");

    const datos = new FormData(formulario);
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const opcion = document.getElementById("opcion").value;

    // validación de campos vacíos
    if (!nombre.trim() || !edad.trim() || !opcion.trim()) {
        console.log("Elemento vacío");
        alert.classList.remove("d-none");
        return;
    }

    if (opcion === "Estudiante") {
        const estudiante = new Estudiante(nombre, edad);
        estudiantes.push(estudiante);
        Persona.pintarPersonaUI(estudiantes, opcion);
    }

    if (opcion === "Profesor") {
        const profesor = new Profesor(nombre, edad);
        profesores.push(profesor);
        Persona.pintarPersonaUI(profesores, opcion);
    }

    //Se limpian los datos del formulario
    formulario.reset();
});