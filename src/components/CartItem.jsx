import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import React from 'react' ;

export function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if (item == null)
        return null;
    return (React.createElement(Stack, { direction: "horizontal", gap: 2, className: "d-flex align-items-center" },
        React.createElement("img", { src: item.imgUrl, style: { width: "125px", height: "125px", objectFit: "cover" } }),
        React.createElement("div", { className: "me-auto" },
            React.createElement("div", null,
                item.name,
                " ",
                quantity > 1 && (React.createElement("span", { className: "text-muted", style: { fontSize: ".65rem" } },
                    "x",
                    quantity))),
            React.createElement("div", { className: "text-muted", style: { fontSize: ".75rem" } }, formatCurrency(item.price))),
        React.createElement("div", null,
            " ",
            formatCurrency(item.price * quantity)),
        React.createElement(Button, { variant: "outline-danger", size: "sm", onClick: () => removeFromCart(item.id) }, "\u00D7")));
}
