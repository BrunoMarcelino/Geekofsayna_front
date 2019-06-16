import React, { Component } from 'react';

class ModalSection extends Component {

    render() {
        return (
            <div>
                <h3>Ajout des actualités</h3>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Titre</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="titre" />
                        </div>
                    </div>
                    <div class="form-row col-md-6">
                        <label for="inputAddress">Article</label>
                        <textarea type="text" class="form-control" placeholder="article" />
                    </div>
                    <br />
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">Photos</label>
                            <input type="file" class="form-control" id="inputCity" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Publier</button>
                </form>
            </div>
        )
    }
}

export default ModalSection;