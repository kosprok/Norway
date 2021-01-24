function toggle() {
    const trailer = document.querySelector(".trailer");
    const video = document.querySelector("video");
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}
  