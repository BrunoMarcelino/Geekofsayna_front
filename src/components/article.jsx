import React from 'react';
import { connect } from 'react-redux'

class Article extends React.Component {


    constructor(props) {
        super(props);
        this.state = { 
          reponse: "",
          comment:[]
           };
      }

    
    callAPI() {
        fetch("http://localhost:8080/article")
            .then(res => res.json())
            .then(res =>{  
                console.log("res",res);
                for(let i=0;i<res.length;i++){
                    if(res[i]._id==this.props.match.params.id){
                        console.log(res[i]);
                        this.setState({ reponse: res[i],
                            comment:res[i].comment
                         })
                        console.log("state ",this.state.comment);
                    }
                }
                
               });
            
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.callAPI();

    }
    render() {
        return (
            <div>
               <div>{this.state.reponse.nom}</div> 
               <div>{this.state.reponse.article}</div>
                 <div>{this.state.comment.length>0?<div>{this.state.comment.map((com)=>{
                     return <div>
                         <div>
                             nom : {com.nom}
                         </div>
                         <div>
                             commentaire : {com.commentaire}
                         </div>
                     </div>
                 })}</div>:""}</div>
                            
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listeArticle: state.listeArticle
    }
}
export default connect(mapStateToProps)(Article)