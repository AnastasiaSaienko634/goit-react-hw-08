import css from "./ContactListPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { IoMdPeople } from "react-icons/io";
export default function ContactListPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={css.container}>
        <h1 className={css.haeder}>
          Your Contacts <IoMdPeople className={css.icons} />
        </h1>
        <SearchBox />
        {loading && !error && (
          <p className={css.loader}>Requiest in progress...</p>
        )}
        {error ? (
          <p className={css.errorMessaga}>
            Whoops... something is wrong, please reset your Web Page.
          </p>
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
}
