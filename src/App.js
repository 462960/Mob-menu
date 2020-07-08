import React from "react";
import "./App.scss";

function App() {
  return (
    <div className=" wrapper">
      <div className="mob-first menu-mob"></div>
      <div className="mob-first menu-mob-cover cover-open">
        <ul className="start">
          <li>
            <span className="burger"></span>
          </li>
          <li>start</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
