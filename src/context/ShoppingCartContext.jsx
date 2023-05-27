import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import React from 'react' ;


const ShoppingCartContext = createContext({});
export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    function getItemQuantity(id) {
        var _a;
        return ((_a = cartItems.find(item => item.id === id)) === null || _a === void 0 ? void 0 : _a.quantity) || 0;
    }
    function increaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return Object.assign(Object.assign({}, item), { quantity: item.quantity + 1 });
                    }
                    else {
                        return item;
                    }
                });
            }
        });
    }
    function decreaseCartQuantity(id) {
        setCartItems(currItems => {
            var _a;
            if (((_a = currItems.find(item => item.id === id)) === null || _a === void 0 ? void 0 : _a.quantity) === 1) {
                return currItems.filter(item => item.id !== id);
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return Object.assign(Object.assign({}, item), { quantity: item.quantity - 1 });
                    }
                    else {
                        return item;
                    }
                });
            }
        });
    }
    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        });
    }
    return (React.createElement(ShoppingCartContext.Provider, { value: {
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity,
        } },
        children,
        React.createElement(ShoppingCart, { isOpen: isOpen })));
}
