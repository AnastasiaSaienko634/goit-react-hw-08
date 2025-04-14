import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { IoLogInOutline } from "react-icons/io5";

export default function LoginPage() {
  return (
    <>
      <div className={css.container}>
        <h1>
          Login <IoLogInOutline className={css.icon} />
        </h1>
        <LoginForm />
      </div>
    </>
  );
}
