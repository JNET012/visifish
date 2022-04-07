import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarWrapper = styled(Paper)`
  &.MuiPaper-root {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: red!important;
  }
`

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  const gotoTab = (ev, newTab) => {
    setValue(newTab)
    switch (newTab) {
      case 0:
        navigate('/')
        break;

      case 1:
        navigate('/browse')
        break;

      default:
        break;
    }
  }

  return (
    <NavbarWrapper elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={gotoTab}
        sx={{backgroundColor: 'grey'}}
      >
        <BottomNavigationAction label="Summary" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Browse" icon={<ViewModuleIcon />} />
      </BottomNavigation>
    </NavbarWrapper>
  );
}
