import { createSlice } from '@reduxjs/toolkit'
//import { CartItems } from '../../productsData'
const initialState = {
    CartItems: [],
    amount: 5,
    total: 0,
    isLoading: false
}
export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        ClearCart: (State) => {
            State.CartItems = []
        },

        addToCart: (State, action) => {
            const item = action.payload;
            const existingItem = State.CartItems.find((product) => product.id === item.id)
                //console.log(existingItem.price);
            if (existingItem) {
                existingItem.amount++;
            } else {

                State.CartItems.push({...item, amount: 1 })
            }

        },
        removeItem: (State, actions) => {
            const id = actions.payload
            State.CartItems = State.CartItems.filter((item) => item.id !== id)
        },
        increase: (State, { payload }) => {
            const tempCartItem = State.CartItems.find((item) => item.id === payload.id)
            tempCartItem.amount = tempCartItem.amount + 1;
        },
        decrease: (State, { payload }) => {
            const tempCartItem = State.CartItems.find((item) => item.id === payload.id)
            tempCartItem.amount = tempCartItem.amount - 1;
        },
        CalculateTotals: (State) => {

            let amount = 0;
            let total = 0;
            State.CartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })

            State.amount = amount;
            State.total = parseFloat(total.toFixed(2));
            // let { amount, total } = State.CartItems.reduce((totals, cartItem) => {
            //     const { amount, price } = cartItem

            //     totals.amount += amount
            //     totals.price += amount * price
            //     return totals
            // }, {
            //     total: 0,
            //     amount: 0
            // })
            // total = parseFloat(total.toFixed(2))
            // State.amount = amount
            // State.total = total
        }
    }
})


// Action creators are generated for each case reducer function
export const { ClearCart, removeItem, increase, decrease, CalculateTotals, addToCart } = CartSlice.actions

export default CartSlice.reducer