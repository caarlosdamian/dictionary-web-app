import searcIcon from "../../assets/images/icon-search.svg";
import { useSearch } from "../../hooks/useSearch";
import { useTheme } from "../../hooks/useTheme";
import "./TextInput.scss";

export const TextInput = () => {
  const { dark, value } = useTheme();
  const { handleSearch, setSearch, search } = useSearch();
  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className={`text-input-container   ${false ? "error" : ""}  ${
        search ? "active" : ""
      } ${dark ? "dark" : ""}`}
    >
      <input
        type="text"
        name=""
        id=""
        value={search}
        className={`input-text ${value} ${dark && "dark"}`}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img
        src={searcIcon}
        alt="search-icon"
        onClick={(e) => handleSearch(e)}
        className="search-icon"
      />
    </form>
  );
};
