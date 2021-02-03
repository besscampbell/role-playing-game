import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {addCharToState, pilotDefaultValues,promQueenDefaultValues, androidDefaultValues, blorgonDefaultValues, timeTravelerDefaultValues, updateStateObj} from './js/character.js';
/* eslint-disable */

$(document).ready(function() {
    $("#rpgForm").submit(function(event) {
        event.preventDefault();
        const characterName = $('#characterName').val();
        const characterType = $('#dropDownCharacter').val();
        console.log(characterType);
        if(characterType == "pilot"){
            const newUser = addCharToState(pilotDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            console.log(newState);
        } else if(characterType == "promQueen"){
            const newUser = addCharToState(promQueenDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type: ${stateOfUser.characterType}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            console.log(newState);
        } else if(characterType == "blorgon"){
            const newUser = addCharToState(blorgonDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type: ${stateOfUser.characterType}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            console.log(newState);
        } else if(characterType == "android"){
            const newUser = addCharToState(androidDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type: ${stateOfUser.characterType}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            console.log(newState);
        } else if(characterType == "timeTraveler"){
            const newUser = addCharToState(timeTravelerDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type: ${stateOfUser.characterType}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            console.log(newState);
        } else {
            $("#hiddenResponse").show();
            $("#showErrors").text("Please try again");
        }
  });
});