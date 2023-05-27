import { Routes, Route } from "react-router-dom";
import React from 'react';
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import {ContactForm} from "./pages/ContactForm";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
    return (
      React.createElement(ShoppingCartProvider, null,
        React.createElement(Navbar, null),
        React.createElement(Container, { className: "mb-4" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "/store", element: React.createElement(Store, null) }),
                React.createElement(Route, { path: "/ContactForm", element: React.createElement(ContactForm, null) })))));
}
export default App;