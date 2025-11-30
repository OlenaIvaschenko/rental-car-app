"use client"

import css from "./BookForm.module.css"
import toast from 'react-hot-toast';



const BookForm = () => {

const notify = () => toast('You have successfully booked a rental car!');
    const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData);
    console.log(values);
    }
 
  return (

    <>
    <h2 className={css.header}>Book your car now</h2>
<p className={css.text}>Stay connected! We are always ready to help you.</p>
    <form action={handleSubmit}>
      <label>
        <input type="text" name="Name" placeholder="Name*" />
      </label>

      <label>
        <input type="text" name="Email" placeholder="Email*" />
      </label>

      <label>
        <input type="text" name="Booking date" placeholder="Booking date" />
      </label>

      <label>
        Content
        <textarea name="content" placeholder="Comment"></textarea>
      </label>

      <div>
        <button type="submit">Create</button>
        <button type="button" onClick={notify}>Send</button>
      </div>
    </form>
    </>
  );
 };
export default BookForm;

