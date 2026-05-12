const UserCard = {

    // Genera el HTML de una tarjeta con los datos del usuario
    render: (user) => {
        return `
            <div class="user-card">
                <div class="user-card__header">
                    <span class="user-card__initials">
                        ${UserCard.getInitials(user.name)}
                    </span>
                    <div>
                        <h3 class="user-card__name">${user.name}</h3>
                        <p class="user-card__email">${user.email}</p>
                    </div>
                </div>
                <div class="user-card__footer">
                    <span class="user-card__role">${user.role}</span>
                    <button class="user-card__btn" 
                        onclick="UsersPage.delete('${user.id}')">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
    },

    // Genera las iniciales del nombre para el avatar
    // Ejemplo: "Juan Pérez" → "JP"
    getInitials: (name) => {
        return name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    }
};