import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { IoLogInOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.header}>Login </h1>
        <LoginForm />
        <p className={css.textlogin}>
          You don't have any account? <NavLink to="/register">Register</NavLink>
        </p>
      </div>
    </>
  );
}
