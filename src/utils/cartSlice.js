import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
           state.items.push(action.payload);
         //    adding items to the cart. We don't need to return anyting from this function it will directly modify the slice.
        },
        clearCart: (state) => {
            state.items = [];
            //     clearing the cart. We don't need to return anyting from this function it will directly modify the slice.
        },
        removeItem: (state, action) => {
           state.items.pop();
        //    removing item form the last.
        }
    }
});
export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;