import React from "react";
import {render} from "react-dom";
import App from "../components/App";

const About = () => {
    return <App imageId={"bird-image"} headerText={"About"}/>
}

render(
    <About/>,
    document.getElementById("react-target")
)
