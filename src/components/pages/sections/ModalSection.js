import React, { Component } from 'react';

class ModalSection extends Component {

constructor(props) {
    super(props);

    this.state = {
      nom: '',
      titre: '',
      article: '',
    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('nom', this.state.nom);
    data.append('titre', this.state.titre)
    data.append('article', this.state.article)

    fetch('http://localhost:8080/article', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8080/public/${body.file}` });
        console.log('nom', this.state.nom);
      });
    });
}



    render() {
        return (
            <div>
               
                <h3>Ajout des actualités</h3>
                <form onSubmit={this.handleUploadImage}>
                    <div class="form-row">
                        <div className="col-md-3">

                        </div>
                        <div class="form-group">
                            <label for="inputEmail4">Titre</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="titre" name="titre" value={this.state.value} onChange={this.onChange}/>
                            <label for="inputEmail">nom</label>
                            <input type="text" class="form-control" id="inputEmail" placeholder="nom" name="nom" value={this.state.value} onChange={this.onChange}/>
                        
                        </div>
                    </div>
                    <div class="form-row">
                        <label for="inputAddress">Article</label>
                        <textarea type="text" class="form-control" placeholder="article" value={this.state.value} onChange={this.onChange} name="article" />
                    </div>
                    <br />
                    <div class="form-row">
                        <div class="form-group">
                            <label for="inputCity">Photos</label>
                            <input ref={(ref) => { this.uploadInput = ref; }} type="file" class="form-control" id="inputCity" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Publier</button>
                </form>
               
            </div>
        )
    }
}

export default ModalSection;