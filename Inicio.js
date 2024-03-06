document.addEventListener("DOMContentLoaded", function () {
    // Crear elementos del DOM y agregar contenido
    const appContainer = document.getElementById("app");

    // Header
    const header = document.createElement("header");
    header.innerHTML = `
        <img src="logo.jpg" alt="Logo de la Empresa" class="logo">
        <h1>Empresa de Energía Hidroeléctrica</h1>
        <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61556396891800" target="_blank">Facebook</a>
            <a href="https://www.youtube.com/channel/UCnAkp2FrS_kuygn326fOx5A" target="_blank">YouTube</a>
            <a href="https://www.tiktok.com/@vida_en_flujo?is_from_webapp=1&sender_device=pc" target="_blank">TikTok</a>
            <a href="https://www.instagram.com/represa_hidraulica/?next=%2F" target="_blank">Instagram</a>
        </div>
    `;
    appContainer.appendChild(header);

    // Section
    const section = document.createElement("section");
    section.innerHTML = `
        <h2>Visión</h2>
        <p>Nuestra visión es ser pioneros en la generación de energía hidroeléctrica...</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yLdDEOaQ_r0?si=mlOqGYhzU1vkc6tN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <img src="presa2.jpg" alt="Imagen de la presa">
    `;
    appContainer.appendChild(section);

    // Otros sections aquí

    // Footer
    const footer = document.createElement("footer");
    footer.innerHTML = `<p>© ${new Date().getFullYear()} Empresa de Energía Hidroeléctrica. Todos los derechos reservados.</p>`;
    appContainer.appendChild(footer);
});
