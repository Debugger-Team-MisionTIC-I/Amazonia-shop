require ('dotenv').config();

const Server = require ('./models/server');
const server = new Server();

server.listen();

import { useState, useEffect } from "react";

// import WebFont from "webfontloader"
// WebFont.load({
//     google: {
//         families: ["Roboto:300,400,500,700"]
//     }

// Router
import AppRouter from "./app/AppRouter/AppRouter";

// Styles
import "./styles/app.css";

function App() {
    const [isFontReady, setIsFontReady] = useState(false);

    const isFontLoaded = () => {
        document.fonts.ready.then(setIsFontReady(true));
    };

    useEffect(() => {
        isFontLoaded();
    }, []);

    return isFontReady && <AppRouter />;
}

export default App;
