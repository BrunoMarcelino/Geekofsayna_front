import React from 'react';
import './register.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: '', email: '' ,pwd:'',connecte:false}
        this.handleChange = this.handleChange.bind(this)
    }
    renderRedirect = () => {
        if (this.state.connecte) {
            console.log(localStorage.getItem('connecte'));
            
          return <Redirect to='/dashboard' />
        }
      }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })  
    }

   enregistrement(e) {
        const action = { type: "REGISTER", value: e }
        this.props.dispatch(action)
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
                                            <center>
                                                        <img id="image-login" src="../images/logo.png" alt="logoimage" />
                                                    </center>
                                                <form>
                                                    <div className="group">
                                                        <label for="user" className="label">Nom d'utilisateur</label>
                                                        <input id="un" type="text" className="input" name="userName" placeholder="nom d'utilisateur" />
                                                    </div>
                                                    <div className="group">
                                                        <label for="user" className="label">E-mail:</label>
                                                        <input id="ml" type="email" className="input" name="email" placeholder="exemple@exemple.com" />
                                                    </div>

                                                    <div className="group">
                                                        <label for="user" className="label">Mot de passe:</label>
                                                        <input id="pw" type="passWord" className="input" name="passWord" placeholder="********" />
                                                    </div>

                                                    <div className="group">
                                                        <label for="pass" className="label">Confirmer mot de passe:</label>
                                                        <input id="" type="passWord" className="input" data-type="passWord" name="pwd" placeholder="********" />
                                                    </div>
                                                    <p id='pass'></p>
                                                    
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
        listeArticle: state.listeArticle
    }
}
export default connect(mapStateToProps)(Register)
