import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleRegisterForm = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };
  const authSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short").max(20, "Too Long").required(),
    email: Yup.string().min(6, "Too Short").max(50, "Too Long").required(),
    password: Yup.string().min(8, "Too Short").max(20, "Too Long").required(),
  });
  return (
    <>
      <Formik
        validationSchema={authSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleRegisterForm}
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
              className={css.schemaNumber}
            />
          </label>
          <label htmlFor="email" className={css.formlabel}>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={css.formInput}
            ></Field>
            <ErrorMessage
              name="email"
              component="span"
              className={css.schemaNumber}
            />
            <label htmlFor="password" className={css.formlabel}>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className={css.formInput}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={css.schemaNumber}
              />
            </label>
            <button type="submit" className={css.formButton}>
              Confirm registration
            </button>
          </label>
        </Form>
      </Formik>
    </>
  );
}
