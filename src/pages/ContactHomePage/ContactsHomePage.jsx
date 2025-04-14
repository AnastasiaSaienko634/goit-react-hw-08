import { NavLink } from "react-router-dom";
import css from "./ContactsHomePage.module.css";
export default function ContactsHomePage() {
  return (
    <div className={css.container}>
      <h1>Welocome to Contacts Book!</h1>
      <p className={css.textHome}>
        Here you can easily add, view, and delete contacts.
      </p>
      <p className={css.textHome}>
        Manage your contact list quickly and effortlessly — all in one place!
      </p>

      <p className={css.text}>
        -In the <span className={css.span}>Contact List</span> section, you can
        find a contact and also delete it if needed.
      </p>
      <p className={css.txet}>
        -In the <span className={css.span}>Add New Contact</span> section, you
        can add a new contact to your contacts list.
      </p>
    </div>
  );
}
