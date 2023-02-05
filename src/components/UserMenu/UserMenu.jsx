import { useSelector } from "react-redux"
import { selectUserEmail } from "redux/auth/authSelectors"
import { UserMenuContainer } from "./UserMenu.styled"


export const UserMenu = () => {
 
    const currentUserEmail = useSelector(selectUserEmail)
    return (
        <UserMenuContainer>
            <p>Hello, ${currentUserEmail}</p>

            {/* later add dispatch onClick (LogOut) */}
            <button>Logout</button>
        </UserMenuContainer>
    )
}