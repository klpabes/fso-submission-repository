import Person from "./Person";

const Persons = ({ personShow }) => {
  return (
    <ul>
      {personShow.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
};

export default Persons;
