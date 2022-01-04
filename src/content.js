import { useState } from "react";
import { SideBox } from "./content/sideBox";
import { AddButton } from "./content/buttons";
import { SearchButton } from "./content/buttons";

let book = [];

export function Content() {
  const [dictionary, setDictionary] = useState([]);
  const [errorMessage, setErrorMessage] = useState("Hi!");

  return (
    <div className="Content">
      <div className="header"></div>
      <SideBox message={errorMessage} />
      <div className="InnerContainer">
        <h1 className="Title">Dictionary</h1>
        <input
          className="insertWords"
          id="text"
          type="text"
          placeholder="add/search word.."
        />
        <AddButton
          setDictionary={setDictionary}
          setErrorMessage={setErrorMessage}
          dictionary={dictionary}
        />
        <SearchButton
          setDictionary={setDictionary}
          setErrorMessage={setErrorMessage}
          dictionary={dictionary}
          errorMessage={errorMessage}
        />
        <div className="Dictionary">
          <p style={{ color: "#125f9b", fontWeight: 600 }}> Words:</p>
          <div id="ShowDictionary" style={{ color: "#125f9b" }}>
            {dictionary.map((element) => " " + element)}
          </div>
        </div>
      </div>
    </div>
  );
}
