import React, { useState } from "react";
import * as cn from "classnames";

const userName = "Viktor";
const menuItems = ["Start", "Your cart", "Favorites", "Your orders"];

const MobMenu = ({ setOpen }) => {
  const [selectedID, setSelectedID] = useState(undefined);
  const handleSelected = (e) => {
    setSelectedID(e.target.id);
    e.target.id !== "name" && setOpen(false);
  };
  return (
    <ul className="mob-menu-items" onClick={handleSelected}>
      <li id="name">{userName}</li>
      {menuItems.map((x, i) => {
        const selected = selectedID == i;
        return (
          <li key={i} id={i} className={cn({ selected })}>
            {x}
          </li>
        );
      })}
      <li id="sign-out">Sign Out</li>
    </ul>
  );
};

export default MobMenu;
