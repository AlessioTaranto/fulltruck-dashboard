import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import GradientLineBar from './GradientLineBar';
import Header from './Header';

/**
 * Renders the layout component with a header, main content area, footer, and gradient line bars.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the main content area.
 * @return {JSX.Element} The rendered layout component.
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <GradientLineBar position="header" />
            <Header />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </Box>
            <Footer />
            <GradientLineBar position="footer" />
        </Box>
    );
};

export default Layout;
