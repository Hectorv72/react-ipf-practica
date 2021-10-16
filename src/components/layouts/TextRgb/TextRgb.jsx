import React, { useState, useEffect } from "react";

const TextRgb = ({ texto }) => {
  useEffect(() => {
    setInterval(handleChangeColorText, 80);
  }, []);

  const listColors = ["primary", "success", "danger", "warning", "info"];
  let position = 0;

  const getPosition = (ind, colors) => {
    const a = (ind + position) % colors.length;
    return a;
  };

  const getElement = (string, colors) => {
    const arraystring = string.split("");
    const newlist = arraystring.map((char, index) => (
      <h1
        className={
          "w-25 d-inline text-" + colors[getPosition(index, listColors)]
        }
      >
        {char}
      </h1>
    ));
    position++;
    return newlist;
  };

  const [newtext, setNewtext] = useState();

  const handleChangeColorText = () => {
    const valores = getElement(texto, listColors);
    setNewtext(valores);
  };

  // setInterval(handleChangeColorText, 1000);

  return <div>{newtext}</div>;
};

export default TextRgb;
