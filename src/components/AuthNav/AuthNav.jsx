import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <>
      <div className={css.authLinks}>
        <NavLink to="/register" className={css.authlink}>
          Register
        </NavLink>
        <NavLink to="/login" className={css.authlink}>
          Login
        </NavLink>
      </div>
    </>
  );
}
