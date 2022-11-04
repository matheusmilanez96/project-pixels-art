const randomColors = () => {
  let randomButton = document.querySelector('#button-random-color');
  let color = document.querySelectorAll('.color');

  randomButton.addEventListener('click', () => {
    const cores = [];
    for (let i = 0; i <= 2; i += 1) {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      /**Source:https://css-tricks.com/snippets/javascript/random-hex-color/ */
      cores.push(`#${randomColor}`);
    }
    for (let i = 1; i < color.length; i += 1) {
      color[i].style.backgroundColor = cores[i - 1];
    }
  });
}
  
randomColors();