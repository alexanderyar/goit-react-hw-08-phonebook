import { Header } from "components/Phonebook/Contacts/Contacts.styled";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { logInUserThunkOperation } from "redux/auth/authOperations";
import { LogInField, LogInForm, LogInLabel, LogInSubmit } from "./LoginForm.styled";
// import {  } from "redux/auth/authOperations"; додати операцію на логІн 


const initialValues = {
    
    email: '',
    password: ''
}
   
export const LoginFormikForm = ({ handleSubmit }) => {

    const dispatch = useDispatch();
    
     

    
    
handleSubmit = (values, {resetForm}) => {
        
    console.log(values)

    dispatch(logInUserThunkOperation(values))
    resetForm();
}
    
     
  

    return (
        <>
           <Header>Please enter your email and password</Header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
             <LogInForm autoComplete='off'>
            

                <LogInLabel htmlFor="email">
                   email:
                    <LogInField
  type="email"
  name="email"
//   pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
  title="the system is waiting for your valid e-mail"
  required
/>
                    </LogInLabel>
                    
                             <LogInLabel htmlFor="password">
                   password:
                    <LogInField
  type="password"
  name="password"
  pattern=".{8,}"
  title="Eight or more characters"
  required
/>
               </LogInLabel>
            
                <LogInSubmit  variant="outlined" type="submit">Submit</LogInSubmit>
      
 

        
        </LogInForm>
            </Formik>
        </>
    )
}