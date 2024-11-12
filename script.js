function playVideo(id) {
    document.getElementById(id).style.display = "flex";
}

function closeVideo(id) {
    document.getElementById(id).style.display = "none";
}

function playVideo(id) {
    const modal = document.getElementById(id);
    const video = modal.querySelector('video');

    // Añade la clase para ocultar el footer
    document.body.classList.add('modal-open');

    // Reinicia y reproduce el video
    video.currentTime = 0;
    video.play();
    modal.style.display = "flex";

    // Agrega un evento 'ended' para cerrar el modal cuando termine el video
    video.onended = function() {
        closeVideo(id);
    };
}

function closeVideo(id) {
    const modal = document.getElementById(id);
    const video = modal.querySelector('video');
    
    // Pausa el video y oculta el modal
    video.pause();
    video.currentTime = 0;
    modal.style.display = "none";

    // Quita la clase para mostrar el footer de nuevo
    document.body.classList.remove('modal-open');

    // Elimina el evento 'ended' para evitar conflictos si se vuelve a abrir
    video.onended = null;
}



