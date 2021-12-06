import React from "react";
import Login from "./login";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        // const username = target.username;
        // const password = target.password;

        this.setState({
            
        });
    }

    render(){
        return (
            <><nav>
                <div>
                    <ul>
                        <li><a href="#"> Home </a></li>
                        <li><a href="#"> About </a></li>
                        <li><a href="#"> Contact </a></li>
                    </ul>
                </div>
                <br />
                <br />
            </nav><Login /></>
        );
    }
}
        