export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return(stateChangeFunction = state => state, characterName) => {
    const newState = stateChangeFunction(currentState, characterName);
    currentState = {...newState};
    return newState;
  }
}

export const updateStateObj = storeState();

export const defaultValues = {strength: 0, intelligence: 0, snark: 0, charm: 0, agility: 0, characterType: ""}

//fxn factory for default values of characters
export const addCharToState = (defaultValues) => {
    return (characterName) => {
        return (state) => ({
            ...state,
            [characterName] : defaultValues
        })
    }
}

//state the object applying change to
export const changeCharState = (prop) => {
  return (value) => {
    return (state, characterName) => ({
      ...state,
      [characterName] : { ...state[characterName], [prop]: (state[characterName][prop] || 0) + value}
    })
  }
}