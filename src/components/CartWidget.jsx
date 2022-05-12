import React from 'react'
import Carro from './img/carros.png'
import './CartWidget.css'

export default function CartWidget() {
  return (
      <div>
          <img src={Carro} alt="ShoppingCart" />
      </div>
  )
}
