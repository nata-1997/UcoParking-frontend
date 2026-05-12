const UsersPage = {

    // Carga y muestra todos los usuarios en pantalla
    render: async () => {
        const app = document.getElementById("app");
        app.innerHTML = `<h1 class="page-title">Usuarios UcoParking</h1>
                         <div id="users-container"></div>`;

        const users = await UserApi.getAll();
        const container = document.getElementById("users-container");
        container.innerHTML = users.map(u => UserCard.render(u)).join("");
    },

    // Elimina un usuario y recarga la página
    delete: async (id) => {
        const confirmar = confirm("¿Seguro que deseas eliminar este usuario?");
        if (!confirmar) return;

        await UserApi.delete(id);
        await UsersPage.render();
    },

    // Crea un usuario de prueba (útil para testear la conexión con el backend)
    createTest: async () => {
        const nuevoUsuario = {
            name: "Usuario Prueba",
            email: "prueba@ucordoba.edu.co",
            role: "ESTUDIANTE"
        };
        await UserApi.create(nuevoUsuario);
        await UsersPage.render();
    }
};

// Inicia la página cuando el navegador termina de cargar el HTML
document.addEventListener("DOMContentLoaded", UsersPage.render);