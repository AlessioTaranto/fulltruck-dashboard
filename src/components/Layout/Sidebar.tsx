import DashboardIcon from '@mui/icons-material/Dashboard';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import '../../styles/sidebar.css';

/**
 * Renders the sidebar component with a permanent drawer containing a list of items.
 *
 * @return {ReactElement} The rendered sidebar component.
 */
const Sidebar: React.FC = () => {
    return (
        <Drawer variant="permanent" anchor="left" classes={{ paper: 'MuiDrawer-paper' }}>
            <List>
                <ListItem button>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                {/* Add more items here */}
            </List>
        </Drawer>
    );
};

export default Sidebar;
