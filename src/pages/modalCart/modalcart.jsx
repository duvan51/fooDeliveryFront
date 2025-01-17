// Modal.js
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const ModalCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [totalPagar, setTotalPagar] = useState(0);
  const [increment, setIncrement] = useState(1);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //gaseosas
  const handleSelectedValue = (value) => {
    //console.log(value+data.price)
    setTotalPagar(value);
  };

  //increment y decrement
  const handleValueChange = (newValue) => {
    setIncrement(newValue);
  };

  const total = totalPagar * increment;

  //console.log(total)

  //console.log(totalPagar)

  return (
    <div className="dropdown dropdown-end w-80">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 shadow w-80"
      >
        <div className="card-body ">
          <div className="flex flex-col gap-2">
            <div className="w-full border-b-2 border-bg-primary pb-2">
              <div className="flex gap-2">
                <div>Logo</div>
                <div>
                  <div className="text-xl font-bold">Name tienda</div>
                  <span className="text-textTerceary">Volver a la tienda</span>
                </div>
              </div>
              
            </div>
            <div className="flex w-full border-b-2 border-bg-primary py-3">
              <div className="w-1/5">image </div>
              <div className="w-3/5">
                <div> title product </div>
                <div> info </div>
                <div> Price </div>
              </div>
              <div className="w-1/5"> + 25000 - </div>
            </div>
          </div>
          <div className="card-actions pt-4">
            <button className="btn btn-primary btn-block">Delete</button>
            <button className="btn btn-primary btn-block">
              ir a pagar total = $23000
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
