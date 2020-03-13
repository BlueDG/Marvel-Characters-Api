import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Input from "../layout/Input";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [request, setRequest] = useState("");

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com/v1/public/characters?`, {
        params: {
          apikey: "842e0f7fc65303bb961dd05090a7323b"
        }
      })
      .then(res => setCharacters(res.data.data.results))
      .catch(_ => setCharacters([]));
  }, [request]);

  return (
    <>
      <Input setRequest={setRequest} request={request} />
      {characters ? (
        <div className="row">
          {characters.map((character, i) => (
            <CharacterCard key={i} id={character.id} index={i + 1} />
          ))}
        </div>
      ) : (
        <h1>Loading Characters ... </h1>
      )}
    </>
  );
}
