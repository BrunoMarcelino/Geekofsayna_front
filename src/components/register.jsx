import React from 'react';
import './register.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userName: '', email:'', passWord: '' , pwd:'', redirect: false }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    validRegister(e) {
        const action = { type: "REGISTER", value: e }
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
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <div className="login-wrap">
                <div className="login-html">
                    <div className="login-form">
                        <div className="sign-in-htm">
                            {/* formulaire inscription  */}
                            <div className="sign-up-htm">
                            {this.renderRedirect()}
                                <form onSubmit={(e) => {
                                                //e.preventDefault()
                                                this.setRedirect()
                                                this.validRegister({
                                                nom: this.state.userName,
                                                email: this.state.email,
                                                password: this.state.passWord,
                                                pwd: this.state.pwd
                                            })
                                        }}>
                                    <div className="hr"></div>
                                    <h4>INSCRIPTION</h4>
                                    <div className="group">
                                        <label for="user" className="label">Nom d'utilisateur</label>
                                        <input id="un" type="text" className="input" name="userName" placeholder="nom d'utilisateur"  onChange={this.handleChange} value={this.state.text}/>
                                    </div>
                                    <div className="group">
                                        <label for="user" className="label">E-mail:</label>
                                        <input id="ml" type="email" className="input" name="email" placeholder="exemple@exemple.com"  onChange={this.handleChange} value={this.state.text}/>
                                    </div>

                                    <div className="group">
                                        <label for="user" className="label">Mot de passe:</label>
                                        <input id="pw" type="passWord" className="input" name="passWord" placeholder="********"  onChange={this.handleChange} value={this.state.text}/>
                                    </div>

                                    <div className="group">
                                        <label for="pass" className="label">Confirmer mot de passe:</label>
                                        <input id="" type="passWord" className="input" data-type="passWord" name="pwd" placeholder="********" onChange={this.handleChange} value={this.state.text}/>
                                    </div>
                                    <p id='pass'></p>
                                    <br />
                                    <div className="group">
                                        <button className="button" id="boutton">S'inscrire</button>
                                    </div>
                                </form>
                            </div>

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
export default connect(mapStateToProps)(Register)