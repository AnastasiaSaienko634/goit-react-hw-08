import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import ContactsHomePage from "../../pages/ContactHomePage/ContactsHomePage";
import ContactsListPage from "../../pages/ContactListPage/ContactsListPage";
import AddContactPage from "../../pages/AddContactPage/AddContactPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar";
import { Suspense, useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import Layout from "./../Layout/Layout";
export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p className={css.refresher}>Getting your user data, plaese wait...</p>
  ) : (
    <>
      <Suspense>
        <AppBar />
        <Routes>
          <Route path="/" element={<ContactsHomePage />} />
          <Route path="/contactslist" element={<ContactsListPage />} />
          <Route path="/addcontact" element={<AddContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ContactsHomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
