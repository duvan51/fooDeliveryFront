import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Usamos react-icons para el icono de basura

const NumberInputWithIcons = ({ onValueChange }) => {
  const [value, setValue] = useState(1); // Valor inicial del número

  const handleIncrement = () => {
    if (value < 10){
      const val = value + 1;
      setValue(val); 
      onValueChange(val);
    } 
  };

  const handleDecrement = () => {
    if (value > 0){
      const val = value - 1;
      setValue(val);
      onValueChange(val);
    }  // Decrementa hasta un mínimo de 0
  };

  const handleClear = () => {
    setValue(0); // Limpia el valor del input
    onValueChange(0);
  };




  return (
    <div className="flex items-center border rounded p-1 h-full w-full">
      {/* Botón para borrar (icono de basura) */}
      <button onClick={handleClear} className="p-2 text-red-600">
        <FaTrash />
      </button>

      {/* Input de número */}
      <input
        type="number"
        min="0"
        max="10"
        step="1"
        value={value}
        readOnly
        className="w-12 text-center outline-none h-8"
      />

      {/* Botones de + y - */}
      <div className="flex flex-col ml-2">
        <button
          onClick={handleIncrement}
          className="text-lg text-gray-700"
        >
          +
        </button>
        <button
          onClick={handleDecrement}
          className="text-lg text-gray-700"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default NumberInputWithIcons;