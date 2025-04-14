import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { isLogged } from "../../redux/auth/selectors";
import { BiSolidContact } from "react-icons/bi";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

export default function Navigation() {
  const isLoggedIn = useSelector(isLogged);
  return (
    <>
      <nav className={css.linksList}>
        <div className={css.links}>
          <NavLink to="/" className={css.link}>
            <AiOutlineHome className={css.icons} />
          </NavLink>

          {isLoggedIn && (
            <div className={css.contactsLinks}>
              <NavLink to="/contactslist" className={css.link}>
                <BiSolidContact className={css.icons} />
              </NavLink>
              <NavLink to="/addcontact" className={css.link}>
                <IoPersonAddSharp className={css.icons} />
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
