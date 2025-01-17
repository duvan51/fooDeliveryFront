import React, { useState, useContext  } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//import { useMutation } from "@apollo/client";
import { authUser } from "../../services/getUser.jsx";
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.jsx';



const Login = () => {
  const { login } = useContext(AuthContext);


  const navigate = useNavigate(); 
  const [inputValues, setInputValues] = useState({ email: "", password: "" });

  const showSwal = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <i>Iniciar Sesion</i>,

      html: (
        <>
          <input
            id="swal-input1"
            className="swal2-input"
            placeholder="Email"
            defaultValue={inputValues.email}
          />
          <input
            id="swal-input2"
            type="password"
            className="swal2-input"
            placeholder="Password"
            defaultValue={inputValues.password}
          />
        </>
      ),
      
      preConfirm: async () => {
        const email = document.getElementById("swal-input1").value;
        const password = document.getElementById("swal-input2").value;


       // console.log(email, " " , password)

        setInputValues({ email, password });
       // console.log(inputValues)

        try {
          const response = await authUser({
            variables: {
              email: email,
              password: password,
            },
          });

            console.log("respuesta = > ",response)

            MySwal.fire('¡Login exitoso!', '', 'success');
            
            localStorage.setItem('usuario',JSON.stringify(response) );
            localStorage.setItem("isAuthenticated", "true");
            
            login(response);
            
            
            navigate("/count")


         // console.log("Token:", response.data.login.token); // Assuming the response contains a token
      //    localStorage.setItem("token", response.data.login.token);
       //   localStorage.setItem("UserName", response.data.login.user.Name);
    //      localStorage.setItem("id", response.data.login.user.id);

          //localStorage.setItem("Alojamientos", response.data.login.user.Alojamientos);

        // window.location.reload();
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
          MySwal.fire("Error al iniciar sesión", error.message, "error");
        }
      },
    });
  };

  console.log(inputValues)

  return (
    <>
      <button onClick={showSwal} type="button" className="btn btn-success">Login</button>
    </>
  );
};

export default Login;
