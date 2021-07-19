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

export {menuLoaded, menuRequested, menuFailed}