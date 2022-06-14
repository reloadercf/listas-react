import { useState } from "react"

export const Input = ({handleAgregarComida}) => {

    const [nuevaComida, setNuevaComida] =useState('')

    const handleNuevaComida =(e)=>{
      console.log(e)
        setNuevaComida(e.target.value);
    }
   
  return (
    <div>
        <input 
          placeholder="Ingresa lo que hoy comes"
          value={nuevaComida}
          onChange={handleNuevaComida} />
        
        <button
          onClick={()=>{
            handleAgregarComida(nuevaComida)
          }}
        > 
          Guardar
        </button>
    </div>
  )
}
