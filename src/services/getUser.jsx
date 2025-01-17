import axios from 'axios';


const URL = 'http://localhost:8080/api/users'

export const createUser = async (data) => {
    //console.log('Datos enviados:', data);
    try {
      const req = await axios.post(`${URL}/register`, data);
      //console.log('Post realizado correctamente:', req);
      return req.data;
    } catch (error) {
      // Verifica si el error tiene una respuesta del servidor
      if (error.response) {
        // El servidor respondió con un estado fuera del rango 2xx
        console.error('Error en la respuesta del servidor:', error.response.data);
        console.error('Código de estado:', error.response.status);
      } else if (error.request) {
        // La solicitud se hizo pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor:', error.request);
      } else {
        // Algo sucedió al configurar la solicitud
        console.error('Error en la configuración de la solicitud:', error.message);
      }
    }
  };



  export const authUser = async (data)=>{
    try {
        const response = await axios.post(`${URL}/login`, data.variables);
                console.log('Post realizado correctamente:', response.data);
        return response.data;
    } catch (error) {
        // Verifica si el error tiene una respuesta del servidor
      if (error.response) {
        // El servidor respondió con un estado fuera del rango 2xx
        console.error('Error en la respuesta del servidor:', error.response.data);
        console.error('Código de estado:', error.response.status);
        throw error;
      } else if (error.request) {
        // La solicitud se hizo pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor:', error.request);
      } else {
        // Algo sucedió al configurar la solicitud
        console.error('Error en la configuración de la solicitud:', error.message);
      }
        
    }
  }