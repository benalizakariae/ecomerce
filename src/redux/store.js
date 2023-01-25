import {createStore} from 'redux'
import carteReducer from'./reducer/carteReducer'
const store= createStore(carteReducer)
export default store;