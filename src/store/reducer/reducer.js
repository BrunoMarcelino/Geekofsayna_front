import axios from'axios'

const initialState = {
    listeArticle: [
    ]
  }
  
  function connexion(state = initialState, action) {
    let nextState =[0]
    switch (action.type) {
      case 'GETARTICLE':
          axios.get('http://localhost:8080/')
          .then(function (response) {
            nextState=response.data

            console.log("ttt",nextState);
            return nextState
          })
          .catch(function (error) {
           
            console.log(error);
          })
        
           
       
      case 'REGISTER':
        axios.post('http://localhost:8080/', action.value)
          .then(function (response) {
            localStorage.setItem('connecte',true)

            console.log(response,localStorage.getItem('connectee'));
          })
          .catch(function (error) {
            console.log(error);
          });
          
          
        return nextState
      default:
        return state
    }
  }
  
  export default connexion