import React from "react";
import reactDom from "react-dom";
import "./index.css";

let book = [];

function RootFunction() {
  return (
      <Content />
  );
}

const Content = () => {
  return (
    <div className="Content">
      <Header />
      <SideBox />
      <InnerContainer />
      <Dictionary />
    </div>
  );
};

const Header = () => {
  return <div className="header"></div>;
};

const SideBox = () => {
  return (
    <div className="SideBox">
      <p className="errorTitle">Message:</p>
      <button
        onClick={() => {
          document.getElementById("errorMessage").innerHTML = ` `;
        }}
        style={{ width: "60px" }}
        id="clearMessageError"
      >
        Clear
      </button>
      <div id="errorMessage"></div>
    </div>
  );
};

const InnerContainer = () => {
  return (
    <div className="InnerContainer">
      <Title />
      <InputText />
    </div>
  );
};

const Title = () => {
  return (
    <div className="Title">
      <p>Dictionary</p>
    </div>
  );
};

const InputText = () => {
  return (
    <div className="InputText">
      <input
        className="insertWords"
        id="text"
        type="text"
        placeholder="search.."
      />

      <div>
        <button className="insertButton" onClick={() => InsertWords()}>
          Insert
        </button>
        <button className="showButton" onClick={() => ShowDictionary()}>
          Show Dictionary
        </button>
        <button className="hideButton" onClick={() => ShowDictionary("hide")}>
          Hide dictionary
        </button>
      </div>
    </div>
  );
};

const Dictionary = () => {
  return (
    <div className="Dictionary">
      <p style={{ color: "#125f9b" }}> Words:</p>
      <div id="ShowDictionary" style={{ color: "#125f9b" }}></div>
    </div>
  );
};

function InsertWords() {
  let word = document.getElementById("text").value;
  if (word == "")
    return (document.getElementById(
      "errorMessage"
    ).innerHTML += `<p> Can't add empty space in dictionary.</p>`);
  for (let i = 0; i <= book.length - 1; ++i) {
    if (word == book[i])
      return (document.getElementById(
        "errorMessage"
      ).innerHTML += `<p> The word is allready inserted.</p>`);
  }
  book.push(word);
}

function ShowDictionary(hide) {
  if (hide) return (document.getElementById("ShowDictionary").innerHTML = ``);

  if (book.length > 0)
    return (document.getElementById(
      "ShowDictionary"
    ).innerHTML = `<p>${book} </p>`);
  document.getElementById(
    "errorMessage"
  ).innerHTML += `<p> No Words inside dictionary.</p>`;
}

reactDom.render(<RootFunction />, document.getElementById("root"));
