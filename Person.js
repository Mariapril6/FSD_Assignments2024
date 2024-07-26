import { useState } from "react";
import "./Person.css";
const Person = ({ item, onDelete, onEdit }) => {
  //const [name, setName] = useState(item.name);
  //const [age, setAge] = useState(item.age);

  function deletePerson() {
    onDelete(item.id);
  }

  function makeEditable(e) {
    e.target.contentEditable = "true";
  }

  function editPerson() {
    onEdit(item.id, item.name, item.city, item.age);
    item.contentEditable = "false";
  }

  return (
    <div>
      <li>
        <p> ~~{item.id}~~</p>
        <p id="name" className="data" onClick={makeEditable}>
          Name: {item.name}
        </p>
        <p id="city" className="data" onClick={makeEditable}>
          City: {item.city}
        </p>
        <p
          className="data"
          //value={age}
          id="age"
          //onChange={(e) => {
          //setAge(e.target.value);
          //}}
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
