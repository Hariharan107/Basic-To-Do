import { useState } from "react";
import ReactDOM from "react-dom/client";
import GuestList from "./GuestList";
import ShowList from "./ShowList";
import ShowFilteredUser from "./ShowFilteredUser";
const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  const [text, setText] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);
  const [filteredGuests, setFilteredGuests] = useState<string[]>([]);

  return (
    <div>
      <GuestList
        text={text}
        setText={setText}
        setGuests={setGuests}
        guests={guests}
        setFilteredGuests={setFilteredGuests}
      />
      <ShowList guests={guests} />
      {filteredGuests.length > 0 ? (
        <ShowFilteredUser filteredGuests={filteredGuests} />
      ) : (
        <h3>No guests to show</h3>
      )}
    </div>
  );
};

root.render(<App />);
