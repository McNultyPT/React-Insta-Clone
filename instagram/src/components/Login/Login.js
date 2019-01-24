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
                <img src='https://i1.sndcdn.com/artworks-000146899184-z2d199-t500x500.jpg' />'
                <div className='loginCont'>
                    <div className='headerCont'>
                        <h2>Insta</h2>
                        <img src='https://static1.fjcdn.com/comments/Victim+blam+_1e769e2bbdc2c42861767356de0be360.jpg' />
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