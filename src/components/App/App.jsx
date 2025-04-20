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
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<ContactsHomePage />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contactslist"
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contactslist"
                />
              }
            />
            <Route
              path="/contactslist"
              element={
                <PrivateRoute
                  component={<ContactsListPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="/addcontact"
              element={
                <PrivateRoute
                  component={<AddContactPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route path="*" element={<ContactsHomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
