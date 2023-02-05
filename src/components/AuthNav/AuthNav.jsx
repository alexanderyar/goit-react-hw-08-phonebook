import { NavLinkStyled } from "components/Navigation/Navigation.styled"


export const AuthNav = () => {

    return (
        <nav>
        <NavLinkStyled to="/register">I'm new</NavLinkStyled>
        <NavLinkStyled to="/login">Sign In</NavLinkStyled>
    </nav>
)
}