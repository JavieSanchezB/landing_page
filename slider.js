const sliderImages = document.querySelector('.slider-images');
const thumbnailImages = document.querySelectorAll('.thumbnail-images img');

thumbnailImages[0].classList.add('active');
sliderImages.children[0].style.display = 'block';

for (let i = 0; i < thumbnailImages.length; i++) {
  thumbnailImages[i].addEventListener('click', function() {
    for (let j = 0; j < thumbnailImages.length; j++) {
      thumbnailImages[j].classList.remove('active');
      sliderImages.children[j].style.display = 'none';
    }

    this.classList.add('active');
    sliderImages.children[i].style.display = 'block';
  });
}
