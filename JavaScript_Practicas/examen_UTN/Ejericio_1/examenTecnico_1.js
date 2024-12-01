//1* Teniendo los siguientes datos:
let admin = "Juan Perez";
let password = "Prof123";

let students = [
    {
        name: "Ana",
        lastName: "Gomez",
        age: 40,
    },
    {
        name: "Ana",
        lastName: "Gomez",
        age: 40,
    }
];
    
/*Hacer un programa donde se verifique que el usuario sea administrador; y de
serlo, le permita ingresar un alumno ,utilizando un prompt(), al array de
estudiantes.
Este alumno es un objeto que tiene las siguientes propiedades: nombre, apellido, edad.*/

function renderStudents() {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = "";
    students.forEach((student, index) => {
    studentList.innerHTML += `
        <p>
            ${index + 1}. ${student.name} ${student.lastName}, Edad: ${student.age}
        </p>
        `;
    });
}

function verifAdmin() {
    const username = prompt("Ingrese su nombre de usuario:");
    const pass = prompt("Ingrese su contraseña:");
    if (username === admin && pass === password) {
        return true;
    } else {
        alert("Error: Usuario y contraseña inválidos");
        return false;
    }
}

function insertStudent () {
    if (verifAdmin()) {
        let studentName = prompt("Ingrese el nombre del alumno");
        let studentLastName = prompt("Ingrese el apellido del alumno");
        let studentAge = parseInt(prompt("Ingrese la edad del alumno"), 10);
            let student = {
            name: studentName,
            lastName: studentLastName,
            age: studentAge,
            };   
    students.push(student);
    renderStudents();
}}

// Mostrar la lista inicial de estudiantes al cargar la página
window.onload = renderStudents;