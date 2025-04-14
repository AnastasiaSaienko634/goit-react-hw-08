import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import ContactsHomePage from "../../pages/ContactHomePage/ContactsHomePage";
import ContactsListPage from "../../pages/ContactListPage/ContactsListPage";
import AddContactPage from "../../pages/AddContactPage/AddContactPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { isLogged } from "../../redux/auth/selectors";
import AppBar from "../AppBar/AppBar";
export default function App() {
  const isLoggedIn = useSelector(isLogged);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<ContactsHomePage />} />
        <Route path="/contactslist" element={<ContactsListPage />} />
        <Route path="/addcontact" element={<AddContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ContactsHomePage />} />
      </Routes>

      {/* <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/dashboard" component={LoginPage} />
        }
      /> */}
      {/* <div>
        <h1 className={css.header}>
          <IoIosPhonePortrait className={css.icon} />
          Your Phonebook...
        </h1>
        <ContactForm />
        <SearchBox />
        {loading && !error && (
          <p className={css.loader}>Requiest in progress...</p>
        )}
        {error ? (
          <p className={css.errorMessaga}>
            Whoops... something is wrong, please reset your Web Page.
            <PiSmileySadThin />
          </p>
        ) : (
          <ContactList />
        )}
      </div> */}
    </>
  );
}
