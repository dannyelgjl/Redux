import { createStore } from 'redux';

const INITIAL_STATE = [
  {
    id: 1,
    name: 'audi'
  },
  {
    id: 2,
    name: 'bmw'
  }
]

const reducer = (state = INITIAL_STATE, action) => {
  return state;
}

export default createStore(reducer);