export function AddButton(props) {
  function insertWords() {
    let word = document.getElementById("text").value;
    if (!word || word === " ") {
      return props.setErrorMessage("Empty space was added.");
    }
    for (let x = 0; x < props.dictionary.length; ++x) {
      console.log(props.dictionary);
      if (props.dictionary[x] === word) {
        return props.setErrorMessage("The word already exist in dictionary.");
      }
    }
    props.setDictionary([...props.dictionary, word]);
  }
  return (
    <button className="insertButton" onClick={() => insertWords()}>
      Add Word
    </button>
  );
}

export function SearchButton(props) {
  function searchWord() {
    let word = document.getElementById("text").value;
    if (props.dictionary.length === 0) {
      props.setErrorMessage("The dictionary is empty.");
    }
    for (let i = 0; i < props.dictionary.length; ++i) {
      if (word === props.dictionary[i]) {
        props.setErrorMessage(`The word: ${word} is in dictionary.`);
      } else if (word === "") {
        props.setErrorMessage("You need to insert a word.");
      } else {
        props.setErrorMessage("The word is not in dictionary.");
      }
    }
  }
  return (
    <button className="insertButton" onClick={() => searchWord()}>
      Search Word
    </button>
  );
}
