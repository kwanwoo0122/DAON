const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide div');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 1;
const size = document.body.clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

const autoSlide = () => {
  setInterval(nextSlide, 3000);
}

const nextSlide = () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.7s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

const prevSlide = () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.7s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

};

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].classList[1] === 'last-clone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].classList[1] === 'first-clone') {
    console.log(1);
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

autoSlide();
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);