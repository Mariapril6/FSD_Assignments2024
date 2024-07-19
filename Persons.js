import { useState } from "react";
import React from "react";
import Person from "./Person";
import Form from "./Form";

let len = 0;
const Persons = () => {
  const [persons, setPersons] = useState([]);

  function onDelete(id) {
    const filteredPersons = persons.filter((person) => {
      return person.id != id;
    });

    for (let i = id - 1; i < filteredPersons.length; i++) {
      console.log(filteredPersons[i].id);
      filteredPersons[i].id = filteredPersons[i].id - 1;
      console.log(filteredPersons[i].id);
    }

    setPersons(filteredPersons);
  }
  function Add(newName, newCity, newAge) {
    if (len === 0) len += 1;
    else {
      len = persons.length + 1;
    }
    console.log(newName, newCity, newAge);

    const person = {
      id: len,
      name: newName,
      city: newCity,
      age: newAge,
    };

    if (person.id == 1) setPersons([person]);
    else {
      persons.push(person);
      setPersons([...persons]);
    }
  }
  return (
    <div>
      <Form AddProp={Add} />
      {persons && (
        <ul>
          {persons.map((item) => {
            return <Person item={item} key={item.id} onDelete={onDelete} />;
          })}
        </ul>
      )}
    </div>
  );
};
export default Persons;
