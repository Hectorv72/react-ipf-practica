import { useEffect, useState } from "react";

const JsonDatos = () => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await res.json();
      // console.log(Object.keys(json));

      const elements = Object.keys(json);
      const list = elements.map((key) => (
        <>
          <label>{key + " : " + json[key]}</label>
          <br />
        </>
      ));

      setData(list);
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setData] = useState([]);
  const [action, setAction] = useState(false);

  useEffect(() => {
    if (action) {
      console.log("se ha alcanzado el render");
      fetchData();
    }
  }, [action]);

  return (
    <div>
      {data}
      <button onClick={() => setAction(!action)}>Cambiar</button>
    </div>
  );
};

export default JsonDatos;
