export const storeState = (initialState = {}) => {
  /* eslint-disable-next-line */
  let currentState = initialState;
  return(stateChangeFunction = state => state, characterName) => {
    /* eslint-disable-next-line */
    const newState = stateChangeFunction(currentState, characterName);
    /* eslint-disable-next-line */
    currentState = {...newState};
    return newState;
  };
};

export const updateStateObj = storeState();

export const defaultValues = {strength: 0, intelligence: 0, snark: 0, charm: 0, agility: 0, characterType: ""};

//fxn factory for default values of characters
export const addCharToState = (defaultValues) => {
  return (characterName) => {
    return (state) => ({
      ...state,
      [characterName] : defaultValues
    });
  };
};

//state the object applying change to
export const changeCharState = (prop) => {
  return (value) => {
    return (state, characterName) => ({
      ...state,
      [characterName] : { ...state[characterName], [prop]: (state[characterName][prop] || 0) + value}
    });
  };
};

export const pilotDefaultValues = {strength: 1, intelligence: 6, snark: 7, charm: 8, agility: 9, characterType: "pilot"};

export const promQueenDefaultValues = {strength: 5, intelligence: 3, snark: 8, charm: 10, agility: 2, characterType: "promQueen"};

export const timeTravelerDefaultValues = {strength: 2, intelligence: 8, snark: 5, charm: 2, agility: 6, characterType: "timeTraveler"};

export const blorgonDefaultValues = {strength: 9, intelligence: 1, snark: 2, charm: -3, agility: -2, characterType: "blorgon"};

export const androidDefaultValues = {strength: 8, intelligence: 10, snark: 1, charm: 1, agility: 7, characterType: "android"};