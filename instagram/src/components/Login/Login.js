import React from 'react';

import './Login.css';

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
            <div className='pageCont'>
                <img src='https://images.pexels.com/photos/1260239/pexels-photo-1260239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />'
                <div className='loginCont'>
                    <div className='headerCont'>
                        <h2>Instagram</h2>
                    </div>
                    <div className='inputCont'>
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
            </div>
        )
    }
}

export default Login;