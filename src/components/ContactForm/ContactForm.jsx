import css from "./ContactForm.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleContactForm = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm(); //очищає форму після відправки
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short").max(50, "Too Long").required(),
    number: Yup.string().min(3, "Too Short").max(50, "Too Long").required(),
  });
  return (
    <>
      <Formik
        validationSchema={contactSchema}
        initialValues={{ name: "", number: "" }}
        onSubmit={handleContactForm}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.formlabel}>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={css.formInput}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.schemaName}
            />
          </label>
          <label htmlFor="number" className={css.formlabel}>
            <Field
              type="text"
              name="number"
              id="number"
              placeholder="Number"
              className={css.formInput}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.schemaNumber}
            />
          </label>
          <button type="submit" className={css.formButton}>
            Save
          </button>
        </Form>
      </Formik>
    </>
  );
}
