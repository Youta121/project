import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import React from 'react';
export function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart();
    return (React.createElement(Offcanvas, { show: isOpen, onHide: closeCart, placement: "end" },
        React.createElement(Offcanvas.Header, { closeButton: true },
            React.createElement(Offcanvas.Title, null, "Cart")),
        React.createElement(Offcanvas.Body, null,
            React.createElement(Stack, { gap: 3 },
                cartItems.map(item => (React.createElement(CartItem, Object.assign({ key: item.id }, item)))),
                React.createElement("div", { className: "ms-auto fw-bold fs-5" },
                    "Total",
                    " ",
                    formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id);
                        return total + ((item === null || item === void 0 ? void 0 : item.price) || 0) * cartItem.quantity;
                    }, 0)))))));
}
