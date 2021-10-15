import React, { useState } from "react";

const Numdoble = () => {
  const [doble, setDoble] = useState("");

  const handleSetNumberDoble = (e) => {
    setDoble(e.target.value * e.target.value);
  };

  return (
    <div className="container form-group row justify-content-center">
      <div className=" col-md-6">
        <h1>Doble del numero</h1>
        <input
          type="number"
          className="form-control"
          onChange={handleSetNumberDoble}
        />
        <label className="form-control">{doble}</label>
      </div>
    </div>
  );
};

export default Numdoble;
