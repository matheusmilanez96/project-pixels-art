const randomColors = () => {
  const randomButton = document.querySelector('#button-random-color');
  const color = document.querySelectorAll('.color');

  randomButton.addEventListener('click', () => {
    const cores = ['#000000'];
    for (let i = 0; i <= 2; i += 1) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      /** Source:https://css-tricks.com/snippets/javascript/random-hex-color/ */
      cores.push(`#${randomColor}`);
    }
    for (let i = 1; i < color.length; i += 1) {
      color[i].style.backgroundColor = cores[i];
    }
    localStorage.setItem('colorPalette', JSON.stringify(cores));
  });
};

randomColors();

const localPalette = () => {
  const color = document.querySelectorAll('.color');
  if (localStorage.getItem('colorPalette') !== null) {
    const cores = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 1; i < color.length; i += 1) {
      color[i].style.backgroundColor = cores[i];
    }
  }
};

localPalette();

const pixelBoard = () => {
  const board = document.querySelector('#pixel-board');
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.style.backgroundColor = 'white';
      board.appendChild(pixel);
    }
  }
};

pixelBoard();
