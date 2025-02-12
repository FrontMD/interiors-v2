document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.article-hero__content-video');
    const playButton = document.querySelector('.article-hero__content-video__play');
    const videoPlayer = document.querySelector('.article-hero__content-video__player');
    
    playButton.addEventListener('click', () => {
        videoContainer.classList.add('active');
        videoPlayer.play();
    });
}); 