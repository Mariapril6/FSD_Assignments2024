import { useState } from "react";
import "./Person.css";
const Person = ({ item, onDelete }) => {
  const [name, setName] = useState(item.name);
  const [city, setCity] = useState(item.city);
  const [age, setAge] = useState(item.age);
  function deletePerson() {
    onDelete(item.id);
  }

  function makeEditable(e) {
    e.target.contentEditable = "true";
  }

  function editPerson(e) {
    e.target.contentEditable = "false";
  }
  return (
    <div>
      <li>
        <p> ~~{item.id}~~</p>
        <p
          id="name"
          className="data"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onClick={makeEditable}
        >
          Name: {item.name}
        </p>
        <p
          id="city"
          className="data"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          onClick={makeEditable}
        >
          City: {item.city}
        </p>
        <p
          className="data"
          value={age}
          id="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          onClick={makeEditable}
        >
          Age:{item.age}
        </p>
        <button onClick={deletePerson}>Delete</button>
        <button onClick={editPerson}>Update</button>
      </li>
    </div>
  );
};
export default Person;

//weekly assignment: add an update button,
