import React from "react";
import {render} from "react-dom";
import App from "../components/App";

const Contact = () => {
    return <App imageId={"bird-image"} headerText={"Contact"}/>
}

render(
    <Contact/>,
    document.getElementById("react-target")
)
