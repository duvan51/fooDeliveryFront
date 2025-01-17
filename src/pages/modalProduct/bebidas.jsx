import React,{useState} from 'react'

const bebidas = ({ onSelectedValue }) => {
    const [selectedItem, setSelectedItem] = useState(1);
    const [inputValues, setInputValues] = useState(0);
    const [totales, setTotales] = useState({});


    const bebidasProducts = [
        {
          id: 1,
          name: "Cocacola",
          image:
            "https://www.coca-cola.com/content/dam/onexp/gt/es/brands/coca-cola/es_coca-cola_prod_orginal-bottle-600mL_750x750_v1.jpg",
          size: "200ml",
          price: 1.5,
        },
        {
          id: 2,
          name: "Pepsi",
          image: "https://i5.walmartimages.com/asr/1dc9f959-658f-44bc-9bfa-d4d9ca61ac3b_1.77c0c7dd92465cae704f4f787c56557e.jpeg",
          size: "200ml",
          price: 1.3,
        },
        // Agrega más productos aquí si es necesario
      ];


      
  
      const handleSelect = (id) => {
        setSelectedItem(id)
        const selectedProduct = bebidasProducts.find((product) => product.id === id);
        const calculatedValue = selectedProduct.price * (inputValues[id] || 0);
        onSelectedValue(calculatedValue);
       
      };
      const handleInputChange = (id, value) => {
        const newValue = parseInt(value) || 0; // Asegúrate de que sea un número
        setInputValues((prev) => ({ ...prev, [id]: newValue }));
    
        // Actualiza el total directamente en el estado totales
        const total = newValue * bebidasProducts.find((item) => item.id === id).price;
        setTotales((prev) => ({ ...prev, [id]: total }));
    
        // Si es el producto seleccionado, envía el total al padre
        if (id === selectedItem) {
          onSelectedValue(total);
        }
      };

  return (
    <div className="overflow-x-auto h-60">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              Select
            </label>
          </th>
          <th>Name</th>
          <th>Precio UND</th>
          <th>Precio</th>
        </tr>
      </thead>

      <tbody className='text-xs '>
        {/* row 1 */}
        {bebidasProducts.map((x)=> (
           x.id === selectedItem ? 
            <tr key={x.id}>
             <th>
               <label>
                 <input 
                    type="checkbox" 
                    className="checkbox checkbox-xs" 
                    checked={selectedItem === x.id}
                    onChange={()=> handleSelect(x.id)}
                 />
               </label>
             </th>
             <td>
               <div className="flex items-center gap-3">
                 <div className="avatar">
                   <div className="mask mask-squircle h-12 w-12">
                     <img
                       src={x.image}
                       alt="Avatar Tailwind CSS Component" />
                   </div>
                 </div>
                 <div>
                   <div className="font-bold">{x.name}</div>
                 </div>
               </div>
             </td>
             <td>
               {x.price}
             </td>
             <td>
                {totales[x.id] || 0}
             </td>
             <td>
                <input 
                  type="number" 
                  min="0" 
                  max="3" 
                  step="1" 
                  className="border rounded p-2" 
                  value={inputValues[x.id] || 0}
                  onChange={(e) => handleInputChange(x.id, e.target.value)}
                  disabled={selectedItem !== x.id}
                  />
             </td>
             </tr>
             :
             <tr key={x.id}>
             <th>
               <label>
                 <input 
                    type="checkbox" 
                    className="checkbox checkbox-xs" 
                    checked={selectedItem === x.id}
                    onChange={()=> handleSelect(x.id)}
                 />
               </label>
             </th>
             <td disabled>
               <div className="flex items-center gap-3">
                 <div className="avatar">
                   <div className="mask mask-squircle h-12 w-12">
                     <img
                       src={x.image}
                       alt="Avatar Tailwind CSS Component" />
                   </div>
                 </div>
                 <div>
                   <div className="font-bold">{x.name}</div>
                 </div>
               </div>
             </td>
             <td disabled>
               {x.price}
             </td>
             <td disabled>
               {x.price}
             </td>
             <td>
                <input
                disabled 
                  type="number" 
                  min="0" 
                  max="3" 
                  step="1" 
                  className="border rounded p-2" 
                  value={selectedItem === x.id ? inputValues[x.id] || 0 : 0}
                  onChange={(e) => console.log(e)}
                  />
             </td>
             </tr>

          
             
        
        ))}
      </tbody>
     
    </table>
  </div>
  )
}

export default bebidas