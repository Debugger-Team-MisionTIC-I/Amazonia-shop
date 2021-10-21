import React from "react";

// Components
import Navbar from "./components/Navbar/Navbar";
import NewProduct from "./components/NewProduct/NewProduct";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";

// Styles
import "./products.css";

const Products = () => {
    return (
        <div className="productsPage">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="productsPageContainer">
                <div className="newProduct">
                    <NewProduct />
                </div>

                <div className="productList">
                    <ProductList />
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Products;
