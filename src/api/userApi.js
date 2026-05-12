const BASE_URL = "http://localhost:8080/api";

const UserApi = {

    // Trae todos los usuarios registrados en el sistema
    getAll: async () => {
        const response = await fetch(`${BASE_URL}/users`);
        return response.json();
    },

    // Busca un usuario por su ID
    getById: async (id) => {
        const response = await fetch(`${BASE_URL}/users/${id}`);
        return response.json();
    },

    // Crea un nuevo usuario
    create: async (userData) => {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
        return response.json();
    },

    // Actualiza los datos de un usuario existente
    update: async (id, userData) => {
        const response = await fetch(`${BASE_URL}/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
        return response.json();
    },

    // Elimina un usuario
    delete: async (id) => {
        const response = await fetch(`${BASE_URL}/users/${id}`, {
            method: "DELETE"
        });
        return response.json();
    }
};