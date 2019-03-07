import React from 'react';

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="login-page">
                <h1>Login</h1>
                <form>
                    <input 
                        type="text" 
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.changeHandler} 
                    />

                    <input 
                        type="text" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changeHandler} 
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;