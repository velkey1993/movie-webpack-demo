import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function App({imageId, headerText}) {
    return (
        <div id={imageId}>
            <Navbar/>
            <Header text={headerText}/>
            <Main text={"Main"}/>
            <Sidebar text={"Sidebar"}/>
            <Footer text={"Footer"}/>
        </div>
    );
}

export default App;
