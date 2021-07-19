import React, {Component} from 'react'
import MenuListItem from '../menu-list-item'
import './menu-list.scss'
import {connect} from 'react-redux'
import WithRestoService from "../hoc"
import {menuLoaded, menuRequested, menuFailed} from "../../actions"
import Spinner from "../spinner"

class MenuList extends Component {

   componentDidMount() {
      this.props.menuRequested()

      const {RestoService} = this.props
      RestoService.getMenuItems()
         .then(res => this.props.menuLoaded(res))
         .catch(error => {
            this.props.menuFailed()
         })

   }

   render() {
      const {menuItems, loading, errorMessage} = this.props
      if (loading) {
         return <Spinner/>
      }

      if (errorMessage) {
         return <div>{errorMessage}</div>
      }

      return (

         <ul className="menu__list">
            {
               menuItems.map(menuItem => {
                  return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
               })
            }
         </ul>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      menuItems: state.menu,
      loading: state.loading,
      errorMessage: state.errorMessage
   }
}

const mapDispatchToProps = {
   menuLoaded,
   menuRequested,
   menuFailed
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList))