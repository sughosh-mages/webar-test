import React from "react";
import SidePanel from "./sidepanel";
import { NavLink } from "react-router-dom";

function EffectPage() {
  return (
    <div className="effeectpagebg">
      <SidePanel />
      <div className="effectbuttons">
        <NavLink exact to="/chooseCatergory">
          <button className="effectbutton-1">Create New</button>
        </NavLink>
        <NavLink exact to="/myEffects">
          <button className="effectbutton-2">My Effect</button>
        </NavLink>

      </div>
    </div>
  );
}

export default EffectPage;
