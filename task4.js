// task4.js

import { getServerURL } from './task1.js';

export async function delUser(id) {
  try {
    const response = await fetch(`${getServerURL()}/users/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log(` Usuario con ID ${id} eliminado correctamente.`);
    } else {
      console.warn(` No se pudo eliminar al usuario con ID ${id}. Código: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error al eliminar al usuario con ID ${id}:`, error);
  }
}
