import React, { useContext } from "react";
import styles from "./SearchInput.module.scss";
import { SearchContext } from "../../App/App";
import { ReactComponent as SearchIcon } from "../../../assets/search-solid.svg"

const SearchInput: React.FC = () => {
  const { value, setValue } = useContext(SearchContext);
  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        placeholder="Find your match..."
        value={value}
        onChange={setValue}
      />
      <div className={styles.searchIcon}><SearchIcon /></div>
    </div>
  );
};

export default SearchInput;
