import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
margin-right:15px;
display: inline-block;
text-decoration: none;
font-size:24px;
font-weight:700;
color:white;
// border: 1px solid black;
border-radius: 4px;
border-color:grey;
padding:5px;
.active {
color: #e84a5f;

}
`