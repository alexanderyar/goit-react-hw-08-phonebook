import { Field } from 'formik'
import styled from 'styled-components'
import Button from '@mui/material/Button';


export const InputContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

export const RegisterInput = styled(Field)`
display:flex;
flex-direction:column;
`

export const RegisterSubmit = styled(Button)`
width: 100px;

`