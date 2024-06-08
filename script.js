document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("emailInput").value;
    alert("¡Gracias por suscribirte con el correo electrónico: " + email + "!");
    document.getElementById("emailInput").value = ""; // Limpiar el campo de correo electrónico después de enviar
});
