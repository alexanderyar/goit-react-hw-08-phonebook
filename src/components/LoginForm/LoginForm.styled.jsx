import styled from 'styled-components'
import { Field, Form } from 'formik'
import Button from '@mui/material/Button';



export const LogInField = styled(Field)`
width:100%;
`

export const LogInForm = styled(Form)`
display:flex;
flex-direction:column;
align-items:center;
`

export const LogInSubmit = styled(Button)`
width: 100px;
margin-top:15px;
`

export const LogInLabel = styled.label`
display:flex;
flex-direction:column;
margin-bottom:10px;`