const INITIAL_STATE = [
  {
    name: 'Ferrari',
    url: 'https://media.gazetadopovo.com.br/2018/08/1010a681f3fe54684026a26987c78193-gpMedium.jpg'
  },
  {
    name: 'Lambo',
    url: 'https://media.gazetadopovo.com.br/2018/08/1010a681f3fe54684026a26987c78193-gpMedium.jpg'
  },
  {
    name: 'Porshe',
    url: 'https://media.gazetadopovo.com.br/2018/08/1010a681f3fe54684026a26987c78193-gpMedium.jpg'
  },
]

export default function reducer (state = INITIAL_STATE, action) {
  if (action.type === 'ADD_CAR') {
    return [...state, action.car];
  }
  return state;
}

export const addCAR = (car) => {
  return {
    type: 'ADD_CAR',
    car,
  }
}