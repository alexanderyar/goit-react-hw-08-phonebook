import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
display: inline-block;
text-decoration: none;
.active {
color: #e84a5f;
}
`