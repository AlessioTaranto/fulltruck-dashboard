import { Grid } from '@mui/material';
import React from 'react';
import { Statistics } from '../../types/statistics';
import KPI from './KPI';

interface KPIsProps {
    data: Statistics;
}

/**
 * Renders a grid of KPI (Key Performance Indicator) components.
 *
 * @param {KPIsProps} data - The data object containing KPI values.
 * @return {JSX.Element} The rendered grid of KPI components.
 */
const KPIs: React.FC<KPIsProps> = ({ data }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <KPI title="Active Clients" value={data.kpis.active_client ?? 0} trend="up" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <KPI title="Active Carriers" value={data.kpis.active_carrier ?? 0} trend="down" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <KPI title="Assigned Count" value={data.kpis.assigned_count ?? 0} trend="up" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <KPI title="Order Count" value={data.kpis.order_count ?? 0} trend="down" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <KPI title="Revenue" value={`$${(data.kpis.revenue ?? 0).toLocaleString()}`} trend="up" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <KPI title="Revenue Assigned" value={`$${(data.kpis.revenue_assigned ?? 0).toLocaleString()}`} trend="up" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <KPI title="Margin Abs" value={`$${(data.kpis.margin_abs ?? 0).toLocaleString()}`} trend="up" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <KPI title="Margin %" value={`${(data.kpis.margin_perc ?? 0).toFixed(2)}%`} trend="down" />
            </Grid>
        </Grid>
    );
};

export default KPIs;
