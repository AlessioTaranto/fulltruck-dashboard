import { Box, Grid, Paper, Typography } from '@mui/material';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Statistics as StatisticsType } from '../../types/statistics';

// Register the components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface StatisticsProps {
    data: StatisticsType;
}

/**
 * Renders a component that displays statistics in the form of charts.
 *
 * @param {StatisticsProps} props - The props for the component.
 * @param {StatisticsType} props.data - The data to be displayed in the charts.
 * @return {JSX.Element} The rendered component.
 */
const Statistics: React.FC<StatisticsProps> = ({ data }) => {
    const ordersChartData = {
        labels: data.data_table.map(item => item.aggregate_date),
        datasets: [
            {
                label: 'Orders',
                data: data.data_table.map(item => item.order_count),
                fill: false,
                backgroundColor: '#1976d2',
                borderColor: '#1976d2',
                tension: 0.4,
            },
        ],
    };

    const revenueChartData = {
        labels: data.data_table.map(item => item.aggregate_date),
        datasets: [
            {
                label: 'Revenue',
                data: data.data_table.map(item => item.revenue),
                backgroundColor: '#1976d2',
            },
        ],
    };

    const marginsChartData = {
        labels: data.data_table.map(item => item.aggregate_date),
        datasets: [
            {
                label: 'Margins',
                data: data.data_table.map(item => item.margin_perc),
                backgroundColor: '#dc004e',
            },
        ],
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Orders Over Time
                    </Typography>
                    <Box>
                        <Line data={ordersChartData} />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Revenue Over Time
                    </Typography>
                    <Box>
                        <Bar data={revenueChartData} />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Margins Over Time
                    </Typography>
                    <Box>
                        <Bar data={marginsChartData} />
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Statistics;
