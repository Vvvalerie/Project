window.addEventListener('DOMContentLoaded', () => {
  // Инициализруем слайдер (Swiper.js)
  const slider = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-right',
      prevEl: '.swiper-left',
    },
  });

  //   Получаем DOM-элементы

  const shadowImgEl = document.querySelector('.shadow-img');
  const choiceBtnEl = document.querySelector('.swiper-play');
  const countEl = document.querySelector('.menu__scores-counts');
  const scoresEl = document.querySelector('.menu__scores-value');
  const loseScreenEl = document.querySelector('.lose-screen');
  const loseBtnEl = loseScreenEl.querySelector('.lose-screen__btn');
  const winScreenEl = document.querySelector('.win-screen');
  const winBtnEl = winScreenEl.querySelector('.win-screen__btn');

  //   Глобальные переменные

  let counts = 0; // Попытки
  let wins = 0; // Кол-во правильных угадываний
  let loses = 0;

  // Массиф силуэтов

  const shadows = [
    './imgs/shadow-1.png',
    './imgs/shadow-2.png',
    './imgs/shadow-3.png',
    './imgs/shadow-4.png',
    './imgs/shadow-5.png',
  ];

  // случайное число от min до max
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  //   Смена тени

  function changeShadow() {
    let shadowIdx = randomInteger(0, shadows.length - 1);

    shadowImgEl.src = shadows[shadowIdx];
    shadowImgEl.dataset.id = shadowIdx;
  }

  //  Победа

  function winGame() {
    winScreenEl.classList.remove('hidden');
  }

  //   Проигрыш

  function loseGame() {
    loseScreenEl.classList.remove('hidden');
  }

  //   Функция запуска игры

  function startGame() {
    changeShadow();

    choiceBtnEl.addEventListener('click', () => {
      counts++;
      countEl.textContent = counts;
      if (+slider.realIndex === +shadowImgEl.dataset.id) {
        wins++;
        scoresEl.textContent = wins;
        changeShadow();
      } else {
        loses++;
      }

      if (loses > 3) {
        loseGame();
      }

      if (wins >= 5) {
        winGame();
      }
    });
  }

  winBtnEl.addEventListener('click', () => {
    window.location.reload();
  });

  loseBtnEl.addEventListener('click', () => {
    window.location.reload();
  });

  startGame();
});
