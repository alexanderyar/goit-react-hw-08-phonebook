import styled from 'styled-components'
import { Form, Field } from 'formik';
import { Button } from '@mui/material';


export const ButtonStyled = styled(Button)`

`
    

export const FormStyled = styled(Form)`

display:flex;
flex-direction: column;
border: 1px solid black;
padding: 10px;
// background: rgb(9,10,121);
// color:white;
  align-items: center;
`

export const Input = styled(Field)`
margin-right:15px;

font-size:18;
font-weight:700;
color:black;
margin-bottom:10px;
`



// padding-left: 15px; 
// padding-right: 15px;
// background-color: violet;