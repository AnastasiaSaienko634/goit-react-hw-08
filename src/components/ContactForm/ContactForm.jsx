import css from "./ContactForm.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";

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
            Name
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Anasatasia Saienko"
              className={css.formInput}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.schemaName}
            />
          </label>
          <label htmlFor="number" className={css.formlabel}>
            Number
            <Field
              type="text"
              name="number"
              id="number"
              placeholder="+380 "
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
