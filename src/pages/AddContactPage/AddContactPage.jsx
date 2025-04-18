import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./AddContactPage.module.css";

export default function AddContactPage() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.header}>Add Contact </h1>
        <ContactForm className={css.form} />
      </div>
    </>
  );
}
