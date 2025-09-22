
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

/*
------------------------------
FUNCIONES DE GESTIÓN DE LIBROS
------------------------------
*/

/*
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.

➝ Esta función recibe los datos de un libro como parámetros.
➝ Crea un objeto con esas propiedades y lo agrega al array global "libros".
➝ Asigna la propiedad "disponible: true" porque al inicio el libro está disponible por defecto.
➝ Finalmente, muestra un mensaje en consola confirmando la acción.
*/

const agregarLibro = (id, titulo, autor, anio, genero) => {
    libros.push({
        id: id, // Identificador único del libro
        titulo: titulo, // Título del libro
        autor: autor, // Autor del libro
        anio: anio, // Año de publicación del libro
        genero: genero, // Género literario del libro
        disponible: true // Estado de disponibilidad del libro, disponible para préstamo por defecto
    });
    console.log(`Libro "${titulo}" agregado exitosamente`);
}
/*
b) Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.

➝ Busca libros en el array según un "criterio" (título, autor, etc.).
➝ Se utiliza el algoritmo de búsqueda lineal: recorre todos los elementos y compara uno por uno.
➝ filter() devuelve un nuevo array con todos los libros que coinciden con el valor buscado.
⚠️ Nota: se usa "toLowerCase()" para que la comparación no sea sensible a mayúsculas/minúsculas.
*/
const buscarLibro = (criterio, valor) => libros.filter(libro => libro[criterio].toLowerCase() === valor.toLowerCase());

/*
c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
por título o año utilizando el algoritmo de ordenamiento burbuja
(bubble sort) y luego muestre los libros ordenados en la consola.

➝ Ordena los libros según el "criterio" recibido (por ejemplo, "titulo" o "anio").
➝ Se implementa el algoritmo de ordenamiento burbuja (bubble sort):
    - Compara pares de elementos adyacentes, es decir dos libros uno al lado del otro en el array.
    - Si están en el orden incorrecto, los intercambia.
    - Repite este proceso hasta que el array quede ordenado.
➝ Al final, muestra la lista ordenada en forma de tabla en la consola.
*/
const ordenarLibros = (criterio) => {
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - i - 1; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                // Intercambiar libros[j] y libros[j+1]
                let temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }
        }
    }
    console.log(`Libros ordenados por ${criterio}:`);
    console.table(libros);
}

/*
d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro.

➝ Busca en el array un libro con el id indicado.
➝ Si lo encuentra, obtiene su índice y lo elimina con splice().
➝ Si no encuentra el id, muestra un mensaje de no encontrado.
*/
const borrarLibro = (id) => {
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        libros.splice(index, 1);
        console.log(`El libro con ID ${id} fue eliminado exitosamente`);
    } else {
        console.log(`No se encontró un libro con ID ${id}`);
    }   
}

/* 
------------------------------
GESTIÓN DE USUARIOS
------------------------------
*/

/*
a) Implementar una función registrarUsuario(nombre, email) que
agregue un nuevo usuario al array usuarios.

➝ Crea un nuevo usuario y lo agrega al array global "usuarios".
➝ Muestra un mensaje en consola confirmando la acción.
*/
const registrarUsuario = (nombre, email) => usuarios.push({nombre, email});
/*
b) Implementar una función mostrarTodosLosUsuarios() que me
devuelva el array completo de usuarios
➝ Devuelve el array completo de usuarios registrados.

*/
const mostrarTodosLosUsuarios = () => usuarios;
/*
c) Crear una función buscarUsuario(email) que devuelva la información
de un usuario dado su email.
➝ Busca en el array de usuarios un usuario específico mediante su email.
➝ Utiliza .find(), que devuelve el primer elemento que cumpla la condición.
➝ Si no encuentra coincidencia, devuelve "undefined".
*/
const buscarUsuario = (email) => usuarios.find(usuario => usuario.email === email);
/*
d) Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado.
➝ Elimina un usuario específico según su nombre y email.
➝ Se usa findIndex() para obtener la posición del usuario en el array.
➝ Si se encuentra, se elimina con splice().
➝ Si no existe, muestra un mensaje de advertencia en consola.
*/
const borrarUsuario = (nombre, email) => {
    const index = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);
    if (index !== -1) {
        usuarios.splice(index, 1);
        console.log(`El usuario ${nombre} fue eliminado exitosamente`);
    } else {
        console.log(`No se encontró un usuario con nombre ${nombre} y email ${email}`);
    }
}

/*
------------------------------
SISTEMA DE PRÉSTAMOS
------------------------------
*/

/*
a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
un libro como no disponible y lo agregue a la lista de libros prestados
del usuario.
➝ Esta función permite prestar un libro a un usuario.
    ➝ Pasos:
        1. Busca el libro en el array "libros" usando su id.
        2. Busca el usuario en el array "usuarios" usando su id.
        3. Si ambos existen:
            - Verifica que el libro esté disponible.
            - Si está disponible:
                • Cambia "disponible" a false (ya no se puede prestar a otro).
                • Agrega el id del libro al array "librosPrestados" del usuario.
                • Muestra un mensaje confirmando el préstamo.
            - Si NO está disponible:
                • Muestra un mensaje indicando que no se puede prestar.
        4. Si no encuentra el libro o el usuario:
            • Muestra un mensaje de error.
*/

const prestarLibro = (idLibro, idUsuario) => {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (libro && usuario) {
        if (libro.disponible) {
            libro.disponible = false; // Marcar el libro como no disponible 
            usuario.librosPrestados.push(idLibro); // Agregar el ID del libro a la lista de libros prestados del usuario
            console.log(`El libro "${libro.titulo}" ha sido prestado a ${usuario.nombre}`);
        } else {
            console.log(`El libro "${libro.titulo}" no está disponible para préstamo`);
        }
    } else {
        console.log("Libro o usuario no encontrado");
    }
}

/*
b) Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario.
➝ Esta función permite devolver un libro a la biblioteca.
    ➝ Pasos:
        1. Busca el libro y el usuario en sus respectivos arrays por id.
        2. Si ambos existen:
            - Verifica que el libro esté marcado como "no disponible".
            - Si está prestado:
                • Cambia "disponible" a true (vuelve a estar en la biblioteca).
                • Busca el índice del idLibro en "librosPrestados" del usuario.
                • Si lo encuentra, lo elimina con splice().
                • Muestra un mensaje confirmando la devolución.
                • Si no lo encuentra, indica que ese usuario no tenía ese libro.
            - Si el libro ya estaba disponible, muestra un aviso.
        3. Si no encuentra libro o usuario, muestra un error.
*/

const devolverLibro = (idLibro, idUsuario) => {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (libro && usuario) {
        if (!libro.disponible) {
            libro.disponible = true; // Marcar el libro como disponible
            const index = usuario.librosPrestados.indexOf(idLibro);
            if (index !== -1) {
                usuario.librosPrestados.splice(index, 1); // Eliminar el ID del libro de la lista de libros prestados del usuario
                console.log(`El libro "${libro.titulo}" ha sido devuelto por ${usuario.nombre}`);
            } else {
                console.log(`${usuario.nombre} no tiene prestado el libro "${libro.titulo}"`);
            }
        } else {
            console.log(`El libro "${libro.titulo}" ya está disponible en la biblioteca`);
        }
    } else {
        console.log("Libro o usuario no encontrado");
    }
}
