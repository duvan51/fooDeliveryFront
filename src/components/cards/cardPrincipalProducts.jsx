import React from "react";
import ModalProduct from "../../pages/modalProduct/modalProduct.jsx"

const cardPrincipalProducts = ({ data }) => {
  return (
    <div className="border-solid w-80 border-b-4 border-bgSecondary pr-4 pb-4 shadow-xl">
    {/* Aplica el hover solo al contenedor de contenido */}
    <div className="w-full cursor-pointer hover:scale-105 duration-500">
      <div className="flex w-full gap-2">
        <div className="w-1/2 h-28">
          <div className="w-full h-full">
            <img
              src={data.imageUrl}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2">
          <div>{data.name}</div>
          <div className="text-xs">{data.description}</div>
        </div>
      </div>
    </div>
    {/* Botón para la modal, fuera del área que escala */}
    <div className="flex justify-end pt-1">
      <ModalProduct data={data} />
    </div>
  </div>
  );
};

export default cardPrincipalProducts;
