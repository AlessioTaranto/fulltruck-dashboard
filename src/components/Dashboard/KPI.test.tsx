import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import KPI from './KPI';

describe('KPI Component', () => {
    const theme = createTheme();

    test('renders with title and value', () => {
        render(
            <ThemeProvider theme={theme}>
                <KPI title="Test Title" value={100} trend="up" />
            </ThemeProvider>
        );
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });

    test('renders up trend icon', () => {
        render(
            <ThemeProvider theme={theme}>
                <KPI title="Revenue" value={1000} trend="up" />
            </ThemeProvider>
        );
        expect(screen.getByTestId('trending-up-icon')).toBeInTheDocument();
    });

    test('renders down trend icon', () => {
        render(
            <ThemeProvider theme={theme}>
                <KPI title="Revenue" value={1000} trend="down" />
            </ThemeProvider>
        );
        expect(screen.getByTestId('trending-down-icon')).toBeInTheDocument();
    });
});
