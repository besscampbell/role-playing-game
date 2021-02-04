import { updateStateObj, androidDefaultValues, addCharToState, changeCharState } from '../src/js/character.js';

//required for full line coverage - similar to constructor tests in OOP
describe('character', () => {

  test("should test that state exists", ()=> {
    expect(updateStateObj()).toEqual({});
  });

  test("should show character added state,", ()=> {
    const test = addCharToState(androidDefaultValues)("test");
    const testState = updateStateObj(test);
    expect(testState).toEqual({test:{strength: 8, intelligence: 10, snark: 1, charm: 1, agility: 7, lifePoints: 10, characterType: "android"}});
  });

    test("should change character state", () => {
        const test2 = changeCharState("strength")(1);
        const testState2 = updateStateObj(test2, "test");
        expect(testState2).toEqual({test:{strength: 9, intelligence: 10, snark: 1, charm: 1, agility: 7, lifePoints: 10, characterType: "android"}});
    });
});