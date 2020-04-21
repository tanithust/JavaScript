import React from 'react'
import ContactItem from './ContactItem'
import ContactData from './ContactData'
function ContactList(){
    const ContactComponents = ContactData.map(infor => 
        <ContactItem key={infor.id} imgURL={infor.imgURL} name={infor.name} team={infor.team} nationality={infor.nationality} />
    )
    return (
        <div>
            {ContactComponents} 
        </div>
    )
    
}
export default ContactList