import { useState } from "react";

const Form = ({ AddProp }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  function AddData(e) {
    e.preventDefault();
    AddProp(name, city, age);
  }

  return (
    <div>
      <form onSubmit={AddData}>
        <p>
          <label className="input" htmlFor="input1">
            Name:
          </label>
          <input
            id="input1"
            placeholder="Enter name"
            className="data"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>

        <p>
          <label className="input" htmlFor="input2">
            City:
          </label>
          <input
            id="input2"
            className="data"
            placeholder="Enter  city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </p>

        <p>
          <label className="input" htmlFor="input3">
            Age:
          </label>
          <input
            className="data"
            id="input3"
            placeholder="Enter age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </p>

        <input type="submit" id="submit" className="submit" value="Submit" />
      </form>
      ;
    </div>
  );
};
export default Form;
