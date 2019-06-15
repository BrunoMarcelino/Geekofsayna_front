import React from 'react';
import './register.css';
import { BrowserRouter as  Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
                <div id="totalregister">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="login-wrap">
                                    <div className="login-html">
                                        <div className="login-form">
                                            <div className="sign-in-htm">
                                                <center>
                                                    <img id="image-login" src="../images/logo.png" alt="logoimage" />
                                                </center><br />
                                                <form >
                                                    <div className="group">
                                                        <label for="user" className="label">Nom d'utilisateur</label>
                                                        <input id="user" type="text" className="input" name="userName" />
                                                    </div><br />
                                                    <div className="group">
                                                        <label for="pass" className="label">Mot de passe</label>
                                                        <input id="pass" type="passWord" className="input" name="passWord" />
                                                    </div>
                                                    <br />
                                                    <div className="group">
                                                        <button className="button" id="boutton">Se connecter</button>
                                                    </div>
                                                </form>
                                                <Link to="/register">S'inscrire</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}

export default Login;