import React from 'react';
import { Redirect } from 'react-router-dom'

class DashBoard extends React.Component {
    renderRedirect = () => {
       
        if(localStorage.removeItem('connectee')){
             return <Redirect to='/login' />
        }
         
        
      }
    render() {
        return (
            <div>dashBoard
                {this.renderRedirect()}
                <button onClick={
                    localStorage.removeItem('connecte')
                    
                }>deconnexion</button>
            </div>
         )
    }
}
export default DashBoard