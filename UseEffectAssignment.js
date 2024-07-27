import { useEffect, useState } from "react";
const UseEffectAssignment = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        const result = await response.json();
        console.log(result);
        setData(result.data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-useEffect">
      <h1>The USA Population over the last 10 years..</h1>
      {data &&
        data.map((item) => {
          return (
            <p key={item.Year}>
              The population of United States in the Year {item.Year} was{" "}
              {item.Population}.
            </p>
          );
        })}
    </div>
  );
};
export default UseEffectAssignment;
