
import React from 'react';

import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./misc/reportWebVitals";

// Styles
import "antd/dist/antd.css";
import "./styles/normalize.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

//settings


//middleware
app.use(morgan('dev'));
app.use(express.json());


//routes
app.user(require('./routes/task.router'));


//static files
app.use(express.static(path.join(__dirname,'public')));



//starting the server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
