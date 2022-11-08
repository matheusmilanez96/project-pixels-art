const firstButton = document.querySelector('.first-button');
const secondButton = document.querySelector('.second-button');
const thirdButton = document.querySelector('.third-button');
const fourthButton = document.querySelector('.fourth-button');
const clearButton = document.querySelector('#clear-board');

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
      const pixel = document.createElement('button');
      pixel.classList.add('pixel');
      pixel.style.backgroundColor = 'white';
      board.appendChild(pixel);
    }
  }
};

pixelBoard();

const selecionarCor = (event) => {
  const elementoSelected = document.querySelector('.selected');
  elementoSelected.classList.remove('selected');
  event.target.classList.add('selected');
};

firstButton.addEventListener('click', selecionarCor);
secondButton.addEventListener('click', selecionarCor);
thirdButton.addEventListener('click', selecionarCor);
fourthButton.addEventListener('click', selecionarCor);

const pintar = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((element) => {
    element.addEventListener('click', (event) => {
      const evento = event;
      const pixels2 = document.querySelectorAll('.pixel');
      const colorArray = [];
      const elementoSelected = document.querySelector('.selected');
      const corSelected = window.getComputedStyle(elementoSelected).backgroundColor;
      evento.target.style.backgroundColor = corSelected;
      for (let i = 0; i < pixels2.length; i += 1) {
        const cor = window.getComputedStyle(pixels2[i]).backgroundColor;
        colorArray.push(cor);
      }
      localStorage.setItem('pixelBoard', JSON.stringify(colorArray));
    });
  });
};

pintar();

const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#FFFFFF';
  }
};

clearButton.addEventListener('click', clearBoard);

const localBoard = () => {
  const coresLocal = JSON.parse(localStorage.getItem('pixelBoard'));
  const pixels = document.querySelectorAll('.pixel');
  if (coresLocal !== null) {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = coresLocal[i];
    }
  }
};

localBoard();
