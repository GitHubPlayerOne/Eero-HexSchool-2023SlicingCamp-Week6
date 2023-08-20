import Swiper from 'swiper/bundle';

// 跑馬燈
const albumsSwiper = new Swiper('.albums-swiper', {
  allowTouchMove: false,

  slidesPerView: 'auto',

  speed: 5000,
  
  loop: true,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

// 旋轉木馬
const bannerSwiper = new Swiper('.banner-swiper', {
  loop: true,

  autoplay: {
    delay: 3000,
  },

  slidesPerView: 1,

  slidesPerGroup: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

