// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

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