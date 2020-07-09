import React, { useState } from "react";
import * as cn from "classnames";
import "./App.scss";

import MobMenu from "./components/MobMenu";

function App() {
  // Sets open mobile menu
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className=" wrapper">
      <div className="mob-first menu-mob">
        <MobMenu setOpen={setOpen} />
      </div>
      <div className={cn("mob-first menu-mob-cover closed", { open })}>
        <ul className="start">
          <li onClick={handleOpen}>
            <span className="burger"></span>
          </li>
          <li>START</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
