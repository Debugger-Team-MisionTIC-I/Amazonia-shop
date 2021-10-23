import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Ventas from "../pages/Ventas/Ventas";
import Usuario from "../pages/Usuario/Usuario";

const AppRouter = () => {
    return (
        <Router>
            <Route
                exact
                path="/login"
                render={() => {
                    return <Login />;
                }}
            ></Route>

            <Route
                exact
                path="/products"
                render={() => {
                    return <Products />;
                }}
            ></Route>

            <Route
                exact
                path="/ventas"
                render={() => {
                    return <Ventas />;
                }}
            ></Route>
            <Route
                exact
                path="/usuario"
                render={() => {
                    return <Usuario />;
                }}
            ></Route>

        </Router>
    );
};

export default AppRouter;
