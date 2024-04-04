// script.js
document.addEventListener('DOMContentLoaded', () => {
    const listaPersonas = document.getElementById('lista-personas');
    const botonContratar = document.getElementById('boton-contratar');
    const inputNombre = document.getElementById('nombre');
    const inputOficio = document.getElementById('oficio');
    
    let personas = [];

    // Cargar personas guardadas al iniciar
    cargarPersonas();

    function cargarPersonas() {
        // Intentar obtener las personas guardadas
        const personasGuardadas = localStorage.getItem('personas');
        if (personasGuardadas) {
            personas = JSON.parse(personasGuardadas);
            renderizarPersonas();
        }
    }

    function renderizarPersonas() {
        listaPersonas.innerHTML = '';
        personas.forEach(persona => {
            const listItem = document.createElement('li');
            listItem.textContent = `${persona.nombre} - ${persona.oficio}`;
            listaPersonas.appendChild(listItem);
        });
    }

    botonContratar.addEventListener('click', () => {
        const nombre = inputNombre.value.trim();
        const oficio = inputOficio.value.trim();
        if (nombre !== '' && oficio !== '') {
            const nuevaPersona = { nombre, oficio };
            personas.push(nuevaPersona);
            renderizarPersonas();
            guardarPersonas();
            console.log(`Contratando a: ${nombre} - ${oficio}`);
        } else {
            alert('Por favor, ingresa un nombre y un oficio.');
        }
    });

    function guardarPersonas() {
        localStorage.setItem('personas', JSON.stringify(personas));
    }
});
