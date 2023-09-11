import './style.css';

const COLOR_PALETTE = {
  '#072AC8': 'Persian Blue',
  '#1E96FC': 'Dodger Blue',
  '#A2D6F9': 'Uranian Blue',
  '#FCF300': 'Cadmium Yellow',
  '#FFC600': 'Mikado Yellow',
  '#F9D7AE': 'Peach Yellow',
  '#F9242B': 'Torch Red',
  '#FF4D4F': 'Sunset Orange',
  '#26A699': 'Jungle Green',
  '#000000': 'Black'
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');

  colorPickerSelect.addEventListener('change', (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    document.body.style.transition = 'all 0.5s ease-in-out';
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.style.color = newColor;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : 'White | #FFFFFF';
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
