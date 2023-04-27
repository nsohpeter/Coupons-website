import { createSlice } from '@reduxjs/toolkit'

import { productData } from '../../productsData'

const allCategory = ["all", ...new Set(productData.map((item) => item.category))];

const initialState = {
    isSidebarOpen: false,
    productList: productData,
    categories: allCategory,
    isModalOpen: false
}
export const SidebarSlice = createSlice({
    name: 'Sidebar',
    initialState,
    reducers: {
        openModal: (State) => {
            State.isModalOpen = true
        },
        closeModal: (State) => {
            State.isModalOpen = false
        },
        //Sidebar reducers
        openSidebar: (State) => {
            State.isSidebarOpen = true
        },
        closeSidebar: (State) => {
            State.isSidebarOpen = false
        },
        // category reducers
        filterCategory: (State, action) => {
            const category = action.payload
            if (category === "all") {
                State.productList = productData
            } else {
                const newCategory = productData.filter((item) => item.category === category)
                State.productList = newCategory;
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal, openSidebar, closeSidebar, filterCategory } = SidebarSlice.actions

export default SidebarSlice.reducer