import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  return (
    <>
    <form onSubmit={handleSubmit} >
  
    <input
      type="text"
      aria-label="Name"
      placeholder="Name"
      value={name}
      onChange={e => setName(e.target.value)} // every time the user types, setName is called with the actual value from the input field

    />

    {isDuplicate && <p style={{color: 'red'}}>Name already exists!</p>}
    <input 
      type='text'
      aria-label='phone'
      placeholder='Phone'
      value={phone}
      pattern="(?:\+61|0)[2-478]\d{8}"
      title="Enter an Australian mobile number (0412345678 or +61412345678)"//The pattern attribute only prevents form submission if the input does not match the regex
      required
      onChange={e => setPhone(e.target.value)}
    />

    <input 
      type='text'
      aria-label='email'
      placeholder='Email'
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
    <button type="submit" aria-label="Submit"> Submit
    </button>
  
</form>
    
    
    </>
  );
};

