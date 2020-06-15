import React from "react";
import {render} from "react-dom";
import App from "../components/App";

const Index = () => {
    return <App imageId={"bird-image"} headerText={"Index"}/>
}

render(
    <Index/>,
    document.getElementById("react-target")
)
