document.addEventListener('DOMContentLoaded', () => {
  // 1. Todas as variáveis agora dentro do DOMContentLoaded
  let swiper = null;
  let thumbsSwiper = null;
  const captions = [];

  const galleryItems = document.querySelectorAll('.gallery-item');
  const swiperWrapper = document.getElementById('swiperWrapper');
  const thumbsWrapper = document.getElementById('thumbsWrapper');
  const swiperCaption = document.getElementById('swiperCaption');
  const swiperModal = document.getElementById('swiperModal');
  const closeBtn = document.getElementById('closeSwiper');

  galleryItems.forEach((item) => {
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

  // 4. Breakpoints corrigidos: padrão é mobile, cresce com min-width
  thumbsSwiper = new Swiper('#thumbsSwiper', {
    loop: false,
    spaceBetween: 8,
    slidesPerView: 8,
    watchSlidesProgress: true,
    breakpoints: {
      480: {
        slidesPerView: 5,
        spaceBetween: 10,
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
    swiperCaption.textContent = captions[this.realIndex] || '';
  });

  // Atualizar legenda ao iniciar
  swiperCaption.textContent = captions[0] || '';

  // Abrir modal ao clicar nas imagens
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      swiperModal.classList.add('open');
      // 2. slideToLoop em vez de slideTo — funciona corretamente com loop: true
      swiper.slideToLoop(index);
      // 3. Legenda atualizada imediatamente ao abrir o modal
      swiperCaption.textContent = captions[index] || '';
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