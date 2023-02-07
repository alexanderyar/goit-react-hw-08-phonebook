import { Header } from "components/Phonebook/Contacts/Contacts.styled";
import { FormStyled } from "components/Phonebook/Form/Form.styled";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createUserThunkOperation } from "redux/auth/authOperations";
import { InputContainer, RegisterInput, RegisterSubmit  } from "./RegisterForm.styled";




const initialValues = {
    name: '',
    email: '',
    password: ''
}
   
export const RegisterFormikForm = ({ handleSubmit }) => {

    const dispatch = useDispatch();
    
     

    
    
handleSubmit = (values, {resetForm}) => {
        
    console.log(values)

    dispatch(createUserThunkOperation(values))
    resetForm();
}
    
     
  

    return (
        <>
           <Header>Welcome, new User!</Header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
             <FormStyled autoComplete='off'>
                    <InputContainer>
                         <label htmlFor="name">
               Enter your name:
            <RegisterInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
                </label>

                <label htmlFor="email">
                   email:
                    <RegisterInput
  type="email"
  name="email"
//   pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
  title="the system is waiting for your valid e-mail"
  required
/>
                    </label>
                    
                             <label htmlFor="password">
                   password:
                    <RegisterInput
  type="password"
  name="password"
  pattern=".{8,}"
  title="Eight or more characters"
  required
/>
               </label>
           </InputContainer>
            
                <RegisterSubmit variant="contained" type="submit">Submit</RegisterSubmit>
      {/* <Button variant="contained" */}
 

        
        </FormStyled>
            </Formik>
        </>
    )
}