import Card from "./Card";
import "../styles/Cards.css";

export default function Cards({ characters, onClose, isFavorite  }) {
  //props
  return (
    <div className="cards-container ">
      {characters.map((characters) => (
        <Card
          characters={characters}
          key={characters.id}
          id={characters.id}
          name={characters.name}
          status={characters.status}
          species={characters.species}
          gender={characters.gender}
          image={characters.image}
          onClose={() => onClose(characters.id)}
          isFavorite={isFavorite} 
        />
      ))}
    </div>
  );
}
