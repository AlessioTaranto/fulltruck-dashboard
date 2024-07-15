import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

/**
 * Renders the Overview component.
 *
 * @return {ReactElement} The rendered Overview component.
 */
const Overview: React.FC = () => {
    return (
        <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
                Overview
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PeopleIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                        <Box>
                            <Typography variant="h4">100</Typography>
                            <Typography variant="subtitle1">Active Carriers</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <BusinessIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                        <Box>
                            <Typography variant="h4">150</Typography>
                            <Typography variant="subtitle1">Active Clients</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AttachMoneyIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                        <Box>
                            <Typography variant="h4">$200,000</Typography>
                            <Typography variant="subtitle1">Total Revenue</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Overview;
