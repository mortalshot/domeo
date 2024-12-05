/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, Pagination, EffectCoverflow, Navigation, Thumbs } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectCoverflow, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

function initSliders() {
	if (document.querySelector('.guarantee__slider')) {
		new Swiper('.guarantee__slider', {
			modules: [Autoplay, Pagination, EffectCoverflow],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: -60,
			speed: 800,
			loop: true,
			direction: 'vertical',
			allowTouchMove: false,

			// Эффекты
			effect: 'coverflow',
			coverflowEffect: {
				scale: 0.8,
				depth: 1,
			},

			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},


			pagination: {
				el: '.guarantee__slider .swiper-pagination',
				clickable: true,
			},

			on: {
				init() {
					this.el.addEventListener('mouseenter', () => {
						this.el.classList.add('_stop');
						this.autoplay.stop();
					});

					this.el.addEventListener('mouseleave', () => {
						this.el.classList.remove('_stop');
						this.autoplay.start();
					});
				},
			}
		});
	}

	if (document.querySelector('.socials__slider')) {
		const socialsSlider = new Swiper('.socials__slider', {
			modules: [Pagination, Navigation, Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			loop: false,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.socials__slider .swiper-arrow_prev',
				nextEl: '.socials__slider .swiper-arrow_next',
			},

			thumbs: {
				swiper: {
					el: '.socials__thumbs',
					slidesPerView: 7,
					spaceBetween: 12,

					/* breakpoints: {
						768: {
							slidesPerView: 7,
							spaceBetween: 12,
						},
					}, */
				}
			},


			// События
			on: {
				/* init() {
					this.el.addEventListener('mouseenter', () => {
						this.el.classList.add('_stop');
						this.autoplay.stop();
					});

					this.el.addEventListener('mouseleave', () => {
						this.el.classList.remove('_stop');
						this.autoplay.start();
					});
				}, */
			}
		});
	}

	if (document.querySelector('.awards__slider')) {
		new Swiper('.awards__slider', {
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1.3,
			spaceBetween: 0,
			centeredSlides: true,
			speed: 800,
			loop: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//preloadImages: false,
			//lazy: true,

			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация

			pagination: {
				el: '.guarantee__slider .swiper-pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */


			// Брейкпоинты
			breakpoints: {
				480: {
					slidesPerView: 1.4,
					spaceBetween: -10,
				},
				575: {
					slidesPerView: 1.2,
					spaceBetween: -10,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: -10,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: -10,
				},
				1280: {
					slidesPerView: 2.5,
					spaceBetween: -10,
				},
				1440: {
					slidesPerView: 2.8,
					spaceBetween: -10,
				},
				1640: {
					slidesPerView: 3.3,
					spaceBetween: -10,
				},
			},

			// События
			on: {
				init() {
					this.el.addEventListener('mouseenter', () => {
						this.el.classList.add('_stop');
						this.autoplay.stop();
					});

					this.el.addEventListener('mouseleave', () => {
						this.el.classList.remove('_stop');
						this.autoplay.start();
					});
				},
			}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
});