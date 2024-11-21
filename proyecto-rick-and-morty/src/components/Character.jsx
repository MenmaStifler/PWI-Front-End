export function Character(character) {
    return (
      <div className="d-flex flex-column justify-content-between aling-items-center p-3 mb-2 bg-dark text-white rounded">
        
        <img src={character.image} alt={character.name}/>
        <h3>{character.name}</h3>
        <p>{`Character Status: ${character.status}`}</p>
        <p>{`Species: ${character.species}`}</p>
        <p>{`Origin: ${character.origin && character.origin.name}`}</p>
        <p>{`Gender: ${character.gender}`}</p>
      </div>
    );
  }
  export default Character;