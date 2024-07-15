import FullTruckIcon from '@mui/icons-material/LocalShipping';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const SolidAppBar = styled(AppBar)`
  background-color: #1976d2; // Primary color
`;

const UserProfileBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

/**
 * Renders the header component of the application.
 *
 * @return {ReactElement} The rendered header component.
 */
const Header: React.FC = () => {
    return (
        <SolidAppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <FullTruckIcon fontSize="large" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FullTruck Dashboard
                    </Typography>
                    <UserProfileBox>
                        <Avatar alt="John Doe" src="https://via.placeholder.com/150" sx={{ width: 40, height: 40, mr: 1 }} />
                        <Box sx={{ textAlign: 'left', mr: 2 }}>
                            <Typography variant="subtitle1" sx={{ lineHeight: 1 }}>John Doe</Typography>
                            <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>Logistics Manager</Typography>
                        </Box>
                    </UserProfileBox>
                </Toolbar>
            </Container>
        </SolidAppBar>
    );
};

export default Header;
