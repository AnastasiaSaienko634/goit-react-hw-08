import css from "./PrivateRoute.module.css";
import { useSelector } from "react-redux";
import { isLogged } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(isLogged);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
