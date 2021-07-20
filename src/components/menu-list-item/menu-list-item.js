import React from 'react'
import './menu-list-item.scss'
import meat from './../../img/meat.png'
import pizza from './../../img/pizza.png'
import salads from './../../img/salads.png'
import { Link } from 'react-router-dom'
export const categoryIconSrc = (category) => {
   switch (category) {
      case "salads":
         return salads

      case "pizza":
         return pizza

      case "meat":
         return meat

      default:
         return null
   }
}

const MenuListItem = ({menuItem}) => {

   const {title, price, url, category, id} = menuItem

   return (
      <li className="menu__item">
         <Link to={`/${id}`}>
            <div className="menu__title">{title}</div>
            <img className="menu__img"
                 src={url}
                 alt={title}>
            </img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <img className="menu__category_icon" src={categoryIconSrc(category)} alt=""/>
            <div className="menu__price">Price: <span>{price}$</span></div>

            <button className="menu__btn">Add to cart</button>

         </Link>
      </li>
   )
}

export default MenuListItem