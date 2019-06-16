import React from 'react';
import './register.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userName: '', passWord: '' , redirect: false }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    validLogin(e) {
        const action = { type: "LOGIN", value: e }
        this.props.dispatch(action)
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (localStorage.getItem('connecte')) {            
            return <Redirect to='/dashboard' />
        }
    }

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
                                            <div className="hr"></div>
                                            {this.renderRedirect()}
                                            <form onSubmit={(e) => {
                                                //e.preventDefault()
                                                this.setRedirect()
                                                this.validLogin({
                                                nom: this.state.userName,
                                                password: this.state.passWord
                                            })
                                        }}>
                                                <h4>CONNEXION</h4><br />
                                                <div className="group">
                                                    <label for="user" className="label">Nom d'utilisateur:</label>
                                                    <input id="user" type="text" className="input" name="userName" onChange={this.handleChange} value={this.state.text}/>
                                                </div><br />
                                                <div className="group">
                                                    <label for="pass" className="label">Mot de passe:</label>
                                                    <input id="pass" type="passWord" className="input" name="passWord" onChange={this.handleChange} value={this.state.text}/>
                                                </div>
                                                <br />
                                                <div className="group">
                                                    <button className="button" id="boutton">Se connecter</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login)