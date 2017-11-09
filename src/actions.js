/*
 * action types
 */

export const SET_LIGHT_RANDOM = 'SET_LIGHT_RANDOM';
export const SET_LIGHT_LCOLOR = 'SET_LIGHT_LCOLOR';
export const SET_LIGHT_RCOLOR = 'SET_LIGHT_RCOLOR';

export const setLightRandom = (randomFlag, index) => {
  return {
    type: SET_LIGHT_RANDOM,
    index,
    randomFlag
  };
};

export const setLightLColor = (color, index) => {
  return {
    type: SET_LIGHT_LCOLOR,
    index,
    color
  };
};

export const setLightRColor = (color, index) => {
  return {
    type: SET_LIGHT_LCOLOR,
    index,
    color
  };
};