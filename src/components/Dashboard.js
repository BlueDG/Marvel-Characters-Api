import React from "react";
import CharacterList from "./CharacterList";

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col">
        <CharacterList />
      </div>
    </div>
  );
}
