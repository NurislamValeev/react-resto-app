const initialState = {
   menu: [],
   loading: true,
   errorMessage: ''
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'MENU-LOADED':
         return {
            menu: action.payload,
            loading: false,
            errorMessage: state.errorMessage
         }

      case 'MENU-REQUESTED':
         return {
            menu: state.menu,
            loading: true,
            errorMessage: state.errorMessage
         }

      case 'MENU-FAILED':
         return {
            menu: state.menu,
            loading: false,
            errorMessage: 'Something went wrong'
         }

      default:
         return state
   }
}

export default reducer