import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/authSelectors"
import { NavLinkStyled } from "./Navigation.styled";



export const Navigation = () => {

    // checking on isLoggedIn. If true, need to show both HomePage Link and Contacts Link. If not, renders only HomePage Link. 
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            {isLoggedIn && (
                <NavLinkStyled to="/contacts">Your Personal Contacts</NavLinkStyled>
            )}
        </nav>
    )
}