import React, { useState, useEffect } from "react";
import "./style.css";

const TextRgb = ({ texto }) => {
  useEffect(() => {
    setInterval(handleChangeColorText, 80);
  }, []);

  const listColors = ["primary", "success", "danger", "warning", "info"];
  const arraystring = texto.split("");
  let position = 0;

  const getPosition = (ind, listlen) => {
    const a = Math.abs((ind - position) % listlen);
    console.log(a);
    return a;
  };

  const getElement = (string, colors) => {
    const newlist = string.map((char, index) => (
      <span
        className={
          "w-25 d-inline text-" + colors[getPosition(index, listColors.length)]
        }
      >
        {char}
      </span>
    ));
    position++;
    return newlist;
  };

  const [newtext, setNewtext] = useState();

  const handleChangeColorText = () => {
    const valores = getElement(arraystring, listColors);
    setNewtext(valores);
  };

  // setInterval(handleChangeColorText, 1000);

  return (
    <div>
      <h1>{newtext}</h1>
    </div>
  );
};

export default TextRgb;
