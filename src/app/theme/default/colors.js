import globalColors from '../globalColors';

export const colorsRGB = {
    ...globalColors,
    black: '0, 0, 0', // #000000
    white: '255, 255, 255' // #ffffff
};

const colors = {};

Object.keys(colorsRGB).forEach(key => (colors[key] = `rgb(${colorsRGB[key]})`));

export default colors;
