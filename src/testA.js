import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import ax from "axios";

function Details() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    ax.get(`https://gateway.marvel.com:443/v1/public/characters/${id}`, {
      params: { apikey: "ee5094cc5d8b16b7c2bf97e93b0ab1ac" }
    })
      .then(res => setCharacter(res.data.data.results))
      .catch(_ => null);
  }, [id]);

  return (
    <>
      details page:
      {character &&
        character.map((c, i) => {
          return (
            <div key={i}>
              {c.name}{" "}
              {c.comics.items > 0
                ? "appears in these comics"
                : "is not featured in any comic"}
              :
              {c.comics.items.map((comic, i) => {
                return <div key={i}>{comic.name}</div>;
              })}
            </div>
          );
        })}
      <button onClick={() => history.push("/")}>go home</button>
    </>
  );
}

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ax.get("https://gateway.marvel.com:443/v1/public/characters?", {
      params: { apikey: "ee5094cc5d8b16b7c2bf97e93b0ab1ac" }
    })
      .then(res => setData(res.data.data.results))
      .catch(_ => null);
  }, []);

  return (
    <>
      {data &&
        data.map((d, i) => {
          return (
            <Link to={`/${d.id}`} key={i}>
              {d.name}
            </Link>
          );
        })}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
