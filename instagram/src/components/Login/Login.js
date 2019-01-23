import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: ''
        };
    }

    userLogin = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        window.location.reload();
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Instagram</h2>
                </div>
                <div>
                    <input 
                        type='username'
                        placeholder='Username'
                        name='username'
                        onChange={this.handleChanges}
                        value={this.state.username}
                        required
                    />
                    <input 
                        type='password'
                        placeholder='Password'
                        value={this.state.password}
                        name='password'
                        onChange={this.handleChanges}
                        required
                    />
                    <button
                        type='submit'
                        value='Login'
                        onClick={this.userLogin}
                    >Login</button>
                </div>
            </div>
        )
    }
}

export default Login;