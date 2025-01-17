import React,{useContext,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

const PrivateRoutes = ({children}) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Si el usuario está autenticado, renderizar el componente hijo
  return isAuthenticated ? children : null;
}

export default PrivateRoutes