import css from "./AppBar.module.css";
import { isLogged } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  const isLoggedIn = useSelector(isLogged);
  return (
    <>
      <div className={css.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </>
  );
}
