import api from '../../services/api';
import { addCars, addCar } from '../ducks/cars';
import { login } from '../ducks/auth';
import { addMessage } from '../ducks/layout';

export const getAllCars = () => {
    return (dispatch) => {
        api.get('/cars')
            .then(response => {
                dispatch(addCars(response.data));
            })
            .catch(console.log);
    };
};

export const addCarFetch = (car) => {
    return (dispatch) => {
        api.post('/cars', car).then(response => {
            dispatch(addCar(response.data));
        }).catch(console.log);
    }
}

export const authLogin = (user) => {
    return (dispatch) => {
        api.post('/login', user).then(response => {
            localStorage.setItem('token', response.data.token);
            dispatch(login());

            window.location.pathname = '/add';
        }).catch(error => {
            const errMsg = error.response.data.message;

            dispatch(addMessage(errMsg));
        });
    }
}