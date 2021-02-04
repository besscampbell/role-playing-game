import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {addCharToState, changeCharState, pilotDefaultValues,promQueenDefaultValues, androidDefaultValues, blorgonDefaultValues, timeTravelerDefaultValues, updateStateObj, promKingEnemyDefaultValues, mysticalCloudEnemyDefaultValues, badSantaEnemyDefaultValues, borgEnemyDefaultValues, evilDawnEnemyDefaultValues} from './js/character.js';
/* eslint-disable */

$(document).ready(function() {
    $("#rpgForm").submit(function(event) {
        event.preventDefault();
        const characterName = $('#characterName').val();
        const characterType = $('#dropDownCharacter').val();
        $("#rpgForm").hide();

        /* Populates Arch nemesis after choosing player */

        if(characterType == "pilot"){
            const newUser = addCharToState(pilotDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            /* Character point changes on button click */
            $('#heal').click(function(){
                const heal = changeCharState("lifePoints")(3);
                const newState = updateStateObj(heal, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
            $('#superAttack').click(function(){
                const superAttack = changeCharState("lifePoints")(-3);
                const newState = updateStateObj(superAttack, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
        } else if(characterType == "promQueen"){
            const newUser = addCharToState(promQueenDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type: ${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            /* Character point changes on button click */
            $('#heal').click(function(){
                const heal = changeCharState("lifePoints")(3);
                const newState = updateStateObj(heal, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
            $('#superAttack').click(function(){
                const superAttack = changeCharState("lifePoints")(-3);
                const newState = updateStateObj(superAttack, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
        } else if(characterType == "blorgon"){
            const newUser = addCharToState(blorgonDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type: ${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            /* Character point changes on button click */
            $('#heal').click(function(){
                const heal = changeCharState("lifePoints")(3);
                const newState = updateStateObj(heal, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
            $('#superAttack').click(function(){
                const superAttack = changeCharState("lifePoints")(-3);
                const newState = updateStateObj(superAttack, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
        } else if(characterType == "android"){
            const newUser = addCharToState(androidDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type: ${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            /* Character point changes on button click */
            $('#heal').click(function(){
                const heal = changeCharState("lifePoints")(3);
                const newState = updateStateObj(heal, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
            $('#superAttack').click(function(){
                const superAttack = changeCharState("lifePoints")(-3);
                const newState = updateStateObj(superAttack, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
        } else if(characterType == "timeTraveler"){
            const newUser = addCharToState(timeTravelerDefaultValues)(characterName);
            const newState = updateStateObj(newUser);
            const stateOfUser = newState[characterName];
            $('#hiddenResponse').show();
            $('#showCharacterStats').text(`${characterName}: Character Type: ${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints}, strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            /* Character point changes on button click */
            $('#heal').click(function(){
                const heal = changeCharState("lifePoints")(3);
                const newState = updateStateObj(heal, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
            $('#superAttack').click(function(){
                const superAttack = changeCharState("lifePoints")(-3);
                const newState = updateStateObj(superAttack, characterName);
                const stateOfUser = newState[characterName];
                    $('#showCharacterStats').text(`${characterName}: Character Type:${stateOfUser.characterType}, lifePoints: ${stateOfUser.lifePoints},  strength: ${stateOfUser.strength}, intelligence: ${stateOfUser.intelligence}, agility: ${stateOfUser.agility}, snark: ${stateOfUser.snark}, charm: ${stateOfUser.charm} `);
            });
        } else {
            $("#hiddenResponse").show();
            $("#showErrors").text("Please try again");
        }
    });

    /* Shows "Battlefield", Chosen Character & Chosen Arch nemesis */

    $('#fightButton').click(function(event){
        event.preventDefault();
        $('#hiddenResponse').hide();
        $('#battleFieldHidden').show();
        const enemy = $('#dropDownEnemies').val();
        if(enemy == "promKing"){
            const newEnemy = addCharToState(promKingEnemyDefaultValues)("Prom King");
            const newState = updateStateObj(newEnemy);
            const stateOfEnemy = newState["Prom King"];
            // $('#battleFieldHidden').show();
            $('#showEnemyStats').text(`Prom King : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);

            /* Enemy point changes on button click */
            $('#quickHit').click(function(){
                const quickHit = changeCharState("lifePoints")(-1);
                const newState = updateStateObj(quickHit, "Prom King");
                const stateOfEnemy = newState["Prom King"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
            $('#superAttack').click(function(){
                const quickHit = changeCharState("lifePoints")(-5);
                const newState = updateStateObj(quickHit, "Prom King");
                const stateOfEnemy = newState["Prom King"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
        } else if(enemy == "mysticalCloud"){
            const newEnemy = addCharToState(mysticalCloudEnemyDefaultValues)("Mystical Cloud");
            const newState = updateStateObj(newEnemy);
            const stateOfEnemy = newState["Mystical Cloud"];
            $('#battleFieldHidden').show();
            $('#showEnemyStats').text(`${"Mystical Cloud"}: Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints}, strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);

            /* Character point changes on button click */
            $('#quickHit').click(function(){
                const quickHit = changeCharState("lifePoints")(-1);
                const newState = updateStateObj(quickHit, "Mystical Cloud");
                const stateOfEnemy = newState["Mystical Cloud"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
            $('#superAttack').click(function(){
                const quickHit = changeCharState("lifePoints")(-5);
                const newState = updateStateObj(quickHit, "Mystical Cloud");
                const stateOfEnemy = newState["Mystical Cloud"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
        } else if(enemy == "badSanta"){
            const newEnemy = addCharToState(badSantaEnemyDefaultValues)("Bad Santa");
            const newState = updateStateObj(newEnemy);
            const stateOfEnemy = newState["Bad Santa"];
            $('#battleFieldHidden').show();
            $('#showEnemyStats').text(`${"Bad Santa"}: Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints}, strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);

            /* Character point changes on button click */
            $('#quickHit').click(function(){
                const quickHit = changeCharState("lifePoints")(-1);
                const newState = updateStateObj(quickHit, "Bad Santa");
                const stateOfEnemy = newState["Bad Santa"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
            $('#superAttack').click(function(){
                const quickHit = changeCharState("lifePoints")(-5);
                const newState = updateStateObj(quickHit, "Bad Santa");
                const stateOfEnemy = newState["Bad Santa"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
        } else if(enemy == "borg"){
            const newEnemy = addCharToState(borgEnemyDefaultValues)("Borg");
            const newState = updateStateObj(newEnemy);
            const stateOfEnemy = newState["Borg"];
            $('#battleFieldHidden').show();
            $('#showEnemyStats').text(`${"Borg"}: Character Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints}, strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);

            /* Character point changes on button click */
            $('#quickHit').click(function(){
                const quickHit = changeCharState("lifePoints")(-1);
                const newState = updateStateObj(quickHit, "Borg");
                const stateOfEnemy = newState["Borg"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
            $('#superAttack').click(function(){
                const quickHit = changeCharState("lifePoints")(-5);
                const newState = updateStateObj(quickHit, "Borg");
                const stateOfEnemy = newState["Borg"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
        } else if(enemy == "evilDawn"){
            const newEnemy = addCharToState(evilDawnEnemyDefaultValues)("Evil Dawn");
            const newState = updateStateObj(newEnemy);
            const stateOfEnemy = newState["Evil Dawn"];
            $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);

            /* Character point changes on button click */
            $('#quickHit').click(function(){
                const quickHit = changeCharState("lifePoints")(-1);
                const newState = updateStateObj(quickHit, "Evil Dawn");
                const stateOfEnemy = newState["Evil Dawn"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
            $('#superAttack').click(function(){
                const quickHit = changeCharState("lifePoints")(-5);
                const newState = updateStateObj(quickHit, "Evil Dawn");
                const stateOfEnemy = newState["Evil Dawn"];
                    $('#showEnemyStats').text(`Evil Dawn : Enemy Type: ${stateOfEnemy.characterType}, lifePoints: ${stateOfEnemy.lifePoints},  strength: ${stateOfEnemy.strength}, intelligence: ${stateOfEnemy.intelligence}, agility: ${stateOfEnemy.agility}, snark: ${stateOfEnemy.snark}, charm: ${stateOfEnemy.charm} `);
            });
        } else {
            $("#hiddenResponse").show();
            $("#showErrors").text("Please try again");
        }
    });
});