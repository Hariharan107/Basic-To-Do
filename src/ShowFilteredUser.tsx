interface ChildProps {
  filteredGuests: string[];
}
const ShowFilteredUser: React.FC<ChildProps> = ({ filteredGuests }) => {
  const renderFilteredList = filteredGuests.map((guest, index) => (
    <li key={index}>{guest}</li>
  ));
  return (
    <>
      <h3>Filtered Guest List</h3>
      <ul>{renderFilteredList}</ul>
    </>
  );
};

export default ShowFilteredUser;
