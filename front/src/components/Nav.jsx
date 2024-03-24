import SearchBar from "./SearchBar";

export default function Nav({ onSearch, getRandomCharacter, onLogout }) {
  return (
    <div>
      <SearchBar
        onSearch={onSearch}
        getRandomCharacter={getRandomCharacter}
        onLogout={onLogout}
      />
    </div>
  );
}
