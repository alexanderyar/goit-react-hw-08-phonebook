import { ListItem } from "./Contacts.styled"
import { Trash } from 'grommet-icons';



export const ContactsList = ({filteredContacts, onDeleteClick}) => {

    return (
        <>
        {filteredContacts.map(({ name, id, number }) => (
                    <ListItem key={id}><p>{name}: {number}</p><button type="button" onClick={() => onDeleteClick(id)}>  <Trash size="15px"/></button></ListItem>
                    
                ))}</>
    )
}