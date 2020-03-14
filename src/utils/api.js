import ax from "axios";

export async function getAllCharacters(setCharacters) {
  try {
    const res = await ax.get(
      `https://gateway.marvel.com/v1/public/characters?`,
      {
        params: {
          apikey: "842e0f7fc65303bb961dd05090a7323b"
        }
      }
    );
    setCharacters(res.data.data.results);
  } catch {
    return setCharacters([]);
  }
}

export async function getCharactersByName(setCharacters, request) {
  try {
    const res = await ax.get(
      `https://gateway.marvel.com/v1/public/characters?`,
      {
        params: {
          apikey: "842e0f7fc65303bb961dd05090a7323b",
          nameStartsWith: request
        }
      }
    );
    setCharacters(res.data.data.results);
  } catch {
    return setCharacters([]);
  }
}

export function fetchCharacters(setCharacters, request) {
  if (request.length < 1) {
    getAllCharacters(setCharacters);
  }
  if (request.length >= 1) {
    getCharactersByName(setCharacters, request);
  }
}
