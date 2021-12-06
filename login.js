import React from 'react';

export default class Login extends React.Component {
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
            <form>
                <h3> Login </h3>
                <br />
                <label> username:
                    <input name="username" type="text" placeholder="enter username..." onChange={this.handleInputChange} />
                </label>
                <br />
                <label> password: 
                    <input name="username" type="text" placeholder="enter password..." onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}