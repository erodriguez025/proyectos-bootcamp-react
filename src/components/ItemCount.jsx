import React, { useState } from 'react'

export default function ItemCount( { stock, initial, onAdd} ) {
    const [contador, setContador] = useState(initial);

    const sumar = ()=> {
        if (contador < stock){
          setContador(contador + 1)
        }
    }

    const restar = ()=> {
        if (contador > 0){
          setContador(contador - 1)
        }
    }

  return (
    <div>
        <h4>Libro: Las crónicas de Narnia 📚</h4>
        <nav>
          <button onClick={restar} disabled={contador===0} >-</button>
          <button onClick={sumar} disabled={contador===stock}>+</button>
        </nav>
        <h4>{contador}</h4>
        <button type="button" class="btn btn-primary" data-bs-toggle="button">Agregar al carrito</button>
    </div>
  )
}
