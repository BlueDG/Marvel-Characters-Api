import React from "react";
import CharacterList from "../character/CharacterList";

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col">
        <CharacterList />
      </div>
    </div>
  );
}
