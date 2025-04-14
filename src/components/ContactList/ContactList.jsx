import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList({}) {
  const visiableConacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handeleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={css.listContact}>
        {visiableConacts.map((el) => (
          <li key={el.id} className={css.boxContact}>
            <Contact
              name={el.name}
              number={el.number}
              id={el.id}
              handeleDeleteContact={() => handeleDeleteContact(el.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
