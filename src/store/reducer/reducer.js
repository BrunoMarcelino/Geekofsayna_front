import axios from 'axios';

const initialState = {
    user: [{
            connecter: false,
            nom: '',
            email: '',
            password: '',
            pwd: ''
        }


    ]
}


function connexion(state = initialState, action) {
    let nextState = [0]
    switch (action.type) {

        case 'LOGIN':
            axios.post('http://localhost:8080/login', action.value)
                .then((res) => {
                    console.log('res', res);
                    console.log(action.value);

                    if (res.data == 'succes') {
                        localStorage.setItem('nom', action.value.nom);
                        localStorage.setItem('connecte', true);

                    }
                })
                .catch((res) => {
                    console.log('andrana ', res);
                })
            return nextState

        case 'REGISTER':
            axios.post('http://localhost:8080/', action.value)
                .then((res) => {
                    console.log('res', res);
                    console.log(action.value);

                    if (res.data == 'succes') {
                        localStorage.setItem('nom', action.value.nom);
                        localStorage.setItem('connecte', true);

                    }
                })
                .catch((res) => {
                    console.log('andrana ', res);
                })
            return nextState
        default:
            return state

    }
}

export default connexion