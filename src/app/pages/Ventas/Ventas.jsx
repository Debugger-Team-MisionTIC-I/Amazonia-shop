import React from "react";

// Components
import Navbar from "../Products/components/Navbar/Navbar";
import NewVenta from "./components/NewVenta/NewVenta";
import ListVentas from "./components/ListVentas/ListVentas";
import Footer from "../Products/components/Footer/Footer";

// Styles
import "./ventas.css";

const Ventas = () => {
    return (
        <div className="productsPage">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="productsPageContainer">
                <div className="newProduct">
                    <NewVenta />
                </div>

                <div className="productList">
                    <ListVentas />
                </div> 
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Ventas;
