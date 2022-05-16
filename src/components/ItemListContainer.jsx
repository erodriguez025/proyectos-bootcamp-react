import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import { getItem } from './services/Promise';

export default function ItemListContainer( props) {
  let resultado = props.greeting

  const onAdd=(cantidad)=>{
    alert("Compro: " + cantidad)
  }

  const [productos, setProductos] = useState();

    useEffect(() => {
      getItem().then((res) => setProductos(res));
    }, []);
  

  return (
    <>
      <div>{resultado}</div>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
      {productos &&
        productos.map((producto) => {
          return (
            <div>
              <h4>{producto.name}</h4>
              <p>{producto.description}</p>
              <hr />
            </div>
          );
        })}
    </>
  )
}
