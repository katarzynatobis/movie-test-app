import React, { useState, createContext } from "react";
import styles from "./App.module.scss";
import Header from "../Header/Header";

export const SearchContext = createContext<{
  value?: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
}>({ value: undefined, setValue: () => {} });

const App: React.FC = () => {
  const [searchState, setSearchState] = useState<string | undefined>(undefined);
  return (
    <SearchContext.Provider
      value={{
        value: searchState,
        setValue: ev => setSearchState(ev.target.value)
      }}
    >
      <div className={styles.App}>
        <Header />
      </div>
    </SearchContext.Provider>
  );
};

export default App;
