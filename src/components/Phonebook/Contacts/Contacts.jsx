import React from 'react'

import PropTypes from 'prop-types'
import { Filter } from './Filter/Filter'
import { Header, ListWrapper } from './Contacts.styled'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContactThunkOperation } from 'redux/contacts/contactsOperations'
import { ContactsList } from './ContactsList'




export const Contacts =  () => {

    const dispatch = useDispatch();

    // moved to ContactsPage for test;
    // fetching contacts from backend;
    // useEffect(() => {
    //   dispatch(fetchContactsThunkOperation())
    // }, [dispatch])
    
     const contacts = useSelector(state => state.contacts.contacts);

   
    const filterLowered = useSelector(state => state.filter).toLowerCase()
    
    const CheckIfNeedToRenderContacts = (filterValue, contactsValue) => {
       console.log( contactsValue)
        if (contactsValue.length === 0) {
            return false;  
        }
     const filteredContacts = contacts.filter(contact =>
         contact.name.toLowerCase().includes(filterValue))
        return filteredContacts

    }
   
    const filteredContacts = CheckIfNeedToRenderContacts(filterLowered, contacts)
    console.log(filteredContacts)


// const filteredContacts = contacts.filter(contact =>
//        contact.name.toLowerCase().includes(filterLowered) )

    
    // refactored. now onDelete click has been transferred FROM Phonebook component. dispatch is used instead of useState to delete (using filter) chosen contact
 const onDeleteClick = (id) => {
        console.log(id)
     dispatch(deleteContactThunkOperation(id));
 }
//   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    
 
    return (

        <>
            <Header>Existing Contacts</Header>
            <Filter />
            <ListWrapper>
               
                {filteredContacts ?  <ContactsList filteredContacts={filteredContacts} onDeleteClick={onDeleteClick} />
     : <p>Add your first contact now!</p> }
             
              
            </ListWrapper>
        </>)
}
        

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            
        })),
    filterFunc: PropTypes.func,
    inputValue: PropTypes.string,
    onDeleteClick: PropTypes.func,
}
