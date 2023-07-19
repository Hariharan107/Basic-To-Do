interface Props {
  guests: string[];
}
const ShowList: React.FC<Props> = ({ guests }) => {
  const renderList = guests.map((guest, index) => <li key={index}>{guest}</li>);

  if (!guests.length) return <h3>No guests to show</h3>;
  return (
    <>
      <h3>Guest List</h3>
      <ul>{renderList}</ul>
    </>
  );
};

export default ShowList;
