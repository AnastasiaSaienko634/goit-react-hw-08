import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { AiOutlineUserDelete } from "react-icons/ai";

export default function Contact({ name, number, handeleDeleteContact, id }) {
  return (
    <>
      <IoPerson className={css.iconPerson} />
      <div className={css.contactInfo}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button
        onClick={() => {
          handeleDeleteContact(id);
        }}
        className={css.buttonContact}
      >
        Delete
      </button>
    </>
  );
}
