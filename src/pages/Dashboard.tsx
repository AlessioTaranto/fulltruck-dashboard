import FilterListIcon from '@mui/icons-material/FilterList';
import { Container, Fab, Grid, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FilterDialog from '../components/Dashboard/FiltersDialog';
import KPIs from '../components/Dashboard/KPIs';
import Overview from '../components/Dashboard/Overview';
import Statistics from '../components/Dashboard/Statistics';
import WelcomeMessage from '../components/Dashboard/WelcomeMessage';
import useStatistics from '../hooks/useStatistics';
import '../styles/gradientSkeleton.css'; // Import the custom CSS
import { Statistics as StatisticsType } from '../types/statistics';

/**
 * Renders the Dashboard component.
 *
 * @return {React.ReactElement} The rendered Dashboard component.
 */
const Dashboard: React.FC = () => {
    const data = useStatistics();
    const [filteredData, setFilteredData] = useState<StatisticsType | null>(null);
    const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);

    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    const handleOpenFilterDialog = () => {
        setFilterDialogOpen(true);
    };

    const handleCloseFilterDialog = () => {
        setFilterDialogOpen(false);
    };

    if (!data || !filteredData) {
        return (
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Skeleton variant="rectangular" width="100%" height={80} className="gradient-skeleton" />
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton variant="rectangular" width="100%" height={200} className="gradient-skeleton" />
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton variant="rectangular" width="100%" height={200} className="gradient-skeleton" />
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton variant="rectangular" width="100%" height={400} className="gradient-skeleton" />
                    </Grid>
                </Grid>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg">
            <WelcomeMessage />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Overview />
                </Grid>
                <Grid item xs={12}>
                    <Statistics data={filteredData} />
                </Grid>
                <Grid item xs={12}>
                    <KPIs data={filteredData} />
                </Grid>
            </Grid>
            <Fab color="primary" aria-label="filter" sx={{ position: 'fixed', bottom: 16, right: 16 }} onClick={handleOpenFilterDialog}>
                <FilterListIcon />
            </Fab>
            <FilterDialog open={isFilterDialogOpen} onClose={handleCloseFilterDialog} data={data} setFilteredData={setFilteredData} />
        </Container>
    );
};

export default Dashboard;
