import React from "react";
import reactDom from "react-dom";
import "./index.css";
import {Content} from "./content";



function RootFunction() {
  return ( <>
      <Content />
      </>
  );
}


reactDom.render(<RootFunction />, document.getElementById("root"));
