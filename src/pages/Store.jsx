import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import React from "react";
export function Store() {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Store"),
        React.createElement(Row, { md: 2, xs: 1, lg: 3, className: "g-3" }, storeItems.map(item => (React.createElement(Col, { key: item.id },
            React.createElement(StoreItem, Object.assign({}, item))))))));
}