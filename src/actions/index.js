const menuLoaded = (newMenu) => {
   return {
      type: 'MENU-LOADED',
      payload: newMenu
   }
}

const menuRequested = () => {
   return {
      type: 'MENU-REQUESTED'
   }
}

const menuFailed = () => {
   return {
      type: 'MENU-FAILED'
   }
}

const addedToCart = (id) => {
   return {
      type: 'ITEM-ADD-TO-CART',
      payload: id
   }
}

const deletedFromCart = (id) => {
   return {
      type: 'ITEM-REMOVE-FROM-CART',
      payload: id
   }
}

export {menuLoaded, menuRequested, menuFailed, addedToCart, deletedFromCart}