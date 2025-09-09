// task2.js

import { getServerURL } from './task1.js';

export async function listUsers() {
  try {
    const response = await fetch(`${getServerURL()}/users`);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('Error al listar usuarios:', error);
  }
}
