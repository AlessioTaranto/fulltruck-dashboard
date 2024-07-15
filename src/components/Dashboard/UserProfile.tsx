import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const UserProfileBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
`;

const UserInfoBox = styled(Box)`
  margin-left: 20px;
`;

/**
 * Renders the user profile component.
 *
 * @return {ReactElement} The rendered user profile component.
 */
const UserProfile: React.FC = () => {
  return (
    <UserProfileBox>
      <Avatar alt="User Name" src="https://via.placeholder.com/150" sx={{ width: 100, height: 100 }} />
      <UserInfoBox>
        <Typography variant="h5">John Doe</Typography>
        <Typography variant="subtitle1" >Logistics Manager</Typography>
      </UserInfoBox>
    </UserProfileBox>
  );
};

export default UserProfile;
