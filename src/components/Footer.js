import React, {PureComponent} from "react";

class Footer extends PureComponent {

    render() {
        return <footer><h1>{this.props.text}</h1></footer>
    }
}

export default Footer;
