import React from 'react'
import ItemCount from './ItemCount';

export default function ItemListContainer( props) {
  let resultado = props.greeting

  const onAdd=(cantidad)=>{
    alert("Compro: " + cantidad)
  }


  return (
    <>
      <div>{resultado}</div>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
    </>
  )
}
