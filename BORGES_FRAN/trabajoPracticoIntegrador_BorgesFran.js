
/*
------------------------------
ESTRUCTURA DE DATOS 
------------------------------

a) Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).

*/

let libros = [
    {
        id: 1,
        titulo: "Un saco de huesos",
        autor: "Stephen King",
        anio: 1998,
        genero: "Terror",
        disponible: true
    },
    {
        id: 2,
        titulo: "Origen",
        autor: "Dan Brown",
        anio: 2017,
        genero: "Misterio",
        disponible: true
    },
    {
        id: 3,
        titulo: "El psicoanalista",
        autor: "John Katzenbach",
        anio: 2002,
        genero: "Suspenso",
        disponible: false
    },
    {
        id: 4,
        titulo: "La chica del tren",
        autor: "Paula Hawkins",
        anio: 2015,
        genero: "Thriller",
        disponible: true
    },
    {
        id: 5,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        anio: 1967,
        genero: "Realismo mágico",
        disponible: false
    },
    {
        id: 6,
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949,
        genero: "Distopía",
        disponible: true
    },
    {
        id: 7,
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        anio: 1925,
        genero: "Clásico",
        disponible: true
    },
    {
        id: 8,
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        anio: 1960,
        genero: "Ficción",
        disponible: false
    },
    {
        id: 9,
        titulo: "El código Da Vinci",
        autor: "Dan Brown",
        anio: 2003,
        genero: "Misterio",
        disponible: true
    },
    {
        id: 10,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        anio: 2001,
        genero: "Ficción",
        disponible: true
    }
]


/*
b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros).
*/

let usuarios = [
    {
        id: 1,
        nombre: "Tony Gomez",
        email: "tony@gmail.com",
        librosPrestados: [3, 5]
    },
    {
        id: 2,
        nombre: "Maho Gomez",
        email: "maho@gmail.com",
        librosPrestados: [1, 4, 6]
    },
    {
        id: 3,
        nombre: "Daniel Lutti",
        email: "daniel@gmail.com",
        librosPrestados: []
    },
    {
        id: 4,
        nombre: "Magenta Castilo",
        email: "magenta@gmail.com",
        librosPrestados: [2]
    },
    {
        id: 5,
        nombre: "Pocket Maestracci",
        email: "pocket@gmail.com",
        librosPrestados: [8, 9]
    }
]