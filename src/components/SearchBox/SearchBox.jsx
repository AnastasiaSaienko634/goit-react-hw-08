import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const setSearchContact = (event) => {
    const searchQuery = event.target.value;
    dispatch(changeFilter(searchQuery));
  };

  return (
    <div className={css.searchBoxContent}>
      <label htmlFor="searchBox">
        <input
          className={css.searchBox}
          type="text"
          id="searchBox"
          onChange={setSearchContact}
          placeholder="Search contact by name.."
        />
      </label>
    </div>
  );
}
