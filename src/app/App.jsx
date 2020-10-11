import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'Theme';
import Router from 'Routing/Router';
import GlobalStyle from 'Global/Global.styled';

const AppRoot = () => (
    <ThemeProvider theme={theme('default')}>
        <GlobalStyle />
        <Router />
    </ThemeProvider>
);

export default hot(AppRoot);
