import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const WelcomeBox = styled(Box)`
  text-align: center;
  margin: 20px 0;
`;

/**
 * Renders a welcome message component with a waving hand icon, a heading, and a subheading.
 *
 * @return {ReactElement} The rendered welcome message component.
 */
const WelcomeMessage: React.FC = () => {
    return (
        <WelcomeBox>
            <WavingHandIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" gutterBottom>
                Welcome John :)
            </Typography>
            <Typography variant="h6" gutterBottom>
                Your all-in-one solution to manage your logistics efficiently.
            </Typography>
        </WelcomeBox>
    );
};

export default WelcomeMessage;
