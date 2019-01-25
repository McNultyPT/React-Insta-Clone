import React from 'react';
import styled from 'styled-components';

const LoginPageCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

const LoginImg = styled.img`
    height: 500px;
    width: 400px;
    border-radius: 6px;
`;

const LoginCont = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 2px solid lightgrey;
    border-radius: 6px;
    height: 500px;
    width: 400px;
`;

const LoginLogoCont = styled.div`
    display: flex;
`;

const LoginH2 = styled.h2`
    font-size: 50px;
    font-family: Helvetica;
    font-weight: bold;
    margin: 50px 0px;
`;

const LoginLogo = styled.img`
    height: 150px;
    width: 150px;
`;

const LoginInputCont = styled.div`
    display: flex;
    flex-direction: column; 
`;

const LoginInput = styled.input`
    width: 290px;
    height: 35px;
    font-size: 14px;
    margin: 15px 0;
    border: 1px solid lightgrey;
    border-radius: 6px;
    padding-left: 10px;
`;

const LoginButton = styled.button`
    width: 300px;
    height: 50px;
    margin-top: 10px;
    border-radius: 6px;
    border: 2px solid black;
    color: red;
    background-color: yellow;
    font-weight: bold;
    font-size: 16px;

    &:hover {
        color: yellow;
        background-color: red;
        border: 2px solid black;
    }
`;

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
            <LoginPageCont>
                <LoginImg src='https://i1.sndcdn.com/artworks-000146899184-z2d199-t500x500.jpg' />'
                <LoginCont>
                    <LoginLogoCont>
                        <LoginH2>Insta</LoginH2>
                        <LoginLogo src='https://static1.fjcdn.com/comments/Victim+blam+_1e769e2bbdc2c42861767356de0be360.jpg' />
                    </LoginLogoCont>
                    <LoginInputCont>
                        <LoginInput 
                            type='username'
                            placeholder='Username'
                            name='username'
                            onChange={this.handleChanges}
                            value={this.state.username}
                            required
                        />
                        <LoginInput 
                            type='password'
                            placeholder='Password'
                            value={this.state.password}
                            name='password'
                            onChange={this.handleChanges}
                            required
                        />
                        <LoginButton
                            type='submit'
                            value='Login'
                            onClick={this.userLogin}
                        >Login</LoginButton>
                    </LoginInputCont>
                </LoginCont>
            </LoginPageCont>
        )
    }
}

export default Login;