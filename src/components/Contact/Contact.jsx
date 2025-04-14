import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { AiOutlineUserDelete } from "react-icons/ai";

export default function Contact({ name, number, handeleDeleteContact, id }) {
  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.text}>
          <IoPerson className={css.iconPerson} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.iconPhone} />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          handeleDeleteContact(id);
        }}
        className={css.buttonContact}
      >
        Delete <AiOutlineUserDelete />
      </button>
    </>
  );
}
