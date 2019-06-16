import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    state = {
        deconnecter: localStorage.getItem('connecte')
    }

    renderRedirect = () => {
        return <Redirect to='/login' />
    }

    deconnecter = () => {
        localStorage.removeItem('connecte')
        this.setState({
            deconnecter: false
        })
    }
    
    render() {
        return (
            (localStorage.getItem('connecte')) ?
            <div>
                Welcome from Dashboard {localStorage.getItem('nom')}
                <br/>
                <button onClick={this.deconnecter}>Deconnexion</button>
            </div>
                : <div>{this.renderRedirect()}</div>
                        );
    }
}

export default Dashboard;