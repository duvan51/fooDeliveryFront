import React,{useState} from 'react'
import Input from '../../components/input/input.jsx'

import { createUser } from "../../services/getUser.jsx";
import { useNavigate } from 'react-router-dom';


const registerUser = () => {
   const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        name: '',
        address: "",
        email:'',
        identificacion: '',
        neighborhood:"",
        city: '',
        password:"",
     
      });

     // console.log(formData)
    
    
      const handleInputChange = (name, value) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value,
          password: name === 'identificacion' ? value : prevFormData.password,
        }));
      };
    
    
      const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        try {
          const response = await createUser(formData); 
          console.log('Datos enviados correctamente:', response);
          
          navigate('/'); 
        } catch (error) {
          console.error('Error al enviar los datos:', error);
        }
      };
      
      
    
      return (
        <div className='w-full h-full flex justify-center py-20'>
          <div className="bg-textPrimary w-1/2 p-12 rounded-md flex flex-col gap-8">
          <div className='text-2xl font-bold'>
            Registrar usuario
          </div>
          <form className="w-5/6 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type='text' name="name" color={'black'} placeholder={"Name"} onInputChange={handleInputChange} />
            <Input type='text' name="identificacion" color={'black'} placeholder={"identificacion"} onInputChange={handleInputChange} />
            <Input type='text' name='address' color={'black'}  placeholder={"direccion"} onInputChange={handleInputChange} />
            <Input type='text' name='neighborhood' color={'black'}  placeholder={"barrio"} onInputChange={handleInputChange} />
            <Input type='text' name='city' color={'black'}  placeholder={"ciudad"} onInputChange={handleInputChange} />
            <Input type='email' name='email' color={'black'}  placeholder={"email"} onInputChange={handleInputChange} />
            <Input type='text' name='role' color={'black'}  placeholder={"rol"} onInputChange={handleInputChange} />
            <div className="py-5">
               <button onClick={handleSubmit} className='' > Register </button>
            </div>
          </form>
        </div>

        </div>
        
      );
}

export default registerUser