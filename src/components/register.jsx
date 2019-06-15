import React from 'react';
import './register.css'

class Register extends React.Component {
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
                                <form>
                                    <div className="hr"></div>
                                    <h4>INSCRIPTION</h4>
                                    <div className="group">
                                        <label for="user" className="label">Nom d'utilisateur</label>
                                        <input id="un" type="text" className="input" name="userName" placeholder="nom d'utilisateur"  />
                                    </div>
                                    <div className="group">
                                        <label for="user" className="label">E-mail:</label>
                                        <input id="ml" type="email" className="input" name="email" placeholder="exemple@exemple.com"  />
                                    </div>

                                    <div className="group">
                                        <label for="user" className="label">Mot de passe:</label>
                                        <input id="pw" type="passWord" className="input" name="passWord" placeholder="********"  />
                                    </div>

                                    <div className="group">
                                        <label for="pass" className="label">Confirmer mot de passe:</label>
                                        <input id="" type="passWord" className="input" data-type="passWord" name="pwd" placeholder="********" />
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

export default Register;