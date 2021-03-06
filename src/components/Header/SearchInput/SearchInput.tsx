import React, { useContext } from "react";
import styles from "./SearchInput.module.scss";
import { SearchContext } from "../../App/App";
import SearchIcon from "../../../assets/images/SearchIcon";

const SearchInput: React.FC = () => {
  const { value, setValue } = useContext(SearchContext);
  return (
    <div className={styles.container}>
      <div className={styles.absoluteWrapper}>
        <input
          className={styles.searchInput}
          placeholder="Find your match..."
          value={value}
          onChange={setValue}
        />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
