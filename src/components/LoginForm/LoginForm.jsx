import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleRegisterForm = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
  };
  const authSchema = Yup.object().shape({
    email: Yup.string().min(6, "Too Short").max(50, "Too Long").required(),
    password: Yup.string().min(8, "Too Short").max(50, "Too Long").required(),
  });
  return (
    <>
      <Formik
        validationSchema={authSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleRegisterForm}
      >
        <Form className={css.form}>
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
              Log In
            </button>
          </label>
        </Form>
      </Formik>
    </>
  );
}
