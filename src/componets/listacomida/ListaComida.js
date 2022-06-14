import { useState } from "react"

import {Platillo}  from "./Platillo"
import { Input } from "./Input"

export const ListaComida = () => {
    const [comidas,setComidas] =useState([
        {
            id:1,
            lapapa:'arepas'
        },
        {
            id:2,
            lapapa:'Pozole'
        },
        {
            id:3,
            lapapa:'Chalupas'
        },
])

const handleAgregarComida = (inputComida) =>{
    setComidas([...comidas,{id:4, lapapa:inputComida}])
}

  return (
    <div>
        <h2>Lista de comida:</h2>
        {comidas.map(unacomida=><Platillo key={unacomida.id} comida={unacomida} />)}
        <Input handleAgregarComida={handleAgregarComida} />
    </div>
  )
}
