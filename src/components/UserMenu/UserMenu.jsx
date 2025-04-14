import css from "./UserMenu.module.css";
import { username } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { PiFinnTheHuman } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(username);
  const handleClick = (event) => {
    dispatch(logout());
  };
  return (
    <>
      <div className={css.container}>
        <p className={css.name}>
          <PiFinnTheHuman className={css.icon} />
          {name}
        </p>
        <button className={css.buttonLogout} onClick={() => handleClick()}>
          <IoIosLogOut className={css.logoutIcon} />
        </button>
      </div>
    </>
  );
}
