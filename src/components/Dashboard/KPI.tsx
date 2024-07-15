import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const GradientCard = styled(Card)(({ theme }: { theme: any }) => ({
    background: `${theme.palette.secondary.main}`,
    color: 'white',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    '&:hover': {
        boxShadow: theme.shadows[6],
    },
}));

const TitleBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ValueBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface KPIProps {
    title: string;
    value: number | string;
    trend: 'up' | 'down';
}

/**
 * Renders a KPI (Key Performance Indicator) card with a gradient background.
 *
 * @param {KPIProps} props - The props object containing the title, value, and trend of the KPI.
 * @param {string} props.title - The title of the KPI.
 * @param {number | string} props.value - The value of the KPI.
 * @param {'up' | 'down'} props.trend - The trend of the KPI ('up' or 'down').
 * @return {JSX.Element} The rendered KPI card.
 */
const KPI: React.FC<KPIProps> = ({ title, value, trend }) => {
    const theme = useTheme();

    return (
        <GradientCard>
            <CardContent>
                <TitleBox>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    {trend === 'up' ? (
                        <TrendingUpIcon fontSize="large" data-testid="trending-up-icon" />
                    ) : (
                        <TrendingDownIcon fontSize="large" data-testid="trending-down-icon" />
                    )}
                </TitleBox>
                <ValueBox>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        {value}
                    </Typography>
                </ValueBox>
            </CardContent>
        </GradientCard>
    );
};

export default KPI;
