const utils = require("../utils");
// ⚠️ No modificar nada arriba de esta línea ⚠️

/// =========================================================================== ///
/// =========================== 👑 HENRY-GOT 👑 ============================ ///
/// =========================================================================== ///

/*
  1️⃣ ***** EJERCICIO 1 ***** - addPersonaje 1️⃣:

  🟢 La función addPersonaje recibirá por parámetro un objeto de personaje.
  🟢 Debe agregar a utils.personajes el objeto recibido.
  🟢 Si el personaje ya se encuentra dentro de utils.personajes, arrojar un Error('Ya existe ese personaje').
  🟢 Agregar un personaje a utils.personajes y retornar todos los personajes si la operación fue exitosa.

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los personajes mediante *utils.personajes*.
  2) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  3) Recuerda verificar si el personaje que intentas agregar, ya existe en utils.personajes.
  4) Investiga acerca de throw Error() para devolver errores.
  5) Recuerda que dentro utils, puedes ver la estructura de la info y en examples hay ejemplos de como viene la data.
  */

// const addPersonaje = (personaje) => {
//   // Tu código aquí
// };



const addPersonaje = (personaje) => {
  // Verificar si el personaje ya existe
  const existe = utils.personajes.some((p) => p.nombre === personaje.nombre);

  // Si existe, lanzar un error
  if (existe) {
    throw new Error('Ya existe ese personaje');
  }

  // Si no existe, agregar el personaje a la lista
  utils.personajes.push(personaje);

  // Retornar la lista actualizada de personajes
  return utils.personajes;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = addPersonaje;
