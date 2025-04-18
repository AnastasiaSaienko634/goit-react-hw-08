import css from "./UserMenu.module.css";
import { username } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(username);
  const handleClick = () => {
    dispatch(logout());

    navigate("/");
  };
  return (
    <>
      <div className={css.container}>
        <p className={css.name}>
          <BiSolidUser className={css.icon} />
          {name}
        </p>
        <button className={css.buttonLogout} onClick={() => handleClick()}>
          <IoIosLogOut className={css.logoutIcon} />
        </button>
      </div>
    </>
  );
}
