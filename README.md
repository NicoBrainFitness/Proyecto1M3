<h1> <img src = "https://github.com/NicoBrainFitness/Proyecto1M2/blob/main/banner.png"> "PROYECTO 3: Landing de Negocio"</h1>

# Proyecto1M3

El proyecto consiste en realizar una landing page (página de aterrizaje), en la cual el usuario al acceder a la página puede observar la interfaz y comprender de qué trata el negocio y sus programas.

# Prototipado Simple para definir como hacer Landing Page para Brain Fitness Chile

Este es un proyecto inicia con un propotipado simple utilizando el archivo Prototipado_simple.drawio, con el cual se realiza una estructura de como deberia ser el landing page.
<img src = "Imagen propotipado simple.png">

# Brain Fitness Chile - Landing Page

Este es un proyecto de landing Page para Brain Fitness Chile, un recurso líder en Chile para mejorar la salud mental y el bienestar. La página de aterrizaje está diseñada para proporcionar información sobre los servicios ofrecidos por Brain Fitness Chile y permitir a los usuarios suscribirse para recibir más información.

## Características

- Diseño para dispositivos móviles y de escritorio.
- Secciones informativas sobre Brain Fitness Chile, incluyendo una descripción de la empresa y detalles de contacto.
- Sección de productos que muestra tres programas de bienestar mental ofrecidos por Brain Fitness Chile.
- Formulario de suscripción para que los usuarios puedan recibir actualizaciones y promociones por correo electrónico.

## Tecnologías  y codigos utilizados

- HTML5

```HTML
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brain Fitness Chile - Landing Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        .logo img {
            height: 70px;
        }
    </style>
</head>
<body>
    <header class="bg-dark text-white py-4">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="logo">
                <img src="logo-bf.png" alt="Logo de Brain Fitness Chile">
            </div>
            <nav>
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link" href="#main">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Acerca de Nosotros</a></li>
                    <li class="nav-item"><a class="nav-link" href="#products">Productos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main id="main" class="py-5">
        <section class="container">
            <div class="text-center">
                <h1>Descubre Brain Fitness Chile</h1>
                <p class="lead">Somos tu recurso líder en Chile para mejorar tu salud mental y bienestar. Descubre cómo podemos ayudarte a alcanzar tus objetivos de bienestar mental.</p>
                <form id="emailForm" class="form-inline justify-content-center">
                    <input type="email" id="emailInput" class="form-control mr-2" placeholder="Ingresa tu correo electrónico" required>
                    <button type="submit" class="btn btn-primary">Suscribirse</button>
                </form>
            </div>
        </section>
    </main>

    <section id="about" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center">Acerca de Nosotros</h2>
            <p>Brain Fitness Chile se dedica a proporcionar soluciones innovadoras para mejorar la salud mental y el bienestar. Nuestro equipo de expertos está comprometido a ayudarte a alcanzar tu máximo potencial cognitivo y emocional.</p>
        </div>
    </section>

    <section id="products" class="py-5">
        <div class="container">
            <h2 class="text-center mb-4">Nuestros Programas</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title">Programa Básico</h3>
                            <p class="card-text">Duración: 3 meses</p>
                            <p class="card-text">4 horas al mes "100% Presencial"</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title">Programa Medio</h3>
                            <p class="card-text">Duración: 6 meses</p>
                            <p class="card-text">8 horas al mes "50% virtual/Presencial"</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title">Programa Avanzado</h3>
                            <p class="card-text">Duración: 12 meses</p>
                            <p class="card-text">12 horas al mes "50% virtual/Presencial"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer id="contact" class="bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-left">
                    <p>Teléfono: +56 9 1234 5678</p>
                    <p>Email: info@brainfitnesschile.cl</p>
                </div>
                <div class="col-md-6 text-center text-md-right">
                    <a href="#" class="text-white mx-2">Facebook</a>
                    <a href="#" class="text-white mx-2">Twitter</a>
                    <a href="#" class="text-white mx-2">Instagram</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```  
- CSS3 (con Bootstrap 4)

```CSS3
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 50px;
}

nav ul {
    list-style: none;
}

nav ul li {
    display: inline;
    margin-left: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

main {
    padding: 50px;
}

.presentation {
    text-align: center;
}

footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

.social a {
    color: white;
    text-decoration: none;
    margin-right: 10px;
}

/* Estilos responsivos */
@media only screen and (max-width: 600px) {
    header {
        flex-direction: column;
        align-items: center;
    }

    nav {
        margin-top: 20px;
    }

    nav ul {
        display: flex;
        flex-direction: column;
    }

    nav ul li {
        margin: 10px 0;
    }

    main {
        padding: 20px;
    }
}
```
- JavaScript

```javascript
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("emailInput").value;
    alert("¡Gracias por suscribirte con el correo electrónico: " + email + "!");
    document.getElementById("emailInput").value = ""; // Limpiar el campo de correo electrónico después de enviar
});
```

## Evidencia de Lannding Page funcionando el Live Server
<img src = "Landing Page.png">

Este proyecto fue creado por [José Nicolás R.].
