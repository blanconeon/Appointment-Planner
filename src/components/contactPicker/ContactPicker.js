import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {




  
  return (
    <>
    <label htmlFor="contacts">Contacts:</label>

    <select id="contacts" name={name} value={value} onChange={onChange}>
    <option value="">No Contact Selected</option>
     {contacts.map((contact, index) => {
        return <option key={index} value={contact.name}>{contact.name}</option>
       })}
    </select>
    
    
    </>
  );
};
