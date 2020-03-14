import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  TopContainer,
  Img,
  TitleTop,
  Description,
  BottomContainer,
  Division,
  TitleBottom,
  Links,
  Footer
} from "./Text";

export default function Character() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/characters/${id}`, {
        params: { apikey: "842e0f7fc65303bb961dd05090a7323b" }
      })
      .then(res => setCharacter(res.data.data.results))
      .catch(_ => setCharacter([]));
  }, [id]);

  return (
    <div>
      {character &&
        character.map((c, i) => {
          return (
            <div key={i} className="card">
              <TopContainer>
                <div className="container py-1">
                  <Img
                    className="card-img rounded mx-auto"
                    src={`${c.thumbnail.path}.${c.thumbnail.extension}`}
                    alt="character"
                  />
                </div>
                <div className="container">
                  <TitleTop>{c.name}</TitleTop>
                  <Description>
                    {c.description
                      ? c.description
                      : "There is not yet a description for this character."}
                  </Description>
                </div>
              </TopContainer>
              <BottomContainer>
                <Division>
                  <TitleBottom>Comics selection</TitleBottom>
                  {c.comics.items ? (
                    c.comics.items.slice(0, 5).map((comic, i) => {
                      return <div key={i}>{comic.name}</div>;
                    })
                  ) : (
                    <span>
                      {c.name} is not featured in any comic available.
                    </span>
                  )}
                </Division>
                <Division>
                  <TitleBottom>External Links</TitleBottom>
                  {c.urls.map((u, i) => {
                    return (
                      <li key={i} className="text-left px-5">
                        <Links href={u.url}>{u.type}</Links>
                      </li>
                    );
                  })}
                </Division>
              </BottomContainer>
              <Footer className="card-footer text-center">
                Data provided by Marvel. © 2014 Marvel
              </Footer>
            </div>
          );
        })}
    </div>
  );
}
