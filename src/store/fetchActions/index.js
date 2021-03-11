import api from '../../services/api';
import { addCars, addCar } from '../ducks/cars';

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