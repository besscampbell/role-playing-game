export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return(stateChangeFunction = state => state, characterName) => {
    const newState = stateChangeFunction(currentState, characterName);
    currentState = {...newState};
    return newState;
  }
}

export const updateStateObj = storeState();