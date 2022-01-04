export function SideBox(props) {
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
      <div id="errorMessage">{props.message}</div>
    </div>
  );
}
