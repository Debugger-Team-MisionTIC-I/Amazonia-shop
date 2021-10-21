import { useState, useEffect } from "react";
// import WebFont from "webfontloader";

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
