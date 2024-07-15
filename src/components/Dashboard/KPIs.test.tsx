import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import KPIs from './KPIs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Statistics } from '../../types/statistics';

const mockData: Statistics = {
    data_table: [],
    histograms: {
        time_margin_perc: [],
        time_order_count: [],
        time_revenue: [],
    },
    kpis: {
        active_carrier: 120,
        active_client: 300,
        assigned_count: 180,
        order_count: 250,
        margin_abs: 5000,
        margin_abs_per_order: 20,
        margin_perc: 15,
        revenue: 100000,
        revenue_assigned: 80000,
    },
    scalars: {
        active_carrier: 120,
        active_client: 300,
        total_revenue: 100000,
        total_margin: 5000,
        total_order_count: 250,
        total_assigned_count: 180,
        new_carrier: 5,
        new_client: 10,
    },
};

describe('KPIs Component', () => {
    const theme = createTheme();

    test('renders all KPI components', () => {
        render(
            <ThemeProvider theme={theme}>
                <KPIs data={mockData} />
            </ThemeProvider>
        );
        expect(screen.getByText('Active Clients')).toBeInTheDocument();
        expect(screen.getByText('Active Carriers')).toBeInTheDocument();
        expect(screen.getByText('Assigned Count')).toBeInTheDocument();
        expect(screen.getByText('Order Count')).toBeInTheDocument();
        expect(screen.getByText('Revenue')).toBeInTheDocument();
        expect(screen.getByText('Revenue Assigned')).toBeInTheDocument();
        expect(screen.getByText('Margin Abs')).toBeInTheDocument();
        expect(screen.getByText('Margin %')).toBeInTheDocument();
    });
});
