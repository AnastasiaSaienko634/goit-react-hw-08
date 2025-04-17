import css from "./RegisterPage.module.css";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import { BiEditAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.header}>Create Account </h1>
        <RegisterForm />
        <p className={css.textlogin}>
          Alredy have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </>
  );
}
