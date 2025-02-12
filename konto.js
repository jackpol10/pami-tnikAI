document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Funkcja logowania/rejestracji będzie dostępna wkrótce!");
        });
    });
});
