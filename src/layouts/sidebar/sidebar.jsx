import React, { useEffect, useState, useContext } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import { Link, useNavigate } from "react-router-dom";

import "./sidebar.css";

import { AuthContext } from "../../context/AuthContext.jsx";

import { TbLogout2 } from "react-icons/tb";

const sidebar = () => {
  const userData = JSON.parse(localStorage.getItem("usuario"));
  const [activeDivs, setActiveDivs] = useState(null);

  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const [ rol, setRol ] = useState("")

  useEffect(()=>{
    if (userData.email.endsWith("@restaurant.com")){
      setRol('restaurante')
     }
     else(
      setRol('usuario')
     )
  },[userData.email])





  // Función que cambia el estado del div clickeado
  const handleClick = (index) => {
    setActiveDivs(index);
  };

  const getDivStyles = (index) => ({
    borderBottom: activeDivs === index ? " " : "",
    backgroundColor: activeDivs === index ? "#E0DFE9" : "",
    cursor: "pointer",

  });


  return (
    <div className="h-dvh flex flex-col">
      {/** header sidebar */}
      <div className="flex flex-col  w-full items-center p-4 gap-2 border-solid border-b-4 h-1/3">
        <div className="w-2/3">
          <div className="w-full h-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
              className="w-100 h-100 object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>{userData?.name}</div>
        </div>
      </div>

      {/** menu sidebar */}

      <div className="flex w-full pt-8 text-lg font-bold  h-1/3">
        <div className="w-full justify-items-end">
          <div className="w-3/4 flex flex-col gap-2">
           
           { (rol ==="restaurante") ? (
            <>

            <div className="hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md cursor-pointer font-bold pl-2">
              <Link
                      to={`/billetera`}
                      style={getDivStyles(1)} 
                      onClick={() => handleClick(1)}
                      className="hover:text-gray-400"
                    >
                      Billetera
                    </Link>
            </div>

            <div 
              className="w-full accordion hover:bg-bgPrimary flex  min-h-10  items-center  rounded-l-md pl-2"
              style={getDivStyles(0)} 
              onClick={() => handleClick(0)}
              >
              <Accordion transition transitionTimeout={250} className="w-full">
                <AccordionItem
                  header="Mis pedidos"
                  headerClassName="text-lg font-bold p-2 bg-gray-200 cursor-pointer hover:bg-gray-300 w-full"
                >

                  <div className="bg-bgPrimary w-full">
                    <div className="text-slate-700">
                      seguimiento 
                    </div>
                  </div>

                  <div className="hover:bg-textPrimary hover:text-gray-400 bg-bgPrimary cursor-pointer">
                    <Link
                      to={`/ordersAll`}
                      style={getDivStyles(0)} 
                      onClick={() => handleClick(0)}
                      className="hover:text-gray-400"
                    >
                      Todos
                    </Link>
                  </div>
                  <div className="hover:bg-textPrimary hover:text-gray-400 bg-bgPrimary cursor-pointer">
                    <Link
                      to={`/ordersPreparation`}
                      style={getDivStyles(1)}
                      onClick={() => handleClick(1)}
                      className="hover:text-gray-400"
                    >
                      Preparacion
                    </Link>
                  </div>
                  <div 
                    className="hover:bg-textPrimary bg-bgPrimary cursor-pointer"
                  >
                    Enviado
                  </div>
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer">
                    Cancelado
                  </div>
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer">
                    Devolcuiones
                  </div>
                </AccordionItem>
              </Accordion>
            </div>

            
            <div 
              className="hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md cursor-pointer font-bold pl-2"
              style={getDivStyles(2)}
              onClick={() => handleClick(2)}
              >
              Carta
            </div>

            </>
            ):(
              <>
            <div 
              className="w-full accordion hover:bg-bgPrimary flex  min-h-10  items-center  rounded-l-md pl-2"
              style={getDivStyles(0)} 
              onClick={() => handleClick(0)}
              >
              <Accordion transition transitionTimeout={250} className="w-full">
                <AccordionItem
                  header="Mis pedidos"
                  headerClassName="text-lg font-bold p-2 bg-gray-200 cursor-pointer hover:bg-gray-300 w-full"
                >

                  <div className="bg-bgPrimary w-full">
                    <div className="text-slate-700">
                      seguimiento 
                    </div>
                  </div>

                  <div className="hover:bg-textPrimary hover:text-gray-400 bg-bgPrimary cursor-pointer">
                    <Link
                      to={`/ordersAll`}
                      style={getDivStyles(0)} 
                      onClick={() => handleClick(0)}
                      className="hover:text-gray-400"
                    >
                      Todos
                    </Link>
                  </div>
                  <div className="hover:bg-textPrimary hover:text-gray-400 bg-bgPrimary cursor-pointer">
                    <Link
                      to={`/ordersPreparation`}
                      style={getDivStyles(1)}
                      onClick={() => handleClick(1)}
                      className="hover:text-gray-400"
                    >
                      Preparacion
                    </Link>
                  </div>
                  <div 
                    className="hover:bg-textPrimary bg-bgPrimary cursor-pointer"
                  >
                    Enviado
                  </div>
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer">
                    Cancelado
                  </div>
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer">
                    Devolcuiones
                  </div>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md cursor-pointer font-bold pl-2"
               style={getDivStyles(1)}
               onClick={() => handleClick(1)}
            >
              Pais/region e idioma
            </div>
            <div 
              className="hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md cursor-pointer font-bold pl-2"
              style={getDivStyles(2)}
              onClick={() => handleClick(2)}
              >
              Direcciones
            </div>
            <div 
              className="hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md cursor-pointer font-bold pl-2"
              style={getDivStyles(3)}
              onClick={() => handleClick(3)}
            >
              Perfil
            </div>

            </>
            )
          
           }
            
          </div>
        </div>
      </div>

      {/** footer sidebar */}
      <div className="flex flex-col w-full  items-center p-4  h-1/3 place-content-end">
        <div className="w-full gap-2 border-solid border-t-4 flex flex-col">
          <div className="w-full flex justify-center">Villavicencio - Meta</div>
          <div className="w-full  flex justify-end">
            <button onClick={logout}>
              {" "}
              <TbLogout2 />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
