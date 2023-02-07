import { Phonebook } from "components/Phonebook/Phonebook"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { fetchContactsThunkOperation } from "redux/contacts/contactsOperations";



// export default function ContactsPage() {
  export default function ContactsPage() {
    const dispatch = useDispatch();


    // important! we fetch Contact in a ContactsPage! not in Contacts component
    useEffect(() => {

     dispatch(fetchContactsThunkOperation())
    }, [dispatch])

    return (
        <Phonebook />
    )
}