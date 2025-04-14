import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./AddContactPage.module.css";
import { IoMdPersonAdd } from "react-icons/io";
export default function AddContactPage() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.header}>
          Add New Contact <IoMdPersonAdd className={css.icon} />
        </h1>
        <ContactForm className={css.form} />
      </div>
    </>
  );
}
