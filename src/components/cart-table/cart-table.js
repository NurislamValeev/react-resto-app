import React from 'react'
import './cart-table.scss'
import {connect} from 'react-redux'
import {deletedFromCart} from "../../actions"
import { v4 as uuidv4 } from 'uuid'

const CartTable = ({items, deletedFromCart}) => {

   return (
      <>
         <div className="cart__title">Ваш заказ:</div>
         <div className="cart__list">
            {
               items.map(item => {
                  const {title, price, url, id} = item
                  return (
                     <div key={uuidv4()} className="cart__item">
                        <img src={url} className="cart__item-img" alt={title}/>
                        <div className="cart__item-title">{title}</div>
                        <div className="cart__item-price">{price}$</div>
                        <div className="cart__item-quantity">Количество: 1</div>
                        <div onClick={() => deletedFromCart(id)} className="cart__close">&times;</div>
                     </div>
                  )
               })
            }

         </div>
      </>
   )
}

const mapStateToProps = ({items}) => {
   return {
      items
   }
}

const mapDispatchToProps = {
   deletedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)