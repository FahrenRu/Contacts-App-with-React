import React, {useEffect, useState} from 'react'
import List from './List/index'
import Form from './Form'

function Contacts(){
    const [contacts, setContacts] = useState([
        {
            fullname: "Emir",
            phone_number: 123123,
        },
        {
            fullname: "Ayşe",
            phone_number: 413412,
        },
        {
            fullname: "Nazlı",
            phone_number: 962851
        }
    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;