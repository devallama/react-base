import React from 'react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ThemeProvider } from 'styled-components';
import theme from 'Theme';
import GlobalStyle from 'Global/Global.styled';

export const decorators = [
    Story => (
        <ThemeProvider theme={theme('default')}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    ),
];

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
        values: [
            { 
                name: 'white', 
                value: '#ffffff' 
            },
            {
                name: 'black',
                value: '#000000'
            }
        ]
    }
};