import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addDataToContacts }) => { // <=props by destructuring
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isduplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    
if (isduplicate === false) {
   addDataToContacts(name, phone, email);
   setName('');
   setPhone('');
   setEmail(''); 
  
  }; 
    

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
   function checkDuplicateNameUi() {
    if(contacts.some(c => c.name === name)){
      setIsDuplicate(true)
    } else {
      setIsDuplicate(false);
    }
  }

  checkDuplicateNameUi();
}, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} handleSubmit={handleSubmit} isDuplicate={isduplicate}  /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts}/>
      </section>
    </div>
  );
};
