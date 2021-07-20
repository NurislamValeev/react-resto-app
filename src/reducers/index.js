const initialState = {
   menu: [],
   loading: true,
   errorMessage: '',
   items: [],
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'MENU-LOADED':
         return {
            ...state,
            menu: action.payload,
            loading: false,
         }

      case 'MENU-REQUESTED':
         return {
            ...state,
            loading: true,
         }

      case 'MENU-FAILED':
         return {
            ...state,
            loading: false,
            errorMessage: 'Something went wrong'
         }

      case 'ITEM-ADD-TO-CART':
         const id = action.payload
         const item = state.menu.find(item => item.id === id)
         const newItem = {
            title: item.title,
            price: item.price,
            url: item.url,
            id: item.id
         }
         return {
            ...state,
            items: [
               ...state.items,
               newItem
            ]
         }

      case 'ITEM-REMOVE-FROM-CART':
         const index = action.payload
         const itemIndex = state.items.findIndex(item => item.id === index)

         return {
            ...state,
            items: [
               ...state.items.slice(0, itemIndex),
               ...state.items.slice(itemIndex + 1)
            ]
         }

      default:
         return state
   }
}

export default reducer