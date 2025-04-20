import { useSelector } from "react-redux";
import { isLogged } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(isLogged);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
