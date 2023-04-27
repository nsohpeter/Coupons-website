import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Features/Cart/CartSlice'
import SidebarReducer from './Features/Sidebar/Sidebar'



export default configureStore({
    reducer: {
        Cart: CartReducer,
        Sidebar: SidebarReducer
    }
})