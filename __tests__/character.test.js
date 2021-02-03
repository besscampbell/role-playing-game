import { updateStateObj, defaultValues, addCharToState, changeCharState } from '../src/character.js';

//required for full line coverage - similar to constructor tests in OOP
describe('character', () => {

  test("should test that state exists", ()=> {
    expect(updateStateObj()).toEqual({});
  });

  test("should show character added state,", ()=> {
      const test = addCharToState(defaultValues)("test")
      expect(updateStateObj(test)).toEqual({test:{strength: 0, intelligence: 0, snark: 0, charm: 0, agility: 0, characterType: ""}});
  });

    test("should change character state", () => {
        const test = addCharToState(defaultValues)("test")
        const test2 = changeCharState("snark")(4);
        const testState = updateStateObj(test2, "test");
        expect(testState).toEqual({test:{strength: 0, intelligence: 0, snark: 4, charm: 0, agility: 0, characterType: ""}});
    })
});

// const blueFood = changePlantState("soil")(5);
// const newState3 = updateStateObj(blueFood, "Norman");



// describe('changeState', () => {
//   test("This will test that state exists", () => {
//     expect(stateControl()).toEqual({});
//   });

//   test("This will test that state is being changed.", () => {
//     // const stateControl = storeState();
//     const test = changeState("test")(1);
//     expect(stateControl(test)).toEqual({test:1});
//   });
// });