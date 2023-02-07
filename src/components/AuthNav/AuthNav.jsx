import { NavLinkStyled } from "components/Navigation/Navigation.styled"
// mui icon;
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthNavStyled } from "./AuthNav.styled";

export const AuthNav = () => {

    return (
        <AuthNavStyled>
        <NavLinkStyled to="/register"><PersonIcon fontSize="small" />I'm new</NavLinkStyled>
        <NavLinkStyled to="/login"><AccountCircleIcon fontSize="small" />Sign In</NavLinkStyled>
    </AuthNavStyled>
)
}