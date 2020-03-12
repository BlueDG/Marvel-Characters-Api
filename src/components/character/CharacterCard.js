import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import loadingGif from "./gif/ddl_wait.gif";

export default function CharacterCard({ id, index }) {
  const [character, setCharacter] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/characters/${id}`, {
        params: { apikey: "842e0f7fc65303bb961dd05090a7323b" }
      })
      .then(res => setCharacter(res.data.data.results))
      .catch(_ => setCharacter([]));
  }, [id]);

  return (
    <>
      {character &&
        character.map((c, i) => {
          return (
            <div key={i} className="col-md-3 col-sm-6 mb-5">
              <StyledLink to={`/character${c.id}`}>
                <Card className="card">
                  <h5 className="card-header">{index}</h5>
                  {imageLoading ? (
                    <img
                      src={loadingGif}
                      alt="gif"
                      style={{ width: "5em", height: "5em" }}
                      className="card-img-top rounder mx-auto d-block mt-2"
                    />
                  ) : null}
                  <Thumbnail
                    className="card-img-top rounded mx-auto mt-2"
                    src={`${c.thumbnail.path}.${c.thumbnail.extension}`}
                    onLoad={() => {
                      setImageLoading(false);
                    }}
                    style={imageLoading ? null : { display: "block" }}
                  />
                  <div className="card-body mx-auto">
                    <h6 className="card-title">{c.name}</h6>
                  </div>
                </Card>
              </StyledLink>
            </div>
          );
        })}
    </>
  );
}

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0.12), 01px 2px rgba(0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Thumbnail = styled.img`
  width: 5em;
  height: 5em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
