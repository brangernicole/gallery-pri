let swiper = null;
let thumbsSwiper = null;
const captions = [];

document.addEventListener('DOMContentLoaded', () => {
  // Recolher todas as imagens e legendas da galeria
  const galleryItems = document.querySelectorAll('.gallery-item');
  const swiperWrapper = document.getElementById('swiperWrapper');
  const thumbsWrapper = document.getElementById('thumbsWrapper');
  const swiperCaption = document.getElementById('swiperCaption');
  const swiperModal = document.getElementById('swiperModal');
  const closeBtn = document.getElementById('closeSwiper');

  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    const caption = item.querySelector('figcaption');

    captions.push(caption ? caption.textContent : '');

    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    const slideImg = document.createElement('img');
    slideImg.src = img.src;
    slideImg.alt = img.alt;
    slide.appendChild(slideImg);
    swiperWrapper.appendChild(slide);

    const thumb = document.createElement('div');
    thumb.className = 'swiper-slide';
    const thumbImg = document.createElement('img');
    thumbImg.src = img.src;
    thumbImg.alt = img.alt;
    thumb.appendChild(thumbImg);
    thumbsWrapper.appendChild(thumb);
  });

  thumbsSwiper = new Swiper('#thumbsSwiper', {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 6,
    watchSlidesProgress: true,
    breakpoints: {
      480: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });

  swiper = new Swiper('#mainSwiper', {
    loop: true,
    spaceBetween: 30,
    thumbs: {
      swiper: thumbsSwiper,
    },
    navigation: {
      nextEl: '#nextBtn',
      prevEl: '#prevBtn',
    },
    keyboard: {
      enabled: true,
    },
  });

  // Atualizar legenda quando desliza
  swiper.on('slideChange', function() {
    const realIndex = this.realIndex;
    swiperCaption.textContent = captions[realIndex] || '';
  });

  // Atualizar legenda ao iniciar
  swiperCaption.textContent = captions[0] || '';

  // Abrir modal ao clicar nas imagens
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      swiperModal.classList.add('open');
      swiper.slideTo(index);
    });
  });

  // Fechar modal
  closeBtn.addEventListener('click', () => {
    swiperModal.classList.remove('open');
  });

  // Fechar modal ao clicar fora
  swiperModal.addEventListener('click', (e) => {
    if (e.target === swiperModal) {
      swiperModal.classList.remove('open');
    }
  });

  // Fechar modal com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && swiperModal.classList.contains('open')) {
      swiperModal.classList.remove('open');
    }
  });
});
