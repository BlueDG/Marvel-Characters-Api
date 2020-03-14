import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Input from "./Input";
import { useDebounce } from "use-debounce";
import { fetchCharacters } from "../utils/api";

export default function CharacterList() {
  const [request, setRequest] = useState("");
  const [debouncedRequest] = useDebounce(request, 900);
  const [characters, setCharacters] = useState([]);

  useEffect(() => fetchCharacters(setCharacters, debouncedRequest), [
    debouncedRequest
  ]);

  return (
    <>
      <Input setRequest={setRequest} />
      {characters.length > 0 ? (
        <div className="row">
          {characters.map((character, i) => (
            <CharacterCard key={i} id={character.id} index={i + 1} />
          ))}
        </div>
      ) : (
        <h1>Searching ... </h1>
      )}
    </>
  );
}
