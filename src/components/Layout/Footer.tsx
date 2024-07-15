import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const SolidFooterBox = styled(Box)`
  background-color: #dc004e; // Secondary color
  color: white;
  text-align: center;
  padding: 16px 0;
`;

/**
 * Renders a footer component with a copyright message, the name of the author, and a LinkedIn profile link.
 *
 * @return {JSX.Element} The rendered footer component.
 */
const Footer: React.FC = () => {
    return (
        <SolidFooterBox component="footer" sx={{ mt: 'auto' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" align="center" gutterBottom>
                    &copy; 2024 FullTruck. All rights reserved.
                </Typography>
                <Typography variant="body2" align="center">
                    by Alessio Taranto
                </Typography>
                <Typography variant="body2" align="center">
                    <Link href="https://www.linkedin.com/in/alessio-taranto-58a118230/" color="inherit" target="_blank" rel="noopener noreferrer">
                        Connect with me on LinkedIn
                    </Link>
                </Typography>
            </Container>
        </SolidFooterBox>
    );
};

export default Footer;
