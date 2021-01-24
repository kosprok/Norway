function toggle(){
    const trailer= document.querySelector(".trailer")
    // trailer.classList.toggle("active")
    const video= document.querySelector("video")
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}