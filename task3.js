// task3.js

import { getServerURL } from './task1.js';

export async function addUser(firstName, lastName, email) {
  try {
    const response = await fetch(`${getServerURL()}/users`);
    const users = await response.json();

    const maxId = users.reduce((max, user) => user.id > max ? user.id : max, 0);

    const newUser = {
      id: maxId + 1,
      firstName,
      lastName,
      email
    };

    const postResponse = await fetch(`${getServerURL()}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const result = await postResponse.json();
    console.log('Usuario agregado:', result);

  } catch (error) {
    console.error('Error al agregar usuario:', error);
  }
}
