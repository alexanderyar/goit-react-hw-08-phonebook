import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/authSelectors"
import { NavLinkStyled } from "./Navigation.styled";
//mui icon import;
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';



export const Navigation = () => {

    // checking on isLoggedIn. If true, need to show both HomePage Link and Contacts Link. If not, renders only HomePage Link. 
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLinkStyled to="/"><HomeIcon fontSize="small" />Home</NavLinkStyled>
            {isLoggedIn && (
                <NavLinkStyled to="/contacts"><ImportContactsIcon fontSize="small" />Contacts</NavLinkStyled>
            )}
        </nav>
    )
}