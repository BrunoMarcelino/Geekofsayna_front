import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          reponse: [],
          redirect: false,
        id:""
           };
      }

      setRedirect = (id) => {
        this.setState({
          redirect: true,
            id:id
        })
      }

     


      renderRedirect = () => {
        if (this.state.redirect) {
            var url='/article/'+this.state.id
          return <Redirect to={url} />
        }
      }


    componentDidMount(){
        this.callAPI();  
    }

    
    callAPI() {
        fetch("http://localhost:8080/article")
            .then(res => res.json())
            .then(res =>{  
                console.log("res",res);
                
                this.setState({ reponse: res })});
            
    }
  
    render() {
        return (
            <div>
                {this.renderRedirect()}
               {this.state.reponse.length>0?this.state.reponse.map((art) => {
                    return <div>
                       <div>nom :{art.nom}</div>
                       <div>article :{art.article}</div>

                       <div>commentaire :{art.comment.map((com)=>{
                           return <div>
                               <div>comment de {com.nom}</div>
                               <div>le commentaire :{com.commentaire}</div>
                           </div>
                       })}</div>
                       <button onClick={()=>this.setRedirect(art._id)}>voir</button>
                       
                    </div>
               }

                ):""} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listeArticle: state.listeArticle
    }
}
export default connect(mapStateToProps)(Home)