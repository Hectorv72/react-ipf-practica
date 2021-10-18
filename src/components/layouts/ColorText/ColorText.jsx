import React, { useState, useEffect } from "react";

const ColorText = () => {
  const listColors = ["primary", "success", "danger", "warning", "info"];
  const [h1color, setH1color] = useState();

  useEffect(() => {
    console.log("aaaa");
  }, [h1color]);

  const getRandomElement = (list) => {
    let index;
    do {
      index = Math.floor(Math.random() * list.length);
    } while (list[index] === h1color);

    return list[index];
  };

  const handleH1ChangeColor = () => {
    setH1color(getRandomElement(listColors));
  };

  return (
    <div>
      <h1 style={{ fontSize: 500 }} className={"text-" + h1color}>
        Texto que cambia de color
      </h1>
      <button onClick={handleH1ChangeColor} className="btn btn-success">
        Cambiar Color
      </button>
    </div>
  );
};

export default ColorText;
