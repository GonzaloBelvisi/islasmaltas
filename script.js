function playVideo(id) {
    document.getElementById(id).style.display = "flex";
}

function closeVideo(id) {
    document.getElementById(id).style.display = "none";
}

function playVideo(id) {
    // Obtén el elemento del modal y el video
    const modal = document.getElementById(id);
    const video = modal.querySelector('video');

    // Asegúrate de que el video comience desde el principio
    video.currentTime = 0;
    video.play(); // Reproduce el video

    // Muestra el modal
    modal.style.display = "flex";
}

function closeVideo(id) {
    // Oculta el modal
    const modal = document.getElementById(id);
    const video = modal.querySelector('video');

    // Pausa el video cuando se cierra el modal
    video.pause();
    modal.style.display = "none";
}
