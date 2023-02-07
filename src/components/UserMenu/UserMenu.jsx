import { useDispatch, useSelector } from "react-redux"
import { selectUserEmail } from "redux/auth/authSelectors"
import { GreetingStyled, LogOutButtonStyled, UserMenuContainer } from "./UserMenu.styled"
import { logOutThunkOperation } from "redux/auth/authOperations"



export const UserMenu = () => {
 
    const currentUserEmail = useSelector(selectUserEmail)
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(logOutThunkOperation())
    }
    return (
        <UserMenuContainer>
            <GreetingStyled>{currentUserEmail}</GreetingStyled>

            {/* later add dispatch onClick (LogOut) */}
            <LogOutButtonStyled variant="contained" onClick={() => { handleClick() }}>Logout</LogOutButtonStyled>
        </UserMenuContainer>
    )
}

// <Button variant="contained">Contained</Button>