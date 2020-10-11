import defaultTheme from './default';

const themes = {
    default: defaultTheme
};

export default themeName => themes[themeName] || themes.default;
