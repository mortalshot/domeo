// Подключение функционала "Чертоги Фрилансера"
import { _slideUp, _slideDown, bodyLockStatus, bodyLock, isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.addEventListener('DOMContentLoaded', function () {
  const ctaButton = document.querySelector('.cta__button');
  if (ctaButton) {
    setTimeout(() => {
      ctaButton.classList.add('_active');
    }, 300);
  }

  // Работа с квизом
  const steps = document.querySelectorAll('.quiz__step');
  if (steps.length > 0) {
    const discountValue = document.querySelector('.quiz__discount-value span');
    const discountValues = ["1,9", "2,6", "4,3", "5,6"];
    let currentIndex = 0;

    steps.forEach(step => {
      const options = step.querySelectorAll('.options__input');

      options.forEach(button => {
        button.addEventListener('change', function () {
          const nextStep = step.nextElementSibling;

          if (nextStep && nextStep.classList.contains('quiz__step')) {
            step.classList.remove('_active');
            nextStep.classList.add('_active');

            if (nextStep.classList.contains('quiz__step_full')) {
              nextStep.closest('.quiz__grid').classList.add('_full');
            } else {
              nextStep.closest('.quiz__grid').classList.remove('_full');
            }

            if (nextStep.classList.contains('quiz__step_calculate')) {
              const quizTotal = nextStep.querySelector('.quiz__total');

              setTimeout(() => {
                quizTotal.classList.add('_active');
              }, 1500);

              setTimeout(() => {
                document.querySelector('.quiz__step_calculate').classList.remove('_active');
                document.querySelector('.quiz__step_final').classList.add('_active');
              }, 3000);
            }


            if (currentIndex < discountValues.length) {
              discountValue.innerHTML = discountValues[currentIndex];
              currentIndex++;
            }
          }
        })
      });
    });
  }

  // Анимация фокуса на инпут
  const inputWrappers = document.querySelectorAll('.input-wrapper');
  if (inputWrappers.length > 0) {
    inputWrappers.forEach(item => {
      const itemLabel = item.querySelector('.form-label');

      if (itemLabel) {
        const itemInput = item.querySelector('.input');

        itemInput.addEventListener("focus", function () {
          item.classList.add('_focus');
          _slideUp(itemLabel);
        });
        itemInput.addEventListener("blur", function () {
          if (isMobile.any()) {
            setTimeout(() => {
              bodyLock();
              document.documentElement.classList.add("menu-open");
              console.log('qweqwe');
            }, 100);
          }

          item.classList.remove('_focus');
          _slideDown(itemLabel);
        });
      }
    });
  }

  const featuresContainer = document.querySelector('.features__container');

  if (featuresContainer) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Процент видимости элемента (10%)
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Добавляем класс, если элемент стал видимым
          featuresContainer.classList.add('_show');
          // Останавливаем наблюдение за этим элементом
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(featuresContainer);
  }
});

/* document.addEventListener('click', function (e) {
  const targetElement = e.target;
}) */