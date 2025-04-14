import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { IoIosPhonePortrait } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import { PiSmileySadThin } from "react-icons/pi";
import { Routes, Route, NavLink } from "react-router-dom";
import ContactsHomePage from "../../pages/ContactsHomePage/ContactsHomePage";
import ContactsListPage from "../../pages/ContactListPage/ContactsListPage";
import AddContactPage from "../../pages/AddContactPage/AddContactPage";
export default function App() {
  return (
    <>
      <div>
        <nav className={css.linksList}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/contactslist" className={css.link}>
            Contacts List
          </NavLink>
          <NavLink to="/addcontact" className={css.link}>
            Add New Contact
          </NavLink>
        </nav>

        <main className={css.mainContent}>
          <Routes>
            <Route path="/" element={<ContactsHomePage />} />
            <Route path="/contactslist" element={<ContactsListPage />} />
            <Route path="/addcontact" element={<AddContactPage />} />
            <Route path="*" element={<ContactsHomePage />} />
          </Routes>
        </main>
      </div>
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
