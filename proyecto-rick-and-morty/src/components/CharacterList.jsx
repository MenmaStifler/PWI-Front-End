import { useState, useEffect } from "react";
import { Character } from "./Character";



export function CharacterList() {
 
  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://rickandmortyapi.com/api/character`);
      const { results } = await data.json();
      setCharacters(results);
      
    }
    fetchData();
  }, []);

  return (
    <div className="flex">
        <div className="d-flex row align-items-center m-3 justify-content-center">
          {characters.map((character) => (
            <div className="col" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                species={character.species}
                origin={character.origin}
                gender={character.gender}
              />
            </div>
          ))}
        </div>
    </div>
  );
}

export default CharacterList;