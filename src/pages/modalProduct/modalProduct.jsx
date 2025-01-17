// Modal.js
import React, { useState } from "react";
import Bebidas from "./bebidas";
import InputIncrement from "../../components/input/inputIncrement";

const Modal = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
 

  const [totalPagar, setTotalPagar] = useState(data.price)
  const [increment, setIncrement] = useState(1)

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  //gaseosas
  const handleSelectedValue = (value) => {
    //console.log(value+data.price)
    setTotalPagar(value+data.price)
    
  };

  //increment y decrement
  const handleValueChange = (newValue) => {
    setIncrement(newValue)
  };


  const total = totalPagar * increment

  //console.log(total)

  //console.log(totalPagar)
 

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Abrir Modal
      </button>

      {/* Modal (se muestra solo cuando `isOpen` es true) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white rounded-lg shadow-lg p-8 w-10/12 max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 "
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-lg font-bold mb-4">Escogamos tu orden</h2>

            <div className="flex gap-3">
              <div className="w-1/2">
                <img src={data.imageUrl} />
              </div>
              <div className="w-1/2">
                <h2 className="text-lg font-bold mb-4">{data.name}</h2>
                  <div className="w-full text-sm">
                      {data.description}
                  </div>
                  <div className="flex h-1/3">
                    <h2 className="text-lg font-bold mb-4">$ {data.price}</h2>
                  </div>
                
              </div>
            </div>
           
            <div>
              <Bebidas  onSelectedValue={handleSelectedValue}  />
            </div>


            <div className="w-full flex justify-between items-center">
              <div className="h-full ">
                <InputIncrement onValueChange={handleValueChange} />
              </div>
              <div >
                <button type="button" className="btn btn-outline btn-success">
                  agregar a carrito
                </button>
              </div>
              <div >
                <button className="btn btn-success">
                    pagar $ { total }
                </button>
              </div>
            </div>


          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;