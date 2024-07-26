import { useEffect, useState } from "react";
const UseEffectAssignment = () => {
  const [data, setData] = useState({});
  return (
    <div className="container-useEffect">
      {useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
            );
            const result = await response.json();
            console.log(result);
            setData(result);
            console.log({ data });
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, [])}
    </div>
  );
};
export default UseEffectAssignment;
