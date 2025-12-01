"use client";

import css from "./BookForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const BookForm = () => {
  const notify = () => toast("You have successfully booked a rental car!");
  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData);
    console.log(values);
  };

  return (
    <div className={css.bookContainer}>
      <div className={css.titleContainer}>
        <h2 className={css.text}>Book your car now</h2>
        <p className={css.supportingText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form action={handleSubmit} className={css.form}>
        <input className={css.input} type="text" name="Name" placeholder="Name*" />

        <input className={css.input} type="text" name="Email" placeholder="Email*" />

        <input className={css.input} type="text" name="Booking date" placeholder="Booking date" />

        <textarea className={css.textarea} name="content" placeholder="Comment"></textarea>

        
          <button className ={css.button} type="button" onClick={notify}>
            Send
          </button>
          <Toaster/>
        
      </form>
    </div>
  );
};
export default BookForm;
