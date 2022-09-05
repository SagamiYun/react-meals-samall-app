import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,

    addItem: (meal: any) => {},
    removeItem: (meal: any) => {}
});

export default CartContext;