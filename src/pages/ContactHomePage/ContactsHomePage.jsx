import { NavLink } from "react-router-dom";
import css from "./ContactsHomePage.module.css";
import { RiResetRightLine } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { isLogged } from "../../redux/auth/selectors";

export default function ContactsHomePage() {
  const isLoggedIn = useSelector(isLogged);
  return (
    <div className={css.container}>
      <h1 className={css.header}>Your Personal Contact Book</h1>
      <p className={css.textHome}>
        Organize and access your contacts anytime, anywhere.
      </p>
      {isLoggedIn ? (
        <NavLink to="/contactslist" className={css.buttonBooks}>
          Contact Book
        </NavLink>
      ) : (
        <NavLink to="/register" className={css.buttonGetStart}>
          Get Started
        </NavLink>
      )}

      <div className={css.listbox}>
        <p className={css.boxtext}>
          <RiResetRightLine className={css.icon} />
          Simple contact management
        </p>
        <p className={css.boxtext}>
          <GrSecure className={css.icon} />
          Secure could sync
        </p>
        <p className={css.boxtext}>
          <FaMagnifyingGlass className={css.icon} />
          Easy search & filtering
        </p>
      </div>
    </div>
  );
}
