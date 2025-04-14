import css from "./RegisterPage.module.css";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import { BiEditAlt } from "react-icons/bi";

export default function RegisterPage() {
  return (
    <>
      <div className={css.container}>
        <h1>
          Registration <BiEditAlt className={css.icon} />
        </h1>
        <RegisterForm />
      </div>
    </>
  );
}
