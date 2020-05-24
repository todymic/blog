import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {FooterApp} from "./layout/Footer";
import {Header} from "./layout/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <FooterApp/>
        </div>
    );
}

export default App;
