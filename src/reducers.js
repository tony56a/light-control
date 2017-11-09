import { combineReducers } from 'redux';
import {
  SET_LIGHT_RANDOM,
  SET_LIGHT_LCOLOR,
  SET_LIGHT_RCOLOR,
} from './actions';

const lightState = (state = [], action) => {
  switch (action.type) {
    case SET_LIGHT_RANDOM:
      return state.map(lightState =>
        (lightState.index === action.index) 
          ? {...lightState, isRandom: action.isRandom}
          : lightState
      )
    case SET_LIGHT_LCOLOR:
      return state.map(lightState =>
        (lightState.index === action.index) 
          ? {...lightState, lColor: action.color}
          : lightState
      )
    case SET_LIGHT_RCOLOR:
      return state.map(lightState =>
        (lightState.index === action.index) 
          ? {...lightState, rColor: action.color}
          : lightState
      )
    default:
      return state
  }
}

const lightStateApp = combineReducers({
  lightState,
})

export default lightStateApp