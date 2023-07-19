import { useState } from "react";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setGuests: React.Dispatch<React.SetStateAction<string[]>>;
  setFilteredGuests: React.Dispatch<React.SetStateAction<string[]>>;
  guests: string[];
}
const GuestList: React.FC<Props> = ({
  text,
  setText,
  guests,
  setGuests,
  setFilteredGuests,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGuests((prev) => [...prev, text]);
    setText("");
  };
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleSearch = () => {
    if (!searchText) return;
    const filteredGuests = guests.filter((guest) =>
      guest.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredGuests(filteredGuests);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Guest List</h3>
        <input type='text' value={text} onChange={handleChange} />
        <span style={{ paddingLeft: "20px" }}>
          <button>Add Guest</button>
        </span>
      </form>
      <input type='text' value={searchText} onChange={handleSearchText} />
      <button onClick={handleSearch}>Search Guest</button>
    </>
  );
};
export default GuestList;
