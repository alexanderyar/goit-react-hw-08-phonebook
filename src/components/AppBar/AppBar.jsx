
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledHeaderAppBar } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';





// export const AppBar = () => {
    
//     // checking in redux state if user isLoggedIn
//     const isLoggedIn = useSelector(selectIsLoggedIn);

//     return (
//         <StyledHeaderAppBar>
//             <Navigation />
//             {!isLoggedIn ? <AuthNav/> : <UserMenu/> }
//         </StyledHeaderAppBar>
//     )
// }

export const  AppBarComponent =() => {
  
     const isLoggedIn = useSelector(selectIsLoggedIn);


  return (
      // using MUI AppBar
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <StyledHeaderAppBar>
           <Navigation />
            {!isLoggedIn ? <AuthNav/> : <UserMenu/> }
        </StyledHeaderAppBar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}