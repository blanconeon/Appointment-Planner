import React from "react";
import  {ContactPicker}  from "../../components/contactPicker/ContactPicker";


const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
     <input 
      type="text"
      aria-label="appointment title"
      placeholder="Appointment Title"
      value={title}
      onChange={e => setTitle(e.target.value)}
     />

     <input 
      type="date"
      aria-label="date"
      placeholder="Date"
      value={date}
      min={getTodayString()}
      onChange={e => setDate(e.target.value)}
     />

     <input 
      type="time"
      aria-label="time"
      value={time}
      onChange={e => setTime(e.target.value)}
     />
    
     <ContactPicker value={contact} contacts={contacts} onChange={e => setContact(e.target.value)}
     name="contact" />

    <button type="submit" aria-label="Submit"> Submit
    </button>

    </form>
    </>
  );
};


/* The function is actually being passed down to `ContactPicker` as a prop. Here’s what happens:

- In `AppointmentForm`, you write `onChange={e => setContact(e.target.value)}` when rendering `ContactPicker`.
- This means the `ContactPicker` component receives a prop called `onChange`, which is a function.
- Inside `ContactPicker`, the `<select>` element uses this function as its `onChange` handler.
- When a user selects an option, the function runs, updating the parent’s state.

So, you are passing a function as a prop, and it gets called when the user interacts with the dropdown rendered by `ContactPicker`. This is a common React pattern.

Correct. The `name` prop is just a label you are declaring and giving the value `"contact"` when you call the component:

```jsx
<ContactPicker
  ...
  name="contact"
/>
```

You have not defined it elsewhere. It is simply a prop that gets passed to `ContactPicker`, which can then use it for the `name` attribute of the `<select>` element. This helps identify the field, especially in forms or for accessibility.


*/