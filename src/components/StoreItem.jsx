import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import React from 'react' ;
export function StoreItem({ id, name, price, imgUrl }) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (React.createElement(Card, { className: "h-100" },
        React.createElement(Card.Img, { variant: "top", src: imgUrl, height: "350px", style: { objectFit: "cover" } }),
        React.createElement(Card.Body, { className: "d-flex flex-column" },
            React.createElement(Card.Title, { className: "d-flex justify-content-between align-items-baseline mb-4" },
                React.createElement("span", { className: "fs-2" }, name),
                React.createElement("span", { className: "ms-2 text-muted" }, formatCurrency(price))),
            React.createElement("div", { className: "mt-auto" }, quantity === 0 ? (React.createElement(Button, { className: "w-100", onClick: () => increaseCartQuantity(id) }, "+ Add To Cart")) : (React.createElement("div", { className: "d-flex align-items-center flex-column", style: { gap: ".5rem" } },
                React.createElement("div", { className: "d-flex align-items-center justify-content-center", style: { gap: ".5rem" } },
                    React.createElement(Button, { onClick: () => decreaseCartQuantity(id) }, "-"),
                    React.createElement("div", null,
                        React.createElement("span", { className: "fs-3" }, quantity),
                        " in cart"),
                    React.createElement(Button, { onClick: () => increaseCartQuantity(id) }, "+")),
                React.createElement(Button, { onClick: () => removeFromCart(id), variant: "danger", size: "sm" }, "Remove")))))));
}
