
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledHeaderAppBar } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
    
    // checking in redux state if user isLoggedIn
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <StyledHeaderAppBar>
            <Navigation />
            {!isLoggedIn ? <AuthNav/> : <UserMenu/> }
        </StyledHeaderAppBar>
    )
}
