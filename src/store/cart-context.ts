import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,

    cartDispatch: (p: { type: string , meal?: any}) => {},
});

export default CartContext;