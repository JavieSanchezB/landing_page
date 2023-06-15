document.addEventListener('DOMContentLoaded', function() {
    const modalVideo = document.getElementById('modal-video');
    const modalClose = modalVideo.querySelector('.modal-close');
    const videoPlayer = document.getElementById('video-player');
  
    modalVideo.style.display = 'flex';
    videoPlayer.play();
  
    modalClose.addEventListener('click', function() {
      videoPlayer.pause();
      modalVideo.style.display = 'none';
    });
  });
  