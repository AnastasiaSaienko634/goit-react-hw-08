import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegisterForm = (values, { resetForm }) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
    navigate("/");
    resetForm();
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
            Email
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className={css.formInput}
            ></Field>
            <ErrorMessage
              name="email"
              component="span"
              className={css.schemaNumber}
            />
            <label htmlFor="password" className={css.formlabel}>
              Password
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="your password"
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
