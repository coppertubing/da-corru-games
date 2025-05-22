// ---- ФУНКЦИИ -----
// делают смешные кодоштучки и не только

function updateDataBeforeUse() {
    for (var i = 0; i < characters.length; i++) {
        doubleCheck();
        characters[i][`beenUsed`] = false;
        currentUnusedCharacterNumber = currentCharacterNumber;
        diedThisCycle = 0;
    }
    if (paraffinChecker == true) {
        paraffinChecker = false;
        paraffinCycles.push(currentState);
    }
} // обновляет данные персов в начале каждого обновления чтобы их снова можно было использовать и прочее

function getRandomAliveCharacter() {
    var randomCharacter;
    do {
        randomCharacter = Math.floor(Math.random() * initialCharacterNumber);
    } while (characters[randomCharacter].alive === false || characters[randomCharacter].beenUsed === true);
    return characters[randomCharacter];
} // возвращает рандомно выбранного ЖИВОГО и НЕИСПОЛЬЗОВАННОГО перса

function getRandomDeadCharacter() {
    var randomCharacter;
    for (var i = 0; i < initialCharacterNumber; i++) {
        randomCharacter = Math.floor(Math.random() * initialCharacterNumber);
        if (characters[randomCharacter].alive === false && characters[randomCharacter].beenUsed === false) return characters[randomCharacter];
    }
    console.error("[getRandomDeadCharacter] Tried to get a dead character when no dead characters were present; returning a stop")
    return "stop";
} // возвращает рандомно выбранного МЕРТВОГО и НЕИСПОЛЬЗОВАННОГО перса

function declareTheDiedThisCycleNumber() {
    const strings = [
        [
            "only 1s participants died todays. Poor guy.",
            "let us congratulate the only participant who died!!",
            "YAYAYAYA 1 guy dead!!",
            "i hope that was not akizet?",
            "only 1 character was dealt with cruelly",
            "rip 1 person",
            "how did they die? Tell me",
            "wow. 1 whole guy died. Thats action",
            "maybe turn up the chance of lethality?",
            "i would call out that murdered guy by their name, but that would be rude",
            "death (singular)",
            "1 (one, unit, unity) is a number, numeral, and glyph. It is the first and smallest positive integer of the infinite sequence of natural numbers. This fundamental property has led to its unique uses in other fields, ranging from science to sports, where it commonly denotes the first, leading, or top thing in a group. 1 is th",
            "we will remember you, dead one (threat) /silly",
            "did you know that 1 is",
            "haha h a <i>ONE</i> /ref",
            "oooooooooooooooone",
            "ONE- *intro music plays* /ref"
        ],
        [
            diedThisCycle + "!!!!!! " + diedThisCycle + "!!!!!!!!!!!!!!",
            "today " + diedThisCycle + " died 👍",
            "oops (" + diedThisCycle + ")",
            "do you think that " + diedThisCycle + " dead is enough?",
            "still, " + diedThisCycle + " is not enough for a real bloodbath",
            diedThisCycle + " will not live to see the next gaze",
            diedThisCycle + " have left velzie's stage",
            "UHhhhhhhUh,ammsnfgh " + diedThisCycle,
            "my favorite number is " + diedThisCycle + ".",
            "every day someone dies. but today " + diedThisCycle + " more guys died",
            "just " + diedThisCycle + "? really?",
            "how sad! " + diedThisCycle + " participants died. they will be back...",
            diedThisCycle,
            diedThisCycle + " participants are a dissapointment today",
            "hehehe. " + diedThisCycle + ".",
            diedThisCycle + " are not there anymore",
            "Guess how many. " + diedThisCycle + "!!!!",
            "wow! " + diedThisCycle + " do not exist anymore!",
            "cruel and unusual punishment for " + diedThisCycle + " people",
            diedThisCycle + " peoples",
            diedThisCycle + " participants are sludgy",
            "damn, " + diedThisCycle + " died",
            "eating " + diedThisCycle + " participants"
        ],
        [
            "cruel and unusual punishment for " + diedThisCycle + " people",
            diedThisCycle + " peoples",
            diedThisCycle + " are not there anymore",
            "mmmmmmmmmmmmmmmmmmmmm " + diedThisCycle,
            "anyways, " + diedThisCycle + ".",
            "someone dies every gaze. but today " + diedThisCycle + " more guys died",
            "today " + diedThisCycle + " died 👍",
            "kill kill die die kill kill die die (" + diedThisCycle + " died)",
            "i think " + diedThisCycle + " died. i think. dunno for sure",
            "awwwwwwwwwwww (" + diedThisCycle + ")",
            "people say " + diedThisCycle + " is a lucky number",
            "the losses: " + (diedThisCycle - 1) + " qou and 1 funny",
            "being alive >>>>>>>>>>> those " + diedThisCycle + " dudes (stupids) (why die) (-" + (Math.round(Math.random() * 100) + 33) + " respect)",
            "hey todays a nice harvest. " + diedThisCycle + " pretty silly guys",
            diedThisCycle + " participants are a dissapointment today",
            diedThisCycle + " are not there anymore",
            "wow! " + diedThisCycle + " do not exist anymore!",
            diedThisCycle + " " + diedThisCycle + " " + diedThisCycle,
            "damn, " + diedThisCycle + " died"
        ],
        [
            diedThisCycle + "!!!!!! " + diedThisCycle + "!!!!!!!!!!!!!!",
            "heeeeehehehehehee. " + diedThisCycle + ".",
            "anyways, " + diedThisCycle + ".",
            "huh. " + diedThisCycle + " died.",
            "what action! what battle! what " + diedThisCycle + " dead participants!",
            "listen, the corru games are just like that, the corru games just kill " + diedThisCycle + " people a day",
            diedThisCycle + " okidoiad",
            "..." + diedThisCycle + ". could be better.",
            "lets play a game!!!!!!! how many died? %>)<br/>A) " + (Math.round(Math.random() * 100) + 83) + "; B) " + (Math.round(Math.random() * 100)) + "; C) " + diedThisCycle + " (worng answrr)",
            "THE CORRU GAMES RECEIVED AN OFFERING OF " + diedThisCycle + " PARTICIPANTS. THE CORRU GAMES DEMAND MORE.",
            diedThisCycle + " " + diedThisCycle + " " + diedThisCycle + " " + diedThisCycle + " " + diedThisCycle + " " + diedThisCycle + " " + diedThisCycle,
            "winning!!! " + diedThisCycle + " character dead",
            "do you know what happens after death? ask " + diedThisCycle + " dead",
            "well someone died. why do you need to know how many? im not a deathfriend",
            "byeeeeeee, " + diedThisCycle + "!!!",
            "muy sillies................. i.......... " + diedThisCycle + " ... .",
            "wow! " + diedThisCycle + " do not exist anymore! in fact they do not exist so hard i forgor uhhh what was i ralking about here? AH YES the ",
            "eatin popcorn; " + diedThisCycle + " die a horrible death",
            "HA now we know that " + diedThisCycle + "% of corru game participants are loooosrs (yes this is how percentages work. trust)",
            "someone died! " + diedThisCycle + " times!",
            diedThisCycle + " participants are sludgy",
            "mfw " + diedThisCycle + " participants die",
            "ultrakilling " + diedThisCycle,
            "the corru games are on a roll today! " + diedThisCycle + " dead, " + currentCharacterNumber - (Math.round(Math.random() * 6) + 5) + " injured"
        ],
        [
            diedThisCycle + "?????!!!!!! " + diedThisCycle + "?????????????!!!!!!!!!!!!!!",
            "AHAHAHA okay okay. (" + diedThisCycle + ")",
            "okay but " + diedThisCycle + " is pretty big? nuber?",
            "horrible. " + diedThisCycle + " poor. gys. are not. in corru. games. anymore. cause. they dead.",
            "the corru games are on a roll today! " + diedThisCycle + " dead, " + currentCharacterNumber + " injured",
            "what a great gaze. " + diedThisCycle + " d-",
            "eatin popcorn; " + diedThisCycle + " die a horrible death",
            diedThisCycle + " participants are sludgy",
            "being alive >>>>>>>>>>> those " + diedThisCycle + " dudes (stupids) (why die) (why so many) (bad) (-" + (Math.round(Math.random() * 100) + 43) + " respect)",
            "no no no that is too many deaths. i am cloning gakvu now (" + diedThisCycle + ")",
            "mmmmmmmmmmmmmmmmmmmmm " + diedThisCycle,
            "well what do i say when " + diedThisCycle + " participants die",
            "HA now we know that " + diedThisCycle + "% of corru game participants are loooosrs (yes this is how percentages work. trust)",
            "lol count it yourself",
            "it killed " + diedThisCycle + " people and doesnt even think about stopping",
            "ultrakilling " + diedThisCycle,
            "someone died! " + diedThisCycle + " times!",
            "mfw " + diedThisCycle + " participants die",
            "did you know that corru games are a rewrite of the much more ancient 'RWHG'? did you know i wrote them in two days of nonstop coding in a row? did you know that " + diedThisCycle + " participants died? did you know that i am cool? did you know that you are cool?",
            "insert funny joke about number " + diedThisCycle
        ],
        [
            "!!!!!!!!!!!!!!!!!!" + diedThisCycle + "!!!!!!!!!!!!!!!",
            "WHAT THE FUCK (" + diedThisCycle + ")",
            "man. i even gakvu cloning wont help (" + diedThisCycle + ")",
            "???????how many died again- " + diedThisCycle + " WHAT?????",
            "we will beat the record soon here?- like. " + diedThisCycle + " is not that far away from " + record + "-",
            "KI-" + diedThisCycle + "-LL",
            diedThisCycle + " deaths........ thats. thats. thats carnage",
            "live tozik.observer reaction (" + diedThisCycle + ")",
            "THE CORRU GAMES RECEIVED AN OFFERING OF " + diedThisCycle + " PARTICIPANTS. THE CORRU GAMES ARE PLEASED.",
            "YO- " + diedThisCycle + "-"
        ]
    ];

    if (diedThisCycle === 0) return ``
    else if (diedThisCycle === 1) return `<br/>` + strings[0][Math.floor(Math.random() * strings[0].length)] + `<br/>`
    else if (diedThisCycle === 3 && Math.random() < 0.2) return "<br/>triple affirmative<br/>"
    else if (diedThisCycle === 4 && Math.random() < 0.2) return "<br/>fourp<br/>"
    else if (diedThisCycle === 12 && Math.random() < 0.2) return "<br/>twolve<br/>"
    else if (diedThisCycle === 13 && Math.random() < 0.2) return "<br/>is it friday today?<br/>"
    else if (1 < diedThisCycle && diedThisCycle <= 4) return `<br/>` + strings[1][Math.floor(Math.random() * strings[1].length)] + `<br/>`
    else if (4 < diedThisCycle && diedThisCycle <= 10) return `<br/>` + strings[2][Math.floor(Math.random() * strings[2].length)] + `<br/>`
    else if (10 < diedThisCycle && diedThisCycle <= 16) return `<br/>` + strings[3][Math.floor(Math.random() * strings[3].length)] + `<br/>`
    else if (16 < diedThisCycle && diedThisCycle <= 24) return `<br/>` + strings[4][Math.floor(Math.random() * strings[4].length)] + `<br/>`
    else if (24 < diedThisCycle && diedThisCycle < record) return `<br/>` + strings[5][Math.floor(Math.random() * strings[5].length)] + `<br/>`
    else if (diedThisCycle >= record) return `<br/>guys????????? the fuck???<br/>we've beat the fucking record<br/>` + diedThisCycle + `<br/>yeaaaaaaaaaaaa...<br/>`
}

function sortCharactersByKills() {
    var sortedCharacters = characters.sort(function (a, b) {
        return b.kills - a.kills;
    });
    sortedCharacters = sortedCharacters.filter(function (character) {
        return character.kills > 0;
    });
    return sortedCharacters;
}

function sortCharactersByRevivals() {
    var sortedCharacters = characters.sort(function (a, b) {
        return b.revived - a.revived;
    });
    sortedCharacters = sortedCharacters.filter(function (character) {
        return character.revived > 0;
    });
    return sortedCharacters;
}

function getKillArray(where) {
    var stringified = where.hasKilled.toString();
    for (var i = 0; i < 500; i++) {
        stringified = stringified.replace(/,/g, '<font color="ffffff">\';\'</font>');
    }
    return stringified;
}

function getKilledBysArray(where) {
    var stringified = where.oldKilledBys.toString();
    stringified = stringified.replaceAll('</font>', '');
    stringified = stringified.replaceAll(',', '<font color="ffffff">\';\'</font>');
    stringified = stringified.replaceAll('<font color="ffff00">', '');
    return stringified;
}

function hasKills(character) {
    if (character.kills == 0) return `Peaceful :)`
        else if (character.kills == 1) return character.kills + ` Kill`
    else if (character.kills <= 5) return character.kills + ` Kills`
    else return character.kills + ` KILLS`
}

function doubleCheck() {
    for (var i = 0; i < initialCharacterNumber; i++) {
        var index = placements.findIndex(obj => obj === characters[i]);
        if (index !== -1) {
            if (placements[index].alive) {
                console.error("[doubleCheck] - Spliced out of the Placements Array: " + placements[index].name);
                placements.splice(index, 1);
            }
        } else if (characters[i].alive === false) {
            console.error("[doubleCheck] - Pushed into the Placements Array: " + characters[i].name)
            placements.push(characters[i]);
        }
    };

    const uniqueObjects = [];
    for (const obj of placements) {
        const isDuplicate = uniqueObjects.some(item => item === obj);
        if (!isDuplicate) {
            uniqueObjects.push(obj);
        }
        if (isDuplicate) {
            console.error("[doubleCheck] - Found and removed duplicate: " + obj)
        }
    }
    placements.length = 0;
    placements.push(...uniqueObjects);

    let count = 0;
    for (let i = 0; i < initialCharacterNumber; i++) {
        if (characters[i].alive === true) {
            count++;
        }
    }
    currentCharacterNumber = count;
}


// пиздец с ивентами
// краткий словарик для ахуевающих наблюдателей ака ебать таксономия ивентов. дуто ты с дуба рухнул
// род (genus) - это то, откуда ивент вообще (гонка, цикл, дождь, событие...)
// тип (type) - это ну (обычный, летальный, возрождающий, afflicted)
// объект (object) - сам ивент, самая мелкая единица

function generateEvents(eventGenus) {
    var returnData = ``;
    var addData;
    while (currentUnusedCharacterNumber != 0) {
        console.log("%c-", 'color: #666666');
        console.log("%c[generateEvents] - CURRENT CHARACTER NUMBER: " + currentCharacterNumber, 'color: #b3b3b3')
        console.log("%c[generateEvents] - UNUSED CHARACTER NUMBER: " + currentUnusedCharacterNumber, 'color: #b3b3b3')
        doubleCheck();

        addData = generateEvent(eventGenus);
        if (addData != "stop") returnData += addData;
        console.log("%c-", 'color: #666666');
    };
    return returnData;
}

function generateEvent(eventGenus) {
    console.log("",);
    var random = Math.random();

    var lethalChecker = chanceLethal;
    var revivalChecker = chanceRevival;

    if (!('revival' in eventGenus['array']) || currentCharacterNumber == initialCharacterNumber) revivalChecker = 0; // проверяет, есть ли у рода тип возрождающий и умирали ли уже персонажи
    if (currentCharacterNumber == 1) lethalChecker = 0; // проверяет, что если остался всего один игрок, надо отключить летальные ивенты

    if (random > lethalChecker + revivalChecker) {
        console.log("Chose the regular event type!");
        return eventGenus['regular']();
    } else if (random > revivalChecker) {
        console.log("Chose the lethal event type!");
        return eventGenus['lethal']();
    } else {
        console.log("Chose the revival event type!");
        return eventGenus['revival']();
    }
}

function decideEventObject(eventArrayType) {
    var object;
    var index;
    for (var i = 0; i < 73792; i++) {
        index = Math.floor(Math.random() * eventArrayType.length)
        object = eventArrayType[index];
        if (object.playerCount <= currentUnusedCharacterNumber) return object;
    };
}

function decideEventGenus() {
    var eventGenus;
    for (var i = 0; i < 737; i++) {
        eventGenus = eventsRandom[Math.floor(Math.random() * eventsRandom.length)];
        if (eventGenus.used == false) {
            eventGenus.used = true;
            return eventGenus;
        };
    };
    for (var i = 0; i < eventsRandom.length; i++) {
        eventsRandom[i].used = false;
    };
    for (var i = 0; i < 73792; i++) {
        eventGenus = eventsRandom[Math.floor(Math.random() * eventsRandom.length)];
        if (eventGenus.used == false) return eventGenus;
    };
}

function decidePlayers(playerCount) {
    var players = [];
    // var lookForParaffin = 0;
    for (var i = 0; i < playerCount; i++) {
        var player = getRandomAliveCharacter();
        player.beenUsed = true;
        players.push(player);
        // if (player.name == "Бесподобная Невинность") lookForParaffin++;
        // if (player.name == "Пара Пустяков") lookForParaffin++;
    };
    /* if (lookForParaffin == 2) {
        paraffinIndex++;
        paraffinChecker = true;
    } */
    return players;
}

function decideRevivedPlayers(playerCount) {
    var players = [];
    for (var i = 0; i < playerCount; i++) {
        var player = getRandomDeadCharacter();
        if (player == "stop") return "stop";
        player.beenUsed = true;
        players.push(player);
    };
    return players;
}

function parseAllNamesAndPronouns(string, characters) {

    for (let i = 1; i <= characters.length; i++) {
        string = parseNamesAndPronouns(string, i, characters[i - 1])
    }

    return string;
}

function parseNamesAndPronouns(string, number, character) {

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    string = string.replaceAll(`<` + number + `>`, `<strong><font color="ffff0">` + character.name + `</font></strong>`);

    string = string.replaceAll(`<die` + number + `>`, `<strong><font color="` + nicknamecolor_died + `">` + character.name + `</font></strong>`);

    string = string.replaceAll(`<rev` + number + `>`, `<strong><font color="` + nicknamecolor_revived + `">` + character.name + `</font></strong>`);

    string = string.replaceAll(`. <` + number + `they>`, `. ` + capitalizeFirstLetter(character.pronoun[0]));
    string = string.replaceAll(`. <` + number + `them>`, `. ` + capitalizeFirstLetter(character.pronoun[1]));
    string = string.replaceAll(`. <` + number + `their>`, `. ` + capitalizeFirstLetter(character.pronoun[2]));
    string = string.replaceAll(`. <` + number + `theirs>`, `. ` + capitalizeFirstLetter(character.pronoun[3]));
    string = string.replaceAll(`. <` + number + `themself>`, `. ` + capitalizeFirstLetter(character.pronoun[4]));

    string = string.replaceAll(`<` + number + `they>`, character.pronoun[0]);
    string = string.replaceAll(`<` + number + `them>`, character.pronoun[1]);
    string = string.replaceAll(`<` + number + `their>`, character.pronoun[2]);
    string = string.replaceAll(`<` + number + `theirs>`, character.pronoun[3]);
    string = string.replaceAll(`<` + number + `themself>`, character.pronoun[4]);

    if (character.singular == true) {
        string = string.replaceAll(`<` + number + `are>`, `is`);
        string = string.replaceAll(`<` + number + `have>`, `has`);
        string = string.replaceAll(`<` + number + `do>`, `does`);
        string = string.replaceAll(number + 'e>', `es`);
        string = string.replaceAll(number + '>', `s`);
    } else {
        string = string.replaceAll(`<` + number + `are>`, `are`);
        string = string.replaceAll(`<` + number + `have>`, `have`);
        string = string.replaceAll(`<` + number + `do>`, `do`);
        string = string.replaceAll(number + 'e>', ``);
        string = string.replaceAll(number + '>', ``);
    }

    return string;
}


function makeImages(image1, image2, image3, image4, image5, image6) {
    if (image6 != undefined) {
        var imageMade = `<table class="tribute">
        <tbody>
           <tr>
              <td><img src="` + image1 + `" height="90" width="90"></td>
              <td><img src="` + image2 + `" height="90" width="90"></td>
              <td><img src="` + image3 + `" height="90" width="90"></td>
              <td><img src="` + image4 + `" height="90" width="90"></td>
              <td><img src="` + image5 + `" height="90" width="90"></td>
              <td><img src="` + image6 + `" height="90" width="90"></td>
           </tr>
        </tbody>
     </table>
     <br>`
    } else if (image5 != undefined) {
        var imageMade = `<table class="five">
        <tbody>
           <tr>
              <td><img src="` + image1 + `" height="90" width="90"></td>
              <td><img src="` + image2 + `" height="90" width="90"></td>
              <td><img src="` + image3 + `" height="90" width="90"></td>
              <td><img src="` + image4 + `" height="90" width="90"></td>
              <td><img src="` + image5 + `" height="90" width="90"></td>
           </tr>
        </tbody>
     </table>
     <br>`
    } else if (image4 != undefined) {
        var imageMade = `<table class="four">
        <tbody>
           <tr>
              <td><img src="` + image1 + `" height="90" width="90"></td>
              <td><img src="` + image2 + `" height="90" width="90"></td>
              <td><img src="` + image3 + `" height="90" width="90"></td>
              <td><img src="` + image4 + `" height="90" width="90"></td>
           </tr>
        </tbody>
     </table>
     <br>`
    } else if (image3 != undefined) {
        var imageMade = `<table class="three">
        <tbody>
           <tr>
              <td><img src="` + image1 + `" height="90" width="90"></td>
              <td><img src="` + image2 + `" height="90" width="90"></td>
              <td><img src="` + image3 + `" height="90" width="90"></td>
           </tr>
        </tbody>
     </table>
     <br>`
    } else if (image2 != undefined) {
        var imageMade = `<table class="two">
        <tbody>
           <tr>
              <td><img src="` + image1 + `" height="90" width="90"></td>
              <td><img src="` + image2 + `" height="90" width="90"></td>
           </tr>
        </tbody>
     </table>
     <br>`
    } else {
        var imageMade = `<table class="one">
        <tbody>
           <tr>
              <td><img src="` + image1 + `" height="90" width="90"></td>
           </tr>
        </tbody>
     </table>
     <br>`
    }
    return imageMade;
}

//штуки для updateData ивентов
function theFunnyKillFunction(who, why, whoKiller1, whoKiller2, whoKiller3, whoKiller4, whoKiller5) {
    placements.push(who);
    who.alive = false;
    who.killedBy = why;
    if (whoKiller1 != undefined) {
        whoKiller1.kills++;
        whoKiller1.hasKilled.push(who.name)
        if (whoKiller2 != undefined) {
            whoKiller2.kills++;
            whoKiller2.hasKilled.push(who.name)
            if (whoKiller3 != undefined) {
                whoKiller3.kills++;
                whoKiller3.hasKilled.push(who.name)
                if (whoKiller4 != undefined) {
                    whoKiller4.kills++;
                    whoKiller4.hasKilled.push(who.name)
                    if (whoKiller5 != undefined) {
                        whoKiller5.kills++;
                        whoKiller5.hasKilled.push(who.name)
                    }
                }
            }
        }
    }
}

// сами ивенты в массивах и функции которые к ним применяются
var eventRace = {
    regular: function () {
        var eventObject = decideEventObject(eventRace[`array`][`regular`]);

        var playerCount = eventObject.playerCount;

        var players = decidePlayers(playerCount);
        currentUnusedCharacterNumber -= playerCount;

        var eventString = parseAllNamesAndPronouns(eventObject.string, players)
        console.log(eventString, players);

        if (playerCount === 1) var eventImage = makeImages(players[0].image)
        else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
        else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
        else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
        else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
        else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

        var event = eventImage + eventString + `<br><br>`;

        return event;
    },
    lethal: function () {
        do var eventObject = decideEventObject(eventRace[`array`][`lethal`])
        while (eventObject.howManyDeaths >= currentCharacterNumber);

        var playerCount = eventObject.playerCount;

        var players = decidePlayers(playerCount);
        currentUnusedCharacterNumber -= playerCount;

        var eventString = parseAllNamesAndPronouns(eventObject.string, players)
        console.log(eventString, players);

        if (playerCount === 1) var eventImage = makeImages(players[0].image)
        else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
        else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
        else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
        else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
        else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

        var event = eventImage + eventString + `<br><br>`;

        eventObject.updateData.apply(eventObject, players);

        return event;
    },
    array: {
        regular: [
            {
                string: "<1> somehow just does not notice the start of the collapse",
                playerCount: 1
            },
            {
                string: "<1> thinks that this is a very weird prank but promptly changes <1their> mind upon seeing a horde of rabid containers",
                playerCount: 1
            },
            {
                string: "<1> is startled by the announcement",
                playerCount: 1
            },
            {
                string: "<1> is immediately attacked by a golem but manages to escape",
                playerCount: 1
            },
            {
                string: "<1> gets a bad headache from the signal",
                playerCount: 1
            },
            {
                string: "One of <1>'s limbs almost turns to sludge from the signal",
                playerCount: 1
            },
            {
                string: "<1> wants to activate communications, but <1their> communicator is sludged!",
                playerCount: 1
            },
            {
                string: "<1> activates communications but does not hear anything good...",
                playerCount: 1
            },
            {
                string: "<1> goes to look for <1their> friends right away",
                playerCount: 1
            },
            {
                string: "<1> is frustrated that <1they> <1have> to stop <1their> work",
                playerCount: 1
            },
            {
                string: "<1> watches the chaos unfold",
                playerCount: 1
            },

            {
                string: "<1> ",
                playerCount: 1
            },

        ],
        lethal: [
            {
                string: "<die1> just dies",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Because I said so`;
                },
            },
        ]
        /*regular: [
            {
                string: "(Player1) находит еду и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит копье и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит бомбу и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) умудряется найти бомбу сингулярности и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) успевает выхватить фонарь и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) удается проникнуть в корпус итератора, где нет дождя",
                playerCount: 1
            },
            {
                string: "(Player1) берёт слишком много вещей и теряет их все на пути к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит жемчуг и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) задумывается о том, чтобы дать дождю смыть себя, но решает не делать этого",
                playerCount: 1
            },
            {
                string: "(Player1) получает указания от наблюдателя и быстро находит убежище",
                playerCount: 1
            },
            {
                string: "(Player1) в последний момент успевает в убежище, проплыв часть пути по затопленной комнате",
                playerCount: 1
            },
            {
                string: "(Player1) находит грибы и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит дымовую бомбу и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит приключений на пятую точку и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит просветление и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) бежит к убежищу и радуется, что не умер самым первым",
                playerCount: 1
            },
            {
                string: "(Player1) хочет добить счётчик своих убийств до максимума",
                playerCount: 1
            },
            {
                string: "(Player1) теряет надежду, что сможет победить",
                playerCount: 1
            },
            {
                string: "(Player1) безуспешно пытается найти себе напарника и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) добегает до убежища, но оно оказывается сломанным, и (Player1) еле находит второе рабочее",
                playerCount: 1
            },
            {
                string: "(Player1) собирает хорошее количество полезного снаряжения и чувствует себя полностью готовым к победе",
                playerCount: 1
            },
            {
                string: "(Player1) пытается подкупить наблюдателей, чтобы получить указания к ближайшему убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) делает заначку и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) почти съеден ящером, но в последний момент спасается",
                playerCount: 1
            },
            {
                string: "(Player1) находит вино и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит Степана и бежит в убежище",
                playerCount: 1
            },
            {
                string: "(Player1) находит карту регионов и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит нейроны и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит яйцо лапшемухи и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит целое ничего и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) раздаёт всем кому попало леща и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит… нет, шлёпки находят (Player1) и бегут к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит здравый смысл и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит закрепы модчата и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит причину жить и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит движок РВГИ и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Рlayer1) находит какой-то баг и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит словарик и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит решение Великой Задачи и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит полный лор пантеона РВРП и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) находит древнее проклятие и бежит к убежищу",
                playerCount: 1
            },
            {
                string: "(Player1) кидает бомбу в центр происходящего, но все чудом отделываются разве что оглушением и потерянными ресурсами",
                playerCount: 1
            },

            {
                string: "(Player1) и (Player2) дерутся за еду",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) оба находят электрокопьё, но не могут его поделить. В итоге оно ломается и они расходятся",
                playerCount: 2
            },
            {
                string: "(Player1) почти съедается ящером, но (Player2) приходит на помощь",
                playerCount: 2
            },
            {
                string: "(Player1) наблюдает за творящимся хаосом вместе с (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) находит (Player2) и бежит к убежищу",
                playerCount: 2
            },
            {
                string: "(Player1) набрасывается на (Player2) и крадёт всё его снаряжение",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) обмениваются припасами",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) заключают соглашение не убивать друг друга до самого финиша",
                playerCount: 2
            },
            {
                string: "(Player1) договаривается с (Player2) встретиться через пару циклов и рассказать друг другу о пережитом",
                playerCount: 2
            },
            {
                string: "(Player1) нападает на (Player2), но оба выживают",
                playerCount: 2
            },
            {
                string: "(Player1) пытается отобрать у (Player2) бомбу, но (Player2) кидает её в сторону и взрывает",
                playerCount: 2
            },
            {
                string: "(Player1) следует за (Player2), надеясь, что так он сможет найти убежище",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) решают не драться за еду, а поделить её поровну",
                playerCount: 2
            },
            {
                string: "(Player1) предлагает (Player2) работать вместе, но тот отвечает попыткой убить",
                playerCount: 2
            },
            {
                string: "(Player1) понимает, что взял слишком много еды, и дарит часть (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) говорит (Player2) путь до ближайшего убежища, однако (Player2) считает это слишком подозрительным и не следует по пути",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) кидаются в друг друга первыми попадающимися предметами",
                playerCount: 2
            },
            {
                string: "(Player1) уничтожает каждый боеприпас на своём пути, не оставляя и копья для (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) дарит весь найденный хлам (Player2), а сам уносит всё ценное",
                playerCount: 2
            },
            {
                string: "(Player1) видит, как (Player2) крадёт его запасы, но боится вмешиваться",
                playerCount: 2
            },
            {
                string: "(Player1) бьёт (Player2) по лицу и бежит к убежищу",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) оба пытаются выторговать у друг друга путь до убежища",
                playerCount: 2
            },
            {
                string: "(Player1) совершает обмен с (Player2). (Player2) вдруг испуганно указывает ему за спину и, пока (Player1) отвлёкся, убегает с его товаром",
                playerCount: 2
            },


            {
                string: "(Player1), (Player2) и (Player3) пытаются образовать команду, но не могут поладить и расходятся",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) спорят, кто первый из них умрёт",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) объединяются, чтобы собрать как можно больше припасов",
                playerCount: 3
            },
            {
                string: "Пока (Player1) и (Player2) делят припасы, (Player3) крадет их все",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) угрожают (Player3) и забирают его припасы",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) случайно сбиваются в кучу, но работают вместе",
                playerCount: 3
            },
            {
                string: "(Player1) вымогает у (Player2) и (Player3) еду",
                playerCount: 3
            },
            {
                string: "(Player1) пытается убить (Player2) и (Player3) ради их припасов, но терпит неудачу и чудом сбегает",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) жестоко дерутся за оружие, но в конце его стаскивает (Player3) и разгоняет обоих противников",
                playerCount: 3
            },

            {
                string: "(Player1), (Player2) и (Player3) жестоко дерутся за бомбу сингулярности, которую под шумок стаскивает (Player4)",
                playerCount: 4
            },
            {
                string: "Пока (Player1) и (Player2) пытаются поделить запасы, (Player3) и (Player4) в сторонке дерутся за право украсть эти самые запасы",
                playerCount: 4
            },
            {
                string: "(Player1), (Player2) и (Player3) загребают себе лучшее оружие, но (Player4) торжественно уничтожает всё их добро",
                playerCount: 4
            },
        ],
        lethal: [
            {
                string: "(Player1-Died) смывает дождём",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Смыло дождём`;
                }
            },
            {
                string: "(Player1-Died) хватается стрижом",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Был пострижен стрижом`;
                }
            },
            {
                string: "(Player1-Died) умирает от голода",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Помер с голоду`;
                }
            },
            {
                string: "(Player1-Died) съедается ящером",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Перемололся в зубах ящера`;
                }
            },
            {
                string: "(Player1-Died) съедается стервятником",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Был схвачен стервятником`;
                }
            },
            {
                string: "(Player1-Died) оказывается пронзён копьём мусорщика",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Был пронзён копьём мусорщика`;
                }
            },
            {
                string: "(Player1-Died) падает с огромной высоты и умирает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб от гравитации`;
                }
            },
            {
                string: "(Player1-Died) решает покончить с жизнью и позволяет дождю смыть себя",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Умер от отчаяния`;
                }
            },
            {
                string: "(Player1-Died) погибает от разряда тока сколопендры",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Был прожарен сколопендрой`;
                }
            },
            {
                string: "(Player1-Died) съедает что-то ядовитое и умирает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Отравился`;
                }
            },
            {
                string: "(Player1-Died) съедается левиафаном",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб от воре`;
                }
            },
            {
                string: "(Player1-Died) тонет в луже с пиявками",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Купался с пиявками`;
                }
            },
            {
                string: "(Player1-Died) умудряется найти бомбу сингулярности, но недостаточно осторожно с ней обращается и погибает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб от халатного обращения с опасным оружием`;
                }
            },
            {
                string: "(Player1-Died) хватается спустковёрткой",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Встретил весёлый сюрприз на потолке`;
                }
            },
            {
                string: "(Player1-Died) находит 1̷̢̛͎̦̝̠̠͒̎͛͑͐̂̿̓͐̈́̀͜͠1̸̯͐1̶̰̠̼̥͖̞͖̼̻̪̥͔͙̃͋̋͗̕̕0̷̢̨̙̤̺̙̺͋̀͆̏̀̾̒̃̀͝0̴͎̱̻͌͒̈́̽̅̑̎̓̅0̶̢̘̱͎͍̣̫̳͙͖̣̺̯̹̾̄̀̉͗͘̚1̵̪̠̱͍̟̻̜̊̑̈́́̅̿͊̀͑͠0̴̞̱̇͐ ̸̧̞͔̉͐͒̾́̈́̈́̅̕͝͠1̷̛̹̰̳͍̰͇̞͇̏̐͊̽̎̓̊͗̓̽͘͠ͅ0̴̖̳̰͕̺̪̹̦̤̭͕̥͓̕͘͝1̸̳͇̠̭̹̩̺̤͆̆́̏̽̆͌͑̌͌̿͜0̷̟̦̥̝͍̬̙͚̈́́̌͒͝1̷̠̠̑̿̂̑́̒͊̈͘1̶̻̣̤͓̠͇̒̄́̌͋͑̐͒͑͑1̷̹̤͕̞͍̭̐́̑̄͂̀͆̄̚0̴̡̢͍̠̯̤̳͉̫͔̬͙̊̓̍̍̚ͅ ̴̡̡͈̼̝̘̺̹̠̘̦̘̈͐̐̈́̓̿̑͂́͘1̷̢͔̜͖̮̘͖͐̀̊͊̕0̴̡̨͙̖̹͖̺̟̒͂͂̈́̇͌́̾ͅ1̷̢̘̤̬̼̲̯̬́̒͊̾̚1̴̧͖̖͓̜̗̖̠̻͍̺͈̄͊̊̎̀̃͠ͅ1̸̧͔̼͎̖̼̥̓͂1̸̨̡̗͕̤̿̋1̴͍̈́̈0̴̰̺̖̫̠̼̰̬̭̠͔̣͖́ и успешно возносится",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `1̷̢̛͎̦̝̠̠͒̎͛͑͐̂̿̓͐̈́̀͜͠1̸̯͐1̶̰̠̼̥͖̞͖̼̻̪̥͔͙̃͋̋͗̕̕0̷̢̨̙̤̺̙̺͋̀͆̏̀̾̒̃̀͝0̴͎̱̻͌͒̈́̽̅̑̎̓̅0̶̢̘̱͎͍̣̫̳͙͖̣̺̯̹̾̄̀̉͗͘̚1̵̪̠̱͍̟̻̜̊̑̈́́̅̿͊̀͑͠0̴̞̱̇͐ ̸̧̞͔̉͐͒̾́̈́̈́̅̕͝͠1̷̛̹̰̳͍̰͇̞͇̏̐͊̽̎̓̊͗̓̽͘͠ͅ0̴̖̳̰͕̺̪̹̦̤̭͕̥͓̕͘͝1̸̳͇̠̭̹̩̺̤͆̆́̏̽̆͌͑̌͌̿͜0̷̟̦̥̝͍̬̙͚̈́́̌͒͝1̷̠̠̑̿̂̑́̒͊̈͘1̶̻̣̤͓̠͇̒̄́̌͋͑̐͒͑͑1̷̹̤͕̞͍̭̐́̑̄͂̀͆̄̚0̴̡̢͍̠̯̤̳͉̫͔̬͙̊̓̍̍̚ͅ ̴̡̡͈̼̝̘̺̹̠̘̦̘̈͐̐̈́̓̿̑͂́͘1̷̢͔̜͖̮̘͖͐̀̊͊̕0̴̡̨͙̖̹͖̺̟̒͂͂̈́̇͌́̾ͅ1̷̢̘̤̬̼̲̯̬́̒͊̾̚1̴̧͖̖͓̜̗̖̠̻͍̺͈̄͊̊̎̀̃͠ͅ1̸̧͔̼͎̖̼̥̓͂1̸̨̡̗͕̤̿̋1̴͍̈́̈0̴̰̺̖̫̠̼̰̬̭̠͔̣͖́`;
                }
            },
            {
                string: "(Player1-Died) попадает в объятия гигансткой медузы",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб от обнимашек`;
                }
            },
            {
                string: "(Player1-Died) натыкается на кучу злых пауков и погибает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Был сожран пауками`;
                }
            },
            {
                string: "(Player1-Died) решает скрасить начало игры настоящей резнёй, но единственного, кого ему удаётся убить - это самого себя",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Имел нереалистичные мечты`;
                }
            },

            {
                string: "(Player1-Died) и (Player2-Died) дерутся за еду, но начинается дождь. Они не успевают укрыться в убежище и их обоих смывает",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    placements.push(player2);

                    player1.alive = false;
                    player1.killedBy = `Смыло дождём`;

                    player2.alive = false;
                    player2.killedBy = `Смыло дождём`;

                }
            },
            {
                string: "(Player1-Died) и (Player2) дерутся за еду, но начинается дождь. (Player1-Died) смывает дождем, а (Player2) добирается до убежища",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Смыло дождём`;
                }
            },
            {
                string: "(Player1-Died) почти добегает до убежища, но его атакует и убивает со спины (Player2)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Был внезапно убит <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) и (Player2-Died) дерутся, но в итоге оказываются оба слишком ранены, чтобы добраться до убежища",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    placements.push(player2);

                    player1.alive = false;
                    player1.killedBy = `Был смыт дождём, слишком раненный <strong><font color="ffff00">` + player2.name + `</font></strong>`;

                    player2.alive = false;
                    player2.killedBy = `Был смыт дождём слишком раненный <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                }
            },
            {
                string: "(Player1) решает сразу заработать своё первое убийство и успешно разделывается с (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был убит кровожадным <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) нападает на (Player2), но (Player2) защищается и убивает своего противника",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Был убит собственной жертвой, <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) кидает бомбу в (Player2), но случайно взрывает самого себя",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Погиб от прилетевшей не туда бомбы`;
                }
            },
            {
                string: "(Player1) говорит (Player2-Died) путь до ближайшего убежища, но он оказывается ложным и (Player2-Died) смывает дождём",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был убит хитрожопостью <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },


            {
                string: "(Player1-Died) пытается украсть припасы (Player2) и (Player3), но они замечают его и убивают",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Был убит <strong><font color="ffff00">` + player2.name + `</font></strong> и <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1), (Player2-Died) и (Player3) спорят, кто первый из них умрёт. (Player2-Died), расценив это как вызов, немедленно пронзает себя копьем",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был убит желанием победить в споре`;
                }
            },
            {
                string: "(Player1) немедленно отправляется в самое сердце хаоса, убивая там (Player2-Died) и (Player3-Died)",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player2.alive = false;
                    player2.killedBy = `Был убит <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                    player3.alive = false;
                    player3.killedBy = `Был убит <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) и (Player2-Died) дерутся за еду. Обоих убивает внезапно объявившийся (Player3)",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    placements.push(player2);
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player3.kills++;
                    player3.hasKilled.push(player2.name);
                    player1.alive = false;
                    player1.killedBy = `Был убит <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                    player2.alive = false;
                    player2.killedBy = `Был убит <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) пытается напасть на (Player2), но оказывается убит (Player3)",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Полез на кого не надо (убит <strong><font color="ffff00">` + player3.name + `</font></strong>, защищающим <strong><font color="ffff00">` + player2.name + `</font></strong>)`;
                }
            },
            {
                string: "(Player1) пытается отобрать у (Player2) бомбу, но (Player2) кидает её в сторону и случайно взрывает (Player3-Died) ",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player3);
                    player2.kills++;
                    player2.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Был убит бомбой <strong><font color="ffff00">` + player2.name + `</font></strong> (случайно честно)`;
                }
            },
            {
                string: "(Player1-Died) решает скрасить начало игры настоящей резнёй, кидая копья во все направления и убивая (Player2-Died), (Player3-Died) и (Player4-Died), а затем погибая самому",
                playerCount: 4,
                howManyDeaths: 4,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player1.kills++;
                    player1.hasKilled.push(player4.name);

                    placements.push(player1);
                    placements.push(player2);
                    placements.push(player3);
                    placements.push(player4);

                    player1.alive = false;
                    player1.killedBy = `Погиб в собственной же резне`;

                    player2.alive = false;
                    player2.killedBy = `Был зарезан <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                    player3.alive = false;
                    player3.killedBy = `Был зарезан <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                    player4.alive = false;
                    player4.killedBy = `Был зарезан <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            }
        ]*/
    }
}

var eventCycle = {
    regular: function () {
        var eventObject = decideEventObject(eventCycle[`array`][`regular`]);

        var playerCount = eventObject.playerCount;

        var players = decidePlayers(playerCount);
        currentUnusedCharacterNumber -= playerCount;

        if (`updatePlayerData` in eventObject) {
            console.log("O-o-oh, there's an updatePlayerData function! Executing...")
            eventObject.updateData.apply(eventObject, players);
        }

        var eventString = parseAllNamesAndPronouns(eventObject.string, players)
        console.log(eventString, players);

        if (playerCount === 1) var eventImage = makeImages(players[0].image)
        else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
        else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
        else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
        else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
        else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

        var event = eventImage + eventString + `<br><br>`;

        return event;
    },
    lethal: function () {
        do var eventObject = decideEventObject(eventCycle[`array`][`lethal`])
        while (eventObject.howManyDeaths >= currentCharacterNumber);

        var playerCount = eventObject.playerCount;

        var players = decidePlayers(playerCount);
        currentUnusedCharacterNumber -= playerCount;

        var eventString = parseAllNamesAndPronouns(eventObject.string, players)
        console.log(eventString, players);

        if (playerCount === 1) var eventImage = makeImages(players[0].image)
        else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
        else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
        else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
        else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
        else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

        var event = eventImage + eventString + `<br><br>`;

        eventObject.updateData.apply(eventObject, players);

        return event;
    },
    revival: function () {
        var eventObject = decideEventObject(eventCycle[`array`][`revival`]);

        var playerCount = eventObject.playerCount;

        var revivedPlayers = decideRevivedPlayers(eventObject.howManyRevivals);
        if (revivedPlayers == "stop") return "stop";
        var justPlayers = decidePlayers(playerCount - eventObject.howManyRevivals);

        var players = revivedPlayers.concat(justPlayers);

        currentUnusedCharacterNumber -= playerCount - eventObject.howManyRevivals;

        var eventString = parseAllNamesAndPronouns(eventObject.string, players)
        console.log(eventString, players);

        if (playerCount === 1) var eventImage = makeImages(players[0].image)
        else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
        else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
        else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
        else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
        else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

        var event = eventImage + eventString + `<br><br>`;

        eventObject.updateData.apply(eventObject, players);

        return event;
    },
    array: {
        regular: [
            {
                string: "<1> throws <1their> simulacrum at an incoherent veilklight",
                playerCount: 1
            },
            {
                string: "<1> stumbles into a room <1they> did not know existed",
                playerCount: 1
            },
            {
                string: "<1> is",
                playerCount: 1
            },
            {
                string: "<1> fights through rows of enemies, leaving behind a trail of sludge",
                playerCount: 1
            },
            {
                string: "<1> locks <1themself> in a personnel room and tries to calm down",
                playerCount: 1
            },
            {
                string: "<1> searches for sfer and useful items",
                playerCount: 1
            },
            {
                string: "<1> takes a moment to rest",
                playerCount: 1
            },
            {
                string: "<1> finds bright weaponry but, not knowing its effectiveness, leaves it be",
                playerCount: 1
            },
            {
                string: "<1> mends <1their> wounds with restorative cysts",
                playerCount: 1
            },
            {
                string: "<1> finds some simulacra and drinks it all",
                playerCount: 1
            },
            {
                string: "<1> grieves the loss of <1their> false enviroments",
                playerCount: 1
            },
            {
                string: "<1> hears it calling",
                playerCount: 1
            },
            {
                string: "<1> is ambushed by a group of very sneaky containers",
                playerCount: 1
            },
            {
                string: "<1> finds a kavruka. Yay! Explode everything!",
                playerCount: 1
            },
            {
                string: "<1> chats with a barfriend, who keeps insisting <1they> seek shelter, but <1> just does not stop talking",
                playerCount: 1
            },
            {
                string: "<1> finds bright weaponry and uses it to shoot a nearby golem 28 times before running out of ammunition",
                playerCount: 1
            },
            {
                string: "<1> is doing violence",
                playerCount: 1
            },
            {
                string: "<1> overhears someone talking but does not recognize the voices. <1they> <decide1> to back off",
                playerCount: 1
            },
            {
                string: "<1> uses <1their> last disabler charge to escape a large group of enemies",
                playerCount: 1
            },
            {
                string: "<1> steals something from <1their> friend's room",
                playerCount: 1
            },
            {
                string: "<1> says a very bad word after being hit in the face by a container",
                playerCount: 1
            },
            {
                string: "<1> makes a bomb",
                playerCount: 1
            },
            {
                string: "<1> chews on corru",
                playerCount: 1
            },
            {
                string: "<1> engages in a deep philosophical conversation with a newly-sapient chair",
                playerCount: 1
            },
            {
                string: "<1> finds and pets a dog",
                playerCount: 1
            },
            {
                string: "<1> talks to a very strange door… It does not look like made out of corru…",
                playerCount: 1
            },
            {
                string: "<1> sets up deadly traps",
                playerCount: 1
            },
            {
                string: "<1> curses Velzie",
                playerCount: 1
            },

            {
                string: "<1> is almost killed by a spire attendant, but <2> saves <1them>",
                playerCount: 2
            },
            {
                string: "<1> and <2> discuss possible escape options",
                playerCount: 2
            },
            {
                string: "<1> throws an explosive too close to <2>, who screams at <1them> to be more careful!!!",
                playerCount: 2
            },
            {
                string: "<1> tries to soothe the distressed <2>",
                playerCount: 2
            },
            {
                string: "<1> attacks <2>, hoping to take <2their> resources, but <2> fights <1them> off",
                playerCount: 2
            },
            {
                string: "<1> ambushes <2> and takes <2their> equipment but spares <2their> life",
                playerCount: 2
            },
            {
                string: "<1> quietly stalks the unsuspecting <2>",
                playerCount: 2
            },
            {
                string: "<1> and <2> avoid each other",
                playerCount: 2
            },
            {
                string: "<1> gives <2> a restorative cyst. <2> can not stop thanking <1them>",
                playerCount: 2
            },
            {
                string: "<1> and <2> hug",
                playerCount: 2
            },
            {
                string: "<1> sees <2> rummaging through the storage of <1their> personnel room but decides not to interfere",
                playerCount: 2
            },
            {
                string: "<1> and <2> threaten each other excessively",
                playerCount: 2
            },
            {
                string: "<1> does not trust <2>. After all, was the announcement not \"kill and do not be killed\"?",
                playerCount: 2
            },
            {
                string: "<1> bites <2>!!!!!!!!",
                playerCount: 2
            },
            {
                string: "<1> and <2> battle for enrichment",
                playerCount: 2
            },
            {
                string: "<1> masterfully defeats numerous foes. <2> is in awe",
                playerCount: 2
            },
            {
                string: "<1> assures <2> that \"<1they> will take care of the enemies\" but almost dies",
                playerCount: 2
            },
            {
                string: "<1> screams very loudly for no reason. From the other side of the wall, <2> answers with an equally loud scream",
                playerCount: 2
            },
            {
                string: "<1> tries to earn <2>'s trust by killing all the enemies for <2them>, but that causes <2> to grow even more distrustful",
                playerCount: 2
            },
            {
                string: "<1> and <2> make a truce. They shall not kill each other until the very end",
                playerCount: 2
            },
            {
                string: "<1> protects <2> in exchange for valuables",
                playerCount: 2
            },
            {
                string: "<1> notices that <1they> <1are> starting to enjoy <2>'s company",
                playerCount: 2
            },
            {
                string: "<1> calls out <2>'s name, but <2they> <2do> not answer, choosing to stay hidden",
                playerCount: 2
            },
            {
                string: "<1> and <2> fight alongside each other",
                playerCount: 2
            },
            {
                string: "<1> asks <2> something about the bright cousins. <2they> answer2> in a very normal way",
                playerCount: 2
            },
            {
                string: "<1> tells <2> a secret. <2they> look2> very surprised",
                playerCount: 2
            },
            {
                string: "<1> tells <2> a secret. <2they> look2> horrified",
                playerCount: 2
            },
            {
                string: "<1> and <2> realize they come from the same cave-city",
                playerCount: 2
            },
            {
                string: "<1> barely convinces <2> not to kill <1them>",
                playerCount: 2
            },
            {
                string: "<1> asks <2> for a receptor curl",
                playerCount: 2
            },
            {
                string: "<1> jumpscares <2>",
                playerCount: 2
            },
            {
                string: "<1> swears <1they> will find and kill <2>",
                playerCount: 2
            },
            {
                string: "<1> and <2> resort to playing rock-acid-claws in order to settle a debate",
                playerCount: 2
            },
            {
                string: "<1> panics and throws a rabid container at <2>. <2they> <2are> unamused",
                playerCount: 2
            },
            
            {
                string: "<1> and <2> find <3>'s personnel room and rummage through <3their> stuff. Not for resources, just because they can",
                playerCount: 3
            },
            {
                string: "<1> wants to kill <2> but can not risk attacking while <3> is nearby",
                playerCount: 3
            },
            {
                string: "<1>, <2> and <3> are being a bunch of sillies",
                playerCount: 3
            },
            {
                string: "<1>, <2> and <3> get into a huge physical fight, but no one wins",
                playerCount: 3
            },
            {
                string: "<1>, <2> and <3> tell each other stories from their larval lives",
                playerCount: 3
            },
            {
                string: "<1> and <2> argue to the point where they draw their weapons. <3> barely manages to calm them down",
                playerCount: 3
            },
            {
                string: "<1> and <2> encounter <3>, who wants to join their group despite <2>'s protest. <1> decides to abandon <2> to navigate the embassy with <3> instead",
                playerCount: 3
            },
            {
                string: "<1> and <2> encounter <3>, who wants to join their group despite <2>'s protest. <1> decides to stay with <2>, and <3> begrudgingly leaves",
                playerCount: 3
            },
            {
                string: "<1>, <2> and <3>, who were on the verge of killing each other, are forced to cooperate in order to survive a group of violent kivskins",
                playerCount: 3
            },
            {
                string: "<1>, <2> and <3> try to claw their way out through the walls",
                playerCount: 3
            },
            {
                string: "<1> promises that <1they> would never hurt <2> and <3>",
                playerCount: 3
            },
            {
                string: "<1> wounds <2> badly but does not get enough time to finish <2them> off before <3> appears out of nowhere and scares <1them> off",
                playerCount: 3
            },
            {
                string: "<1> shares <1their> knowledge of combat with <2> and <3>",
                playerCount: 3
            },
            {
                string: "<1> sees <2> and <3> and immediately turns back",
                playerCount: 3
            },
            {
                string: "<1> and <2> argue about the sides of the meteorite conflict. <3>, clueless about what are those two so angry about, listens in",
                playerCount: 3
            },

            {
                string: "<1> is rude to <2>, who gets upset and complains to <3>, who tells <4> about the situation, who asks <5> for help, who punches <1> in the face",
                playerCount: 5
            },

            {
    string: "<1> hopes not to die stupidly",
    playerCount: 1
},
{
    string: "<1> scribbles on a wall: \"<1> was here\"",
    playerCount: 1
},
{
    string: "<1> prays for Velzie to smile on <1them>",
    playerCount: 1
},
{
    string: "<1> feels a little lonely",
    playerCount: 1
},
{
    string: "<1> regrets <1their> actions",
    playerCount: 1
},
{
    string: "<1> prays for Velzie to play tricks on <1their> enemies",
    playerCount: 1
},
{
    string: "<1> bounces off the walls",
    playerCount: 1
},
{
    string: "<1> sings a tune",
    playerCount: 1
},
{
    string: "<1> begs <1their> creator for mercy",
    playerCount: 1
},
{
    string: "<1> breathes in, and out",
    playerCount: 1
},
{
    string: "<1> meows",
    playerCount: 1
},
{
    string: "<1> decides who will be <1their> victim in the next wink",
    playerCount: 1
},
{
    string: "<1> dreams about victory",
    playerCount: 1
},
{
    string: "<1> draws on the walls with sludge",
    playerCount: 1
},
{
    string: "<1> gets lost",
    playerCount: 1
},
{
    string: "<1> does a really cool flip",
    playerCount: 1
},
{
    string: "<1> hides from other participants",
    playerCount: 1
},
{
    string: "<1> thinks really hard",
    playerCount: 1
},
{
    string: "<1> forgets something extremely important",
    playerCount: 1
},
{
    string: "<1> eats a cyst",
    playerCount: 1
},
{
    string: "<1> laughs like a movie villain",
    playerCount: 1
},
{
    string: "<1> bows to the audience",
    playerCount: 1
},

{
    string: "<1> thinks <1they> <1have> found <2>'s corpse, but in reality <2> is pretending to be dead",
    playerCount: 2
},
{
    string: "<1> gifts <2> a trinket",
    playerCount: 2
},
{
    string: "<1> challenges <2> to a fight. No one wins, but they recognize each other's strength and become friends",
    playerCount: 2
},
{
    string: "<1> compliments <2>'s signature",
    playerCount: 2
},
{
    string: "<1> trips over a cyst, picks it up and throws it away in anger; it hits <2> right on the head",
    playerCount: 2
},
{
    string: "<1> searches everywhere for <2>, wanting to give <2them> a gift. <2> hides desperately",
    playerCount: 2
},
{
    string: "<1> and <2> bump into each other several times in a row and decide to go together, believing it to be a sign from Velzie",
    playerCount: 2
},
{
    string: "<1> tries to scare away <2>, but accidentally becomes <2their> friend",
    playerCount: 2
},
{
    string: "<1> and <2> fight for the entire wink, but continue to evade each other's attacks over and over again",
    playerCount: 2
},
{
    string: "<1> sees <2> running away from something and helps <2them> escape",
    playerCount: 2
},
{
    string: "<1> hits <2> with a chair",
    playerCount: 2
},
{
    string: "<1> and <2> both hide from each other, thinking that one wants to kill the other",
    playerCount: 2
},
{
    string: "<1> and <2> make some kind of device together",
    playerCount: 2
},
{
    string: "<1> watches <2> and sees something <1they> should not have",
    playerCount: 2
},
{
    string: "<1> promises <2> not to kill <2them> in return for all <2their> supplies, but <2> only gives <1> a punch in the face",
    playerCount: 2
},
{
    string: "<1> and <2> :)",
    playerCount: 2
},

{
    string: "<1> notices <2> and <3> following <1them> and tries to escape",
    playerCount: 3
},
{
    string: "<1> intimidates <2> and <3> and kicks them out of <1their> tendril",
    playerCount: 3
},
{
    string: "<1> and <2> invite <3> to join them, but <3they> silently leave3>",
    playerCount: 3
},
{
    string: "<1> sees <2> waving and waves back. Then realizes that <2> is waving not to <1them>, but to <3>",
    playerCount: 3
},
{
    string: "<1> and <2> team up to kill <3>, but they never gather the courage to do it",
    playerCount: 3
},
{
    string: "<1> and <2> ambush <3>, but <3> is well armed and defends <3themself>",
    playerCount: 3
},
{
    string: "<1> blows up a bunch of sludged junk for fun, nearly killing <2> and <3> hiding nearby",
    playerCount: 3
},
{
    string: "<1> and <2> want to set up an ambush for <3>, but they can not agree on a plan",
    playerCount: 3
},

{
    string: "<1>, <2> and <3> watch some husks fight in a pit and place bets. <4>, who falls into the pit, wins",
    playerCount: 4
},
{
    string: "<1> stockpiles weapons, <2> steals them, <3> catches <2them> in the act and goes to tell everyone, and <4> tries <4their> best to stop that from happening",
    playerCount: 4
},
{
    string: "<1> and <2> run away from <3> and <4> in absolute terror",
    playerCount: 4
},
{
    string: "<1> and <2> try to track down and kill <3> and <4> while <3> and <4> try to track down and kill <1> and <2>",
    playerCount: 4
},
{
    string: "<1>, <2> and <3>, <4> are arguing over the right to take <5> on their team. Before it gets to a fight, <5> silently slips out of their sight",
    playerCount: 5
},
{
    string: "<1> declares that the Corru Games is an unfair and cold-blooded system. <1they> <1are> joined by <2> and <3>, wanting fairness, while <4> and <5>  laugh at the idea",
    playerCount: 5
},
{
    string: "<1> and <2> fight fiercely, but a group of <3>, <4> and <5> comes and chases them away",
    playerCount: 5
},

{
    string: "<1>, <2> and <3> compete with <4>, <5> and <6> for resources",
    playerCount: 6
},
        ],
        lethal: [
            {
                string: "<die1> connects to an unknown cyst and dies of incoherency",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Did not have basic computer competence`;
                },        
            },
            {
                string: "<die1> joins the okidoia",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Got okidoki'd`;
                },
            },
            {
                string: "<die1> can not handle the amount of foes that has surrounded <1them>",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Too many enemies`;
                },
            },
            {
                string: "<die1> mysteriously disappears",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Disappeared`;
                },
            },
            {
                string: "<die1> bites a container. The container bites <1them> back, and fatally so",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Bited`;
                },
            },
            {
                string: "<die1> just dies",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Because I said so`;
                },
            },
            {
                string: "<die1> sips from an EVIL simulacrum and DIES",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Alcoholism`;
                },
            },
            {
                string: "The room <die1> is in collapses and <1they> <1are> crushed under the debris",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Victim of a collapse in the collapse`;
                },
            },
            {
                string: "<die1> is too scared of husks to concentrate on fighting and ends up killed by them",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Husks :(`;
                },
            },
            {
                string: "<die1> gets eaten by a movefoe",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Learned the evil of elevators`;
                },
            },
            {
                string: "<die1> curses Velzie. Velzie curses <1them> back",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Cursed`;
                },
            },

            {
                string: "<die1> accidentally explodes <1themself> along with <die2>",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Exploded by accident`;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Got caught in <strong><font color="ffff00">` + player1.name + `</font></strong>'s explosion`;
                },
            },

            {
                string: "<1> groundsminds the floor beneath <die2> to turn into sharp spikes, piercing <2them> right through",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Was impaled by <strong><font color="ffff00">` + player1.name + `</font></strong>'s groundsminded spikes`;
                },
            },
        ],
        revival: [
            {
                string: "<rev1> is alive again?..",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
        ]
        /*regular: [
            // 1 чел
            {
                string: "(Player1) создает бомбу сингулярности на досуге",
                playerCount: 1
            },
            {
                string: "(Player1) пытается пробраться в Мегаполис, но у него нет дрона-идентификатора",
                playerCount: 1
            },
            {
                string: "(Player1) проникает внутрь итератора и чуть не ломает его",
                playerCount: 1
            },
            {
                string: "(Player1) получает взрывные копья от неизвестного спонсора",
                playerCount: 1
            },
            {
                string: "(Player1) сильно злит наблюдателей, лишая себя их присутствия",
                playerCount: 1
            },
            {
                string: "(Player1) обанкротился, обменяв весь своей жемчуг на копьё у мусорщика-торговца",
                playerCount: 1
            },
            {
                string: "(Player1) наблюдает за дракой ящеров",
                playerCount: 1
            },
            {
                string: "(Player1) смотрит в небо в поисках стервятников",
                playerCount: 1
            },
            {
                string: "(Player1) доходит до врат кармы и проходит через них",
                playerCount: 1
            },
            {
                string: "(Player1) доходит до врат кармы и понимает, что у него недостаточно кармы",
                playerCount: 1
            },
            {
                string: "(Player1) исследует регион",
                playerCount: 1
            },
            {
                string: "(Player1) заблуждается",
                playerCount: 1
            },
            {
                string: "(Player1) думает, куда пойти",
                playerCount: 1
            },
            {
                string: "(Player1) ест сколопендру",
                playerCount: 1
            },
            {
                string: "(Player1) охотится",
                playerCount: 1
            },
            {
                string: "(Player1) несёт с собой жемчуг неприличного содержания",
                playerCount: 1
            },
            {
                string: "(Player1) видит, как ящерица ест котёнка, но не вмешивается",
                playerCount: 1
            },
            {
                string: "В убежище к (Player1) заползает красная сколопендра, но ему удается сбежать",
                playerCount: 1
            },
            {
                string: "(Player1) ловит инсульт, увидев красную сколопендру",
                playerCount: 1
            },
            {
                string: "(Player1) натачивает копьё",
                playerCount: 1
            },
            {
                string: "(Player1) дивится пейзажами",
                playerCount: 1
            },
            {
                string: "(Player1) наблюдает за насекомыми",
                playerCount: 1
            },
            {
                string: "(Player1) несет огонь",
                playerCount: 1
            },
            {
                string: "(Player1) платит налоги",
                playerCount: 1
            },
            {
                string: "(Player1) практикует кувырки",
                playerCount: 1
            },
            {
                string: "(Player1) кушает фрукт",
                playerCount: 1
            },
            {
                string: "(Player1) забывает об установленных 250 модах и нечаянно попадает в Закулисье",
                playerCount: 1
            },
            {
                string: "(Player1) решает исследовать все регионы СКС и НЗЗ. В конце путешествия (Player1) почти сходит с ума",
                playerCount: 1
            },
            {
                string: "(Player1) пробует кислотную водичку, но не умирает и приобретает новые способности",
                playerCount: 1
            },
            {
                string: "(Player1) весь цикл пытается выбраться из ямы с улитками",
                playerCount: 1
            },
            {
                string: "(Player1) весь цикл преследуют наблюдатели",
                playerCount: 1
            },
            {
                string: "(Player1) находит врата кармы, но не может пройти из-за похоти",
                playerCount: 1
            },
            {
                string: "(Player1) пытается сделать питьё из забродивших фруктов, но несмертельно травится",
                playerCount: 1
            },
            {
                string: "(Player1) попадает к итератору-экспериментатору, но у (Player1) получается сбежать",
                playerCount: 1
            },
            {
                string: "(Player1) теряет своего котёнка и устраивает геноцид мусорщиков",
                playerCount: 1
            },
            {
                string: "(Player1) обнаруживает взрывное копье",
                playerCount: 1
            },
            {
                string: "(Player1) обнаруживает камень",
                playerCount: 1
            },
            {
                string: "(Player1) обнаруживает взрывчатое растение",
                playerCount: 1
            },
            {
                string: "(Player1) обнаруживает бомбу",
                playerCount: 1
            },
            {
                string: "(Player1) обнаруживает кармацвет",
                playerCount: 1
            },
            {
                string: "(Player1) обнаруживает пузырьковое растение",
                playerCount: 1
            },
            {
                string: "(Player1) находит еду",
                playerCount: 1
            },
            {
                string: "(Player1) обнаруживает грибы",
                playerCount: 1
            },
            {
                string: "(Player1) видит вдалеке отряд мусорщиков. К счастью, они не замечают (Player1) , и (Player1) спокойно идёт дальше",
                playerCount: 1
            },
            {
                string: "(Player1) чуть не хватает шест мимик, но (Player1) успевает отдернуть от него лапы",
                playerCount: 1
            },
            {
                string: "(Player1) находит склад мусорщиков. Теперь у (Player1) есть копье",
                playerCount: 1
            },
            {
                string: "(Player1) находит склад мусорщиков. Теперь у (Player1) есть бомба",
                playerCount: 1
            },
            {
                string: "(Player1) весь цикл прячется от других участников",
                playerCount: 1
            },
            {
                string: "(Player1) с большим аппетитом ест нейроны",
                playerCount: 1
            },
            {
                string: "(Player1) путешествует по структуре итератора и проводит час, застряв в антигравитации посреди комнаты без опоры и инерции",
                playerCount: 1
            },
            {
                string: "(Player1) зацикливается на одной мысли",
                playerCount: 1
            },
            {
                string: "(Player1) выдвигает идею о том, что итераторы не могут страдать, но никто его не слушает",
                playerCount: 1
            },
            {
                string: "(Player1) налаживает торговые отношения с мусорщиками",
                playerCount: 1
            },
            {
                string: "(Player1) торгует нелегальной информацией на чёрном рынке",
                playerCount: 1
            },
            {
                string: "(Player1) случайно теряет жемчужину с решением Великой Задачи",
                playerCount: 1
            },
            {
                string: "(Player1) вычисляет отщепенцев среди участников",
                playerCount: 1
            },
            {
                string: "(Player1) забывает что-то невероятнейше важное",
                playerCount: 1
            },
            {
                string: "(Player1) строит смертоносные ловушки",
                playerCount: 1
            },
            {
                string: "(Player1) видит какую-то перепалку вдалеке, но не вмешивается",
                playerCount: 1
            },
            {
                string: "(Player1) разглядывает граффити",
                playerCount: 1
            },
            {
                string: "(Player1) заселяет чьё-то убежище несметной кучей улиток",
                playerCount: 1
            },
            {
                string: "(Player1) неприлично громко матерится",
                playerCount: 1
            },
            {
                string: "(Player1) документирует флору и фауну регионов",
                playerCount: 1
            },
            {
                string: "(Player1) кидает забродивший виноград в насосы Бесподобной Невинности",
                playerCount: 1
            },
            {
                string: "(Player1) говорит с отголоском и решает, что всё это время жил неправильно",
                playerCount: 1
            },
            {
                string: "(Player1) попадает в новости",
                playerCount: 1
            },
            {
                string: "(Player1) любуется своим отражением и думает какой же он хорошенький",
                playerCount: 1
            },
            {
                string: "(Player1) показывает неприличные вещи на наблюдателей",
                playerCount: 1
            },
            {
                string: "(Player1) дерётся с тремя красными ящерами одновременно",
                playerCount: 1
            },
            {
                string: "(Player1) обгладывает попкорновое дерево",
                playerCount: 1
            },
            {
                string: "(Player1) несёт почту",
                playerCount: 1
            },
            {
                string: "(Player1) пьёт горький травяной чай с гравием",
                playerCount: 1
            },
            {
                string: "(Player1) решает внутренние конфликты",
                playerCount: 1
            },
            {
                string: "(Player1) стремительно понижает репутацию со всем живым в округе",
                playerCount: 1
            },
            {
                string: "(Player1) пытается постичь дзен (безуспешно)",
                playerCount: 1
            },
            {
                string: "(Player1) смеётся как злодей",
                playerCount: 1
            },
            {
                string: "(Player1) пытается приручить ящера, но в последний момент сбегает",
                playerCount: 1
            },
            {
                string: "(Player1) весь цикл дерётся с инспектором итератора в невесомости",
                playerCount: 1
            },
            {
                string: "(Player1) любуется оленями",
                playerCount: 1
            },
            {
                string: "(Player1) организует подпольный культ",
                playerCount: 1
            },
            {
                string: "(Player1) оказывается связан пчёлами из улья",
                playerCount: 1
            },
            {
                string: "(Player1) добывает уран",
                playerCount: 1
            },
            {
                string: "(Player1) проверяет анкеты",
                playerCount: 1
            },
            {
                string: "(Player1) жестоко пожирает мать-лапшемуху на глазах у её детей",
                playerCount: 1
            },
            {
                string: "(Player1) страдает",
                playerCount: 1
            },
            {
                string: "(Player1) играет в крестики-нолики с мигающими штучками в структуре итератора",
                playerCount: 1
            },
            {
                string: "(Player1) потерял все свои блестящие идеи",
                playerCount: 1
            },

            {
                string: "(Player1) спотыкается о камень, поднимает его и со злости кидает куда подальше; он прилетает точно в голову (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) сталкиваются в честном бою. Побеждает (Player1), но сохраняет жизнь (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) просит (Player2) прочитать содержание найденной персиковой жемчужины, (Player2) немедленно кидает её в пропасть",
                playerCount: 2
            },
            {
                string: "(Player1) весь цикл преследует (Player2), но (Player2) боится (Player1) и решает ничего не предпринимать",
                playerCount: 2
            },
            {
                string: "(Player1) признаётся в давней любви к (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) вызывает на бой (Player2). Никто так и не выигрывает, но они признают силу друг друга и становятся друзьями",
                playerCount: 2
            },
            {
                string: "(Player1) подкрадывается к (Player2). (Player2) пугается и шипит",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) сталкиваются в честном бою. Выходит ничья",
                playerCount: 2
            },
            {
                string: "(Player1) гонится за (Player2); в момент отчаняния (Player2) бросает какой-то труп в (Player1) и случайно приручает его",
                playerCount: 2
            },
            {
                string: "(Player1) дарит (Player2) жемчужину",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) отбиваются от стервятника",
                playerCount: 2
            },
            {
                string: "(Player1) атакует ящера копьем, пока (Player2) отвлекает его",
                playerCount: 2
            },
            {
                string: "(Player1) атакует стервятника копьем, пока (Player2) отвлекает его",
                playerCount: 2
            },
            {
                string: "(Player1) делится едой с (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) видит ящера и кидает в него труп с целью приручить. (Player2) недоволен, что его спутали с каким-то ящером",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) дерутся за право есть друг друга",
                playerCount: 2
            },
            {
                string: "(Player1) пытается утопить (Player2); он задерживает дыхание, притворяясь мёртвым, и сбегает когда (Player1) теряет бдительность",
                playerCount: 2
            },
            {
                string: "(Player1) нападает на (Player2) несколько раз и калечит его, но так и не добивает",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) видят друг друга в одной и той же комнате и немедленно разворачиваются",
                playerCount: 2
            },
            {
                string: "(Player1) думает, что нашёл труп (Player2), но на самом деле (Player2) притворяется мёртвым",
                playerCount: 2
            },
            {
                string: "(Player1) ищет везде (Player2), желая преподнести ему подарок. (Player2) отчаянно прячется",
                playerCount: 2
            },
            {
                string: "(Player1) весь цикл кидает медуз в (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) орёт на (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) натыкаются на друг друга несколько раз подряд и решают пойти вместе, считая, что это - знак судьбы",
                playerCount: 2
            },
            {
                string: "(Player1) строит ловушку для (Player2), но попадается в неё сам - и чувствует себя крайне неловко, когда (Player2) приходит на помощь",
                playerCount: 2
            },
            {
                string: "(Player1) пытается отпугнуть (Player2), но случайно становится его другом",
                playerCount: 2
            },
            {
                string: "(Player1) держит оленя за рога, пока (Player2) залезает на них",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) дерутся весь цикл, но продолжают уклоняться от чужих атак раз за разом",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2), зацепившись за друг друга, крутятся в невесомости до тошнотворных скоростей",
                playerCount: 2
            },
            {
                string: "(Player1) пугает (Player2) насекомыми",
                playerCount: 2
            },
            {
                string: "(Player1) умоляет (Player2) не убивать его и пощадить. Безоружный (Player2) чешет затылок",
                playerCount: 2
            },
            {
                string: "(Player1) оглушает (Player2) камнем и крадёт все его боеприпасы, скрываясь в закате",
                playerCount: 2
            },
            {
                string: "(Player1) кушает фрукт. (Player2) говорит ему, что это не фрукт",
                playerCount: 2
            },
            {
                string: "(Player1) видит, как (Player2) убегает от кого-то, и помогает ему спастись",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) в шутку бьют друг друга камнями",
                playerCount: 2
            },
            {
                string: "(Player1) помогает (Player2) взобраться на высокий уступ",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) дерутся за право того, кто отдаст жемчужину мусорщикам в качестве платы на заставе",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) кричат на облака",
                playerCount: 2
            },
            {
                string: "(Player1) бьёт (Player2) табуреткой",
                playerCount: 2
            },
            {
                string: "(Player1) образует шаткий, но необходимый союз с (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) оба прячутся от друг друга, думая, что один хочет убить другого",
                playerCount: 2
            },
            {
                string: "Заскучавший (Player1) забирается на высокую точку и кричит на всю округу. Издалека раздаётся крик (Player2) в ответ",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) пересекаются и решают рассказать друг другу о пережитом",
                playerCount: 2
            },
            {
                string: "(Player1) нападает на (Player2), но внезапное появление красной сколопендры быстро заканчивает их перепалку",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) мастерят вместе какой-то механизм",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) решают объединиться вместе на один цикл, помогая друг другу добывать еду",
                playerCount: 2
            },
            {
                string: "(Player1) следит за (Player2) и видит то, что не должен был",
                playerCount: 2
            },
            {
                string: "(Player1) сбрасывает труп красного ящера на (Player2), отчего последний чуть не ловит инфаркт",
                playerCount: 2
            },
            {
                string: "(Player1) пытается украсть слизневик у (Player2), но (Player2) злится и пробивает ему копьём колено",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) держатся за руки",
                playerCount: 2
            },
            {
                string: "(Player1) отсосал у (Player2)",
                playerCount: 2
            },
            {
                string: `Подходит как-то (Player1) к (Player2) и спрашивает: "Вы дама?"`,
                playerCount: 2
            },
            {
                string: "(Player1) обещает (Player2) не убивать его взамен на все его припасы, но (Player2) даёт (Player1) только леща",
                playerCount: 2
            },
            {
                string: "(Player1) призывает стервятника с помощью личинки, чтобы убить (Player2), но им обоим удается сбежать",
                playerCount: 2
            },
            {
                string: "(Player1) получает рану от лапшемухи, (Player2) незамедлительно приходит на помощь",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) вместе охотятся",
                playerCount: 2
            },
            {
                string: "(Player1) выскакивает на (Player2) из темноты",
                playerCount: 2
            },
            {
                string: "(Player1) продает (Player2) информацию по обходу табу",
                playerCount: 2
            },
            {
                string: "(Player1) (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) щекочет (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) пролетает верхом на циановом ящере над (Player2). Последний крайне озадачен",
                playerCount: 2
            },

            {
                string: "(Player1) охотится, но его добычу воруют (Player2) и (Player3)",
                playerCount: 3
            },
            {
                string: "(Player1) замечает следящих за ним (Player2) и (Player3) и пытается скрыться",
                playerCount: 3
            },
            {
                string: "(Player1) пытается убедить (Player2) избавиться от (Player3), но (Player2) не соглашается и выгоняет (Player1) из их команды",
                playerCount: 3
            },
            {
                string: "(Player1) запугивает (Player2) и (Player3) и выгоняет их из своего региона",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) предлагают (Player3) присоединиться к ним, но он молча уходит",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) случайно встречают друг друга и нервно разбредаются по разным проходам комнаты",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) карабкаются по стене итератора",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) ищат пропитание вместе и обсуждают по пути своё прошлое",
                playerCount: 3
            },
            {
                string: "(Player1) хочет напасть на (Player2), но за ним везде следует (Player3); (Player1) решает не рисковать и не атаковать двух врагов сразу",
                playerCount: 3
            },
            {
                string: "(Player1) видит (Player2), машущего рукой, и машет в ответ. Затем понимает, что (Player2) машет не ему, а (Player3)",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) объединяются, чтобы убить (Player3), но им так и не хватает духу это сделать",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) помогают (Player3) пройти через неизвестный ему регион",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) пытаются поделить поровну убитую ими сколопендру",
                playerCount: 3
            },
            {
                string: "(Player1) пытается полезть к долгоногу, (Player2) держит его, (Player3) принимает решение убежать",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) устраивают засаду (Player3), но (Player3) хорошо вооружен и может защитить себя",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) усыновляют (Player3)",
                playerCount: 3
            },
            {
                string: "(Player1) взрывает кучу хлама ради развлечения, чуть не убивая прячущихся неподалеку (Player2) и (Player3)",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) успешно штурмуют заставу мусорщиков, в процессе добывая много боеприпасов",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) почти нарываются на стычку с мусорщиками, однако из ниоткуда выходит (Player3) и улаживает конфликт, спасая обе стороны",
                playerCount: 3
            },
            {
                string: "(Player1) пролетает верхом на (Player2) над (Player3). Последний крайне озадачен",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) хотят организовать засаду для (Player3), но никак не могут договориться с друг другом",
                playerCount: 3
            },

            {
                string: "(Player1), (Player2) и (Player3) наблюдают за дракой ящеров в яме и ставят ставки. Побеждает свалившийся в яму (Player4)",
                playerCount: 4
            },
            {
                string: "(Player1), (Player2), (Player3) и (Player4) образуют самую жёсткую тусу на районе",
                playerCount: 4
            },
            {
                string: "(Player1) нападает на (Player2), (Player3) и (Player4), но кидает бомбу не туда, и они дают ему по роже",
                playerCount: 4
            },
            {
                string: "(Player1) делает запасы еды, (Player2) их крадет, (Player3) его рассекречивает, а (Player4) пытается всеми силами не допустить этого",
                playerCount: 4
            },
            {
                string: "(Player1) и (Player2) в абсолютном ужасе сбегают от (Player3) и (Player4)",
                playerCount: 4
            },
            {
                string: "(Player1) и (Player2) пытаются выследить и убить (Player3) и (Player4), пока (Player3) и (Player4) пытаются выследить и убить (Player1) и (Player2)",
                playerCount: 4
            },
            {
                string: "(Player1), (Player2) и (Player3) ловят (Player4) и издеваются над ним; позже ему удаётся сбежать, но не без пары шрамов - и на теле, и на психике",
                playerCount: 4
            },
            {
                string: "(Player1), (Player2) и (Player3) спасают (Player4) от орды пауков; он благодарит их, отдав загадочный цветной жемчуг",
                playerCount: 4
            },

            {
                string: "(Player1), (Player2) и (Player3), (Player4) ссорятся за право взять (Player5) в свою команду. Пока дело не дошло до драки, (Player5) молча ускользает из их виду",
                playerCount: 5
            },
            {
                string: "(Player1) заявляет, что ГИ - нечестная и хладнокровная система. К нему присоединяются (Player2) и (Player3), желая справедливости, а (Player4) и (Player5) смеются над идеей",
                playerCount: 5
            },
            {
                string: "(Player1), (Player2), (Player3) и (Player4) пытаются вытащить (Player5) из ямы с тонной улиток, но поочередно сами туда сваливаются",
                playerCount: 5
            },
            {
                string: "(Player1) и (Player2) яростно дерутся, но приходит группа из (Player3), (Player4) и (Player5) и прогоняет их",
                playerCount: 5
            },

            {
                string: "(Player1), (Player2) и (Player3) соревнуются с (Player4), (Player5) и (Player6) за ресурсы",
                playerCount: 6
            },
        ],
        lethal: [
            {
                string: "(Player1-Died) попадает к итератору-экспериментатору и погибает из-за эксперимента",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Стал неудачным образцом этичных экспериментов`;
                }
            },
            {
                string: "(Player1-Died) подскальзывается на жемчуге и умирает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб в несчастном случае`;
                }
            },
            {
                string: "(Player1-Died) собирается взломать пентагон, но его незамедлительно убивает инструктор",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Хакерцство до добра не доводит`;
                }
            },
            {
                string: "(Player1-Died) теряет своего котёнка и сбрасывается с обрыва",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Детей`;
                }
            },
            {
                string: "Мусорщик кидает копьё в наблюдателя, но попадает прямо в голову (Player1-Died)",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб по чистой случайности`;
                }
            },
            {
                string: "(Player1-Died) выпивает воду и оказывается убит разъяренным итератором с терновым венцом на голове",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб потому что Венец`;
                }
            },
            {
                string: "(Player1-Died) топит котёнка, но делает это настолько долго, что начинается дождь",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб, доблестно топя котёнка`;
                }
            },
            {
                string: "(Player1-Died) решает утопиться в Пустоте и возносится",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Вознёсся`;
                }
            },
            {
                string: "(Player1-Died) хочет сделать себе пирсинг. Использовать для этого бивень королевского стервятника оказывается не самой блестящей идеей",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Был убит пирсингом`;
                }
            },
            {
                string: "(Player1-Died) решает утопиться в Пустоте, но становится отголоском",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Навеки застрял между материальным планом и миром небытия`;
                }
            },
            {
                string: "В убежище к (Player1-Died) заползает красная сколопендра. Итог: смерть",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Потрогался усиками красной сколопендры`;
                }
            },
            {
                string: "(Player1-Died) попадает в дурную компанию и приносится в жертву Щепке Соломы",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Связался с дурной компанией`;
                }
            },
            {
                string: "(Player1-Died) внезапно просыпается в Рубиконе. Он погибает через 2 секунды после выхода из убежища",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Теперь живёт в аду`;
                }
            },
            {
                string: "(Player1-Died) пытается достать из под спусковёртки бомбу, но задевает её и взрывается",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Пытался достать бомбу из под спустковёртки`;
                }
            },
            {
                string: "Коварная кальмарокада сбивает (Player1-Died) с шеста, что приводит к смерти (Player1-Died)",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Был убит гнидой`;
                }
            },
            {
                string: "(Player1-Died) пытается проглотить жемчуг, но давится им и умирает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб от неправильного использования домашнего жемчуга`;
                }
            },
            {
                string: "(Player1-Died) впервые за 300 часов выживания узнает про существование спрятника. К несчастью, уже слишком поздно",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб от узрения запретных знаний`;
                }
            },
            {
                string: "(Player1-Died) давится фруктом",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Подавился фруктом`;
                }
            },
            {
                string: "(Player1-Died) хватает сколопендра, но, не растерявшись, (Player1-Died) кидает в нее шахидку... и погибает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Бросил шахидку в не тот момент`;
                }
            },
            {
                string: "(Player1-Died) попадается Святому и благополучно возносится",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Встретился со Святым`;
                }
            },
            {
                string: "(Player1-Died) читает содержимое персиковой жемчужины, и, не вынеся увиденного, прыгает со скалы",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Не выдержал картинок кошкоитераторов`;
                }
            },
            {
                string: "(Player1-Died) отправляет Тройное Подтверждение и внезапно пропадает из связи",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Закосплеил Щепку`;
                }
            },
            {
                string: "(Player1-Died) пытается пробраться в Мегаполис. Вспоминает о своей отвратительной репутации с мусорщиками только при смерти",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Прославился своей плохой памятью`;
                }
            },
            {
                string: "(Player1-Died) пытается вознестись, но признаётся Пустотными червями как слишком зацикленный на второй карме",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Навеки застрял между материальным планом и миром небытия потому что хорни`;
                }
            },
            {
                string: "(Player1-Died) не смотрит на потолок и оказывается схвачен спустковёрткой",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Встретил весёлый сюрприз на потолке`;
                }
            },
            {
                string: "(Player1-Died) видит горящего итератора, залезает в него и сгорает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб потому что так надо было`;
                }
            },
            {
                string: "(Player1-Died) уходит за фруктами и больше не возвращается в игру",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Был убит Дуто в результате неудачного побега из РВГИ`;
                }
            },
            {
                string: "(Player1-Died) трогает живую траву. Заканчивается трагично",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Потрогал живую траву`;
                }
            },
            {
                string: "(Player1-Died) путешествует по подвесу итератора с помощью крюк-червя, но не рассчитывает один из прыжков и сбрасывается в пропасть",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Возненавидел подвес`;
                }
            },
            {
                string: "(Player1-Died) попадается в чью-то ловушку и погибает страшной смертью",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб из-за чьей-то садистской ловушки`;
                }
            },
            {
                string: "(Player1-Died) заражается чем-то и умирает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Заболел`;
                }
            },
            {
                string: "(Player1-Died) решает, что обнять долгонога - блестящая идея",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Придумал блестящую идею`;
                }
            },
            {
                string: "(Player1-Died) умирает по понятным всем причинам",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Умер по понятным всем причинам`;
                }
            },
            {
                string: "(Player1-Died) вваливается в камеру Бесподобной Невинности весь в грязи и немедленно погибает по причине вмешательства Высших Божественных Итераторских Сил",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Погиб по причине вмешательства Высших Божественных Итераторских Сил`;
                }
            },
            {
                string: "(Player1-Died) следует за своими амбициями. Они приводят его в гроб",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    placements.push(player1);

                    player1.alive = false;
                    player1.killedBy = `Довелся своими амбициями`;
                }
            },
            {
                string: "(Player1-Died) пытается приручить красного ящера с помощью туши кальмарокады, но красный ящер решает, что (Player1-Died) куда вкуснее кальмарокады",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Неудачно приручил красного ящера`);
                }
            },
            {
                string: "(Player1-Died) погибает от жестокой природы великого рандомайзера",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Был убит системой работы ГИ`);
                }
            },
            {
                string: "(Player1-Died) пытается взобраться на край комнаты и выпадает за карту",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Стал смелым бета-тестером`);
                }
            },
            {
                string: "(Player1-Died) спотыкается и падает лицом на копье",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Поцеловал копьё`);
                }
            },
            {
                string: "(Player1-Died) засыпает и больше не просыпается. По большей части потому, что он заснул посреди GW_B02",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Нужно организовать режим сна лучше`);
                }
            },


            {
                string: "(Player1) мастерит крайне опасное оружие, которое бы позволило ему легко победить в ГИ; (Player2-Died) случайно ломает прототип и (Player1) в гневе убивает его",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Нехуй к чужим разработкам лезть (был убит <strong><font color="ffff00">` + player1.name + `</font></strong>)`;
                }
            },
            {
                string: "(Player1) приходит в голову идея, как решить Великую Задачу, и он немедленно пробует её на (Player2-Died). В итоге не ясно - сдох (Player2-Died) или вознёсся",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Стал котом Шрёдингера (<strong><font color="ffff00">` + player1.name + `</font></strong>)`;
                }
            },
            {
                string: "(Player1) кушает внутренности (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Стал обедом <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) скидывает (Player2-Died) в водоём с пиявками",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был подло убит <strong><font color="ffff00">` + player1.name + `</font></strong> и пиявками`;
                }
            },
            {
                string: "(Player1-Died) воинственно вызывает (Player2) на поединок, но оказывается до неловкости быстро убит",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player2.kills++;
                    player2.hasKilled.push(player1.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Не смог побороть <strong><font color="ffff00">` + player2.name + `</font></strong> в поединке`;
                }
            },
            {
                string: "(Player1) закладывает мину, надеясь убить ящера, но на неё случайно попадается (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player1);
                    player2.alive = false;
                    player2.killedBy = `Попался в мину <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) устраивает засаду для (Player2-Died), но устаёт ждать и просто приходит за ним",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был убит нетерпеливостью <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) и (Player2-Died) играют в чичико, решая, кто будет добычей камуфляжной ловушки. Выигрывает (Player1), подло толкнув (Player2-Died) в пасть растения",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был подло убит <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) и (Player2) решили поспорить, кто перепрыгнет на кальмарокаде 20-ти метровую пропасть. Небольшой промежуток времени спустя (Player2) с грустью смотрит в пропасть, куда падает (Player1-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Неудачно прыгнул`;
                }
            },
            {
                string: "(Player1-Died) нападает на что-то, что считает (Player2), но обознаётся и натыкается на очень голодного белого ящера. Ням",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Перепутал <strong><font color="ffff00">` + player2.name + `</font></strong> с ящером`;
                }
            },
            {
                string: "(Player1) жестоко расчленяет (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Стал расчленёнкой авторства <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) приручает ящера свежим трупом (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Стал обедом для ящера <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) не соглашается с (Player2-Died) о принципе работы цикла. (Player2-Died) злится и решает продемонстрировать на практике, убивая себя для перерождения",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Слишком упорно доказывал свою точку зрения`;
                }
            },
            {
                string: "(Player1-Died) устраивает засаду для (Player2), но попадается в собственную же ловушку",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Попал в собственную же ловушку`;
                }
            },
            {
                string: "(Player1-Died) взбирается на высокую точку. Заметивший его снизу (Player2) точно попадает копьем прямо в (Player1-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player2.kills++;
                    player2.hasKilled.push(player1.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Стал доказательством выдающейся меткости <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) устаёт объяснять (Player2-Died), почему слизнекоты не могут страдать, и протыкает его копьем",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `<strong><font color="ffff00">` + player1.name + `</font></strong> слишком сильно объяснял ему чувства слизнекотов`;
                }
            },
            {
                string: "(Player1) сжигает (Player2-Died) заживо",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Погиб потому что его блять <strong><font color="ffff00">` + player1.name + `</font></strong> сжёг`;
                }
            },
            {
                string: "(Player1) натравливает на (Player2-Died) наблюдателей с жалами",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Оказался заколот наблюдателями от <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) топит (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был утоплен <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) расстреливает (Player2-Died) из автомата",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Погиб от ультранасилия <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) падает на (Player2-Died), вследствие чего (Player2-Died) погибает",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был раздавлен <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) избивает (Player2-Died) камнем до смерти",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Погиб от ультранасилия <strong><font color="ffff00">` + player1.name + `</font></strong> в стиле каменного века`;
                }
            },
            {
                string: "(Player1) убивает (Player2-Died) морально, после чего пронзает его копьем",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был морально (и буквально) убит <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) вонзает копьё в живот (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был пронзён копьём <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died), не осознавая, что делает, убивает (Player2-Died). Позже, не в силах простить себя за это, (Player1-Died) убивает и себя",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Погиб от чувства вины`;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был убит безумствующим <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) побеждает (Player2-Died) в честном поединке",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Погиб в доблестном поединке с <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) сходит с ума, и (Player2) принимает решение убить (Player1-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player2.kills++;
                    player2.hasKilled.push(player1.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Был убит <strong><font color="ffff00">` + player2.name + `</font></strong> во всееобщее благо`;
                }
            },
            {
                string: "(Player1-Died) и (Player2-Died) пытаются утопить друг друга, но их обоих сьедает левиафан",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Топился вместе с <strong><font color="ffff00">` + player2.name + `</font></strong> и не заметил левиафана`;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Топился вместе с <strong><font color="ffff00">` + player1.name + `</font></strong> и не заметил левиафана`;
                }
            },
            {
                string: "(Player1) скидывает (Player2-Died) с обрыва",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был скинут с обрыва коварными руками <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) и (Player2-Died) убили друг друга одновременно ",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player1.alive = false;
                    player1.killedBy = `Был убит и убил <strong><font color="ffff00">` + player2.name + `</font></strong>`;

                    placements.push(player2);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player2.alive = false;
                    player2.killedBy = `Был убит и убил <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) призывает стервятника с помощью личинки, надеясь убить (Player2-Died), и он успешно погибает",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был съеден стервятником, призванным <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) призывает стервятника с помощью личинки, надеясь убить (Player2-Died), но в итоге они оба погибают",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Был съеден стервятником, призванным собой же`;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Был съеден стервятником, призванным <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) призывает стервятника с помощью личинки, надеясь убить (Player2), но погибает сам, а (Player2) успешно сбегает",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Был съеден стервятником, призванным собой же`;
                }
            },
            {
                string: "(Player1-Died) оказывается котенком, (Player2) принимает решение утопить его",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player2.kills++;
                    player2.hasKilled.push(player1.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Погиб от жестокости <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "У (Player1) и (Player2-Died) нет жемчуга на оплату заставе мусорщиков. (Player1) кидает им (Player2-Died), чтобы те отвлеклись на его убийство, и пробегает мимо",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Стал платой <strong><font color="ffff00">` + player1.name + `</font></strong> на заставе`;
                }
            },
            {
                string: "(Player1-Died) весь цикл преследует (Player2), но (Player2) в конце концов выходит из себя и убивает (Player1-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player2.kills++;
                    player2.hasKilled.push(player1.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Разозлил <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) натыкается на голодного (Player2) и предлагает маленькую сколопендру, лежащую неподалёку, но (Player2) накидывается на и сьедает (Player1-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player2.kills++;
                    player2.hasKilled.push(player1.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Стал обедом <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) и (Player2-Died) дружатся, но под конец цикла (Player1) предает (Player2-Died), всадив ему в спину острозаточенное копье",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Оказался предан <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1);
                }
            },
            {
                string: "(Player1) врёт (Player2-Died) о благих намерениях, и пока (Player2-Died) любуется закатом, (Player1) приставляет к его затылку дуло револьвера",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Был расстрелян <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1);
                }
            },
            {
                string: "После долгого путешествия (Player1) достает из-за пазухи дробовик. (Player2-Died) слёзно умоляет о пощаде, стоя перед (Player1) на коленях. Раздается смачный выстрел прямо в голову (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Был расстрелян <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1);
                }
            },
            {
                string: "(Player1) сует руку в кишки (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `<strong><font color="ffff00">` + player1.name + `</font></strong> покопошился в его кишках`, player1);
                }
            },


            {
                string: "(Player1) продаёт (Player2-Died) фальшивую бомбу; позже (Player2-Died) погибает в драке с (Player3), кинув в него простой перекрашенный камень",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player3.kills++;
                    player3.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Погиб от рук <strong><font color="ffff00">` + player3.name + `</font></strong> и мошенничества <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1), (Player2) и (Player3-Died) спорят, кто дольше может задерживать дыхание под водой. Побеждает (Player3-Died), не всплывший на поверхность по сей день",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player3);
                    player3.alive = false;
                    player3.killedBy = `Победил в споре`;
                }
            },
            {
                string: "(Player1), (Player2-Died) и (Player3) дерутся с друг другом. (Player1) ранен, (Player2-Died) погибает, а (Player3) сбегает",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Не смог сбежать от <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) и (Player2-Died) устраивают засаду (Player3), но (Player3) хорошо вооружен и убивает их",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    placements.push(player2);
                    player3.kills++;
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player3.hasKilled.push(player2.name);

                    player1.alive = false;
                    player1.killedBy = `Не смог пересилить <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                    player2.alive = false;
                    player2.killedBy = `Не смог пересилить <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) пытается устроить засаду на (Player2), скинув на него наковальню, но обознаётся и убивает (Player3-Died)",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Оказался перепутан с <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) и (Player2-Died) долго дерутся без оружия, но под конец драки прибегает (Player3) и убивает их обоих",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    placements.push(player2);
                    player3.kills++;
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player3.hasKilled.push(player2.name);

                    player1.alive = false;
                    player1.killedBy = `Оказался коварно добит <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                    player2.alive = false;
                    player2.killedBy = `Оказался коварно добит <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) считает своим долгом прекратить страдания из-за цикла и сбрасывает в Пустоту (Player2-Died) и (Player3-Died)",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    placements.push(player3);
                    player1.kills++;
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player1.hasKilled.push(player3.name);

                    player2.alive = false;
                    player2.killedBy = `Сумел отринуть страдания цикла благодаря <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                    player3.alive = false;
                    player3.killedBy = `Сумел отринуть страдания цикла благодаря <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died), (Player2-Died) и (Player3-Died) взрываются в драке с бомбой",
                playerCount: 3,
                howManyDeaths: 3,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    placements.push(player2);
                    placements.push(player3);

                    player1.kills++;
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player1.hasKilled.push(player3.name);

                    player2.kills++;
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player2.hasKilled.push(player3.name);

                    player3.kills++;
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player3.hasKilled.push(player2.name);

                    player1.alive = false;
                    player1.killedBy = `Взорвался в драке с <strong><font color="ffff00">` + player2.name + `</font></strong> и <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                    player2.alive = false;
                    player2.killedBy = `Взорвался в драке с <strong><font color="ffff00">` + player1.name + `</font></strong> и <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                    player3.alive = false;
                    player3.killedBy = `Взорвался в драке с <strong><font color="ffff00">` + player1.name + `</font></strong> и <strong><font color="ffff00">` + player2.name + `</font></strong>`;

                }
            },
            {
                string: "(Player1-Died) пропадает без вести и вскоре обнаруживается мертвым. В убийстве подозревают (Player2), но на самом деле его убил (Player3)",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Был тайно убит <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) пытается убить (Player2), но (Player3-Died) принимает решение защитить (Player2), пожертвовав собой",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Пожертвовал собой ради <strong><font color="ffff00">` + player2.name + `</font></strong> (был убит <strong><font color="ffff00">` + player1.name + `</font></strong>)`;
                }
            },
            {
                string: "(Player1-Died) умирает от депрессии, узнав, что (Player2) убил (Player3-Died)",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player3);
                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player3.name);

                    player3.alive = false;
                    player3.killedBy = `Был убит <strong><font color="ffff00">` + player2.name + `</font></strong>`
                    player1.alive = false;
                    player1.killedBy = `Погиб от депрессии`;
                }
            },
            {
                string: "(Player1-Died) признаётся психически больным. (Player2) и (Player3) принимают решение сопроводить его до пустоты и утопить ради его же блага",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `В психушке`;
                }
            },
            {
                string: "(Player1-Died) и (Player2-Died) случайно натыкаются на (Player3) и оказываются убиты им",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    placements.push(player2);
                    player3.kills++;
                    player3.kills++;
                    player3.hasKilled.push(player1.name);
                    player3.hasKilled.push(player2.name);

                    player1.alive = false;
                    player1.killedBy = `Был убит <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                    player2.alive = false;
                    player2.killedBy = `Был убит <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) рассказывает (Player2-Died) и (Player3-Died) про красивое место и заставляет их встать на нарисованную на земле метку. (Player2-Died) и (Player3-Died) отправляются смотреть сны из-за упавшей им на голову наковальни",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Погиб от чудесных впечатлений и наковальни <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1)
                    theFunnyKillFunction(player3, `Погиб от чудесных впечатлений и наковальни <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1)
                }
            },
            {
                string: "(Player1) и (Player2) хватают (Player3-Died) и распиливают его болгаркой",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player3, `Распилили болгаркой <strong><font color="ffff00">` + player1.name + `</font></strong> и <strong><font color="ffff00">` + player2.name + `</font></strong>`, player1, player2);
                }
            },
            {
                string: "(Player1-Died) и (Player2) попадаются в ловушку (Player3), но сбегают. Позже (Player1-Died) умирает от полученных ран, и плачущий над ним (Player2) клянётся отомстить",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Попался в ловушку <strong><font color="ffff00">` + player3.name + `</font></strong>`, player3);
                }
            },
            {
                string: "(Player1) смертельно отравляет (Player2-Died) и скармливает его труп (Player3-Died), который тоже умирает",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Был смертельно отравлен <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1);
                    theFunnyKillFunction(player3, `Съел смертельно отравленного <strong><font color="ffff00">` + player2.name + `</font></strong>`, player1);
                }
            },
            {
                string: "(Player1) устраивает соревнование на скоростное поедание лапшемух. (Player2-Died) и (Player3-Died) дисквалифицируются по причине смерти от жал",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `К4 момент`);
                    theFunnyKillFunction(player3, `К4 момент`);
                }
            },


            {
                string: "(Player1-Died) на нервах кричит на (Player2), (Player2) плачет и жалуется (Player3), (Player3) зовёт своего другана (Player4) и (Player4) всаживает кулак в морду (Player1-Died)",
                playerCount: 4,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player4.kills++;
                    player4.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `По цепочке событий наткнулся на кулак <strong><font color="ffff00">` + player4.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) погибает, упав с огромной высоты, (Player2) скорбит по нему, (Player3) радуется его смерти, а (Player4) скармливает его труп ящерам",
                playerCount: 4,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Открыл закон гравитации`;
                }
            },
            {
                string: "(Player1) кидает бомбу в (Player2-Died), (Player3-Died) и (Player4-Died), вследствие чего все трое умирают",
                playerCount: 4,
                howManyDeaths: 3,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player1.kills++;
                    player1.hasKilled.push(player4.name);

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `<strong><font color="ffff00">` + player1.name + `</font></strong> бомбанул`;

                    placements.push(player3);
                    player3.alive = false;
                    player3.killedBy = `<strong><font color="ffff00">` + player1.name + `</font></strong> бомбанул`;

                    placements.push(player4);
                    player4.alive = false;
                    player4.killedBy = `<strong><font color="ffff00">` + player1.name + `</font></strong> бомбанул`;
                }
            },
            {
                string: "(Player1) убивает котят (Player2), отчего (Player2) сходит с ума и устраивает резню, жертвами которой становятся (Player3-Died) и (Player4-Died)",
                playerCount: 4,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player1.hasKilled.push(`Котята ` + player2.name)

                    player2.kills++;
                    player2.kills++;
                    player2.hasKilled.push(player3.name);
                    player2.hasKilled.push(player4.name);

                    placements.push(player3);
                    player3.alive = false;
                    player3.killedBy = `Погиб в массовой резне <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                    placements.push(player4);
                    player4.alive = false;
                    player4.killedBy = `Погиб в массовой резне <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) предлагает (Player2), (Player3), (Player4) услуги по добыче домашнего жемчуга; тут же ему в голову прилетает коктейль молотова",
                playerCount: 4,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player2.kills++;
                    player3.kills++;
                    player4.kills++;
                    player2.hasKilled.push(player1.name);
                    player3.hasKilled.push(player1.name);
                    player4.hasKilled.push(player1.name);

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Не смог раскрутить свой бизнес`;
                }
            }
        ],
        revival: [
            {
                string: "Цикл возвращает (Player1-Rev) обратно, и он полностью готов надрать своим прошлым обидчикам зад",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "Цикл возвращает (Player1-Rev) обратно, но он не особенно в восторге",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) восстаёт из мёртвых",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) выкарабкивается из Пустоты",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) эпично возрождается",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) респавнится в какой-то глуши",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) отменяет свою смерть",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) шлёт правила игры куда подальше и врывается на сцену",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "Пророчество о том, что (Player1-Rev) вернётся вопреки судьбе, сбывается",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) возвращает к жизни какой-то итератор",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) находит выход из закулисья",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) отголосится настолько сильно, что вновь приобретает материальное тело",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },

            {
                string: "(Player1-Rev) оживает прямо в тот момент, когда (Player2) собирается его есть. (Player2) прогоняют голодным",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "Оживший (Player1-Rev) весь цикл бегает за (Player2), пытаясь спросить, какой сегодня год",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) приходит в виде Отголоска к (Player2) и убеждает оживить его",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "Неизвестный спонсор предоставляет (Player1-Rev) для (Player2); (Player2) немного растерян, но принимает дар",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) спавнят обратно с помощью бистмастера; читер (Player2-Died) немедленно дисквалифицируется из достопочтенных РВГИ",
                playerCount: 2,
                howManyDeaths: 1,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    player2.alive = false;
                    player2.killedBy = `Был дисквалифицирован`;

                    placements.push(player2);
                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) крадёт тело (Player2-Died) и возвращается в игру",
                playerCount: 2,
                howManyDeaths: 1,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;
                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    player2.alive = false;
                    player2.killedBy = `Добровольно-принудительно отдал тело <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                    placements.push(player2);
                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) восстаёт из мёртвых прямо на глазах у (Player2) и (Player3) и неплохо травмирует их зрелищем",
                playerCount: 3,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            }
        ]*/
    }
}

/*var eventRain = {
    regular: function () {
        var eventObject = decideEventObject(eventRain[`array`][`regular`]);

        var playerCount = eventObject.playerCount;

        var players = decidePlayers(playerCount);
        currentUnusedCharacterNumber -= playerCount;

        var eventString = parseAllNamesAndPronouns(eventObject.string, players)
        console.log(eventString, players);

        if (playerCount === 1) var eventImage = makeImages(players[0].image)
        else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
        else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
        else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
        else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
        else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

        var event = eventImage + eventString + `<br><br>`;

        return event;
    },
    lethal: function () {
        do var eventObject = decideEventObject(eventRain[`array`][`lethal`])
        while (eventObject.howManyDeaths >= currentCharacterNumber);

        var playerCount = eventObject.playerCount;

        var players = decidePlayers(playerCount);
        currentUnusedCharacterNumber -= playerCount;

        var eventString = parseAllNamesAndPronouns(eventObject.string, players)
        console.log(eventString, players);

        if (playerCount === 1) var eventImage = makeImages(players[0].image)
        else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
        else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
        else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
        else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
        else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

        var event = eventImage + eventString + `<br><br>`;

        eventObject.updateData.apply(eventObject, players);

        return event;
    },
    revival: function () {
        var eventObject = decideEventObject(eventRain[`array`][`revival`]);

        var playerCount = eventObject.playerCount;

        var revivedPlayers = decideRevivedPlayers(eventObject.howManyRevivals);
        if (revivedPlayers == "stop") return "stop";
        var justPlayers = decidePlayers(playerCount - eventObject.howManyRevivals);

        var players = revivedPlayers.concat(justPlayers);

        currentUnusedCharacterNumber -= playerCount - eventObject.howManyRevivals;

        var eventString = parseAllNamesAndPronouns(eventObject.string, players)
        console.log(eventString, players);

        if (playerCount === 1) var eventImage = makeImages(players[0].image)
        else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
        else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
        else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
        else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
        else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

        var event = eventImage + eventString + `<br><br>`;

        eventObject.updateData.apply(eventObject, players);

        return event;
    },
    array: {
        regular: [
            {
                string: "(Player1) решает утопиться в Пустоте, но на следующий цикл всё равно просыпается в своём убежище",
                playerCount: 1
            },
            {
                string: "(Player1) видит плохие сны и, проснувшись, плачет всю оставшуюся ночь",
                playerCount: 1
            },
            {
                string: "(Player1) понимает, что есть грибы днем было плохим решением, но не умирает",
                playerCount: 1
            },
            {
                string: "(Player1) рисует на стенах убежища",
                playerCount: 1
            },
            {
                string: "(Player1) взбирается на самую высокую точку мира, где не идет дождь",
                playerCount: 1
            },
            {
                string: "Убежище (Player1) ломается, из-за чего (Player1) приходится спать в компании улиток",
                playerCount: 1
            },
            {
                string: "(Player1) решает, кому стать его жертвой в следующем цикле",
                playerCount: 1
            },
            {
                string: "(Player1) спит, засунув заднюю лапу в рот",
                playerCount: 1
            },
            {
                string: "(Player1) находит в своём убежище слизнекотёнка и дружится с ним",
                playerCount: 1
            },
            {
                string: "(Player1) снится победа",
                playerCount: 1
            },
            {
                string: "(Player1) оказывается в одном убежище с группой мусорщиков",
                playerCount: 1
            },
            {
                string: "(Player1) надеется когда-нибудь попасть в пантеон РВРП",
                playerCount: 1
            },
            {
                string: "(Player1) мечтает о популярности",
                playerCount: 1
            },
            {
                string: "(Player1) съедает все свои припасы, которые планировал растянуть ещё на три цикла",
                playerCount: 1
            },
            {
                string: "(Player1) надеется не умереть в следующем цикле по-тупому",
                playerCount: 1
            },
            {
                string: "(Player1) говорит сам с собой, пока не засыпает",
                playerCount: 1
            },
            {
                string: "(Player1) завороженно мечтает, как будет охотиться за другими участниками на следующий цикл",
                playerCount: 1
            },
            {
                string: "(Player1) изучает прогноз погоды на завтра",
                playerCount: 1
            },
            {
                string: "(Player1) проводит весь дождь в сверхструктуре какого-то итератора",
                playerCount: 1
            },
            {
                string: "(Player1) проводит дождь на крыше итератора и любуется звёздным небом",
                playerCount: 1
            },
            {
                string: "(Player1) не спит и читает фанфики весь дождь",
                playerCount: 1
            },
            {
                string: "(Player1) задумывается о Великой Проблеме перед сном",
                playerCount: 1
            },
            {
                string: "(Player1) вспоминает Древних со смешанными чувствами",
                playerCount: 1
            },
            {
                string: "(Player1) выцарапывает копьём на стене убежища: «Здесь был (Player1)»",
                playerCount: 1
            },
            {
                string: "(Player1) шлёт угрозы смерти своему создателю",
                playerCount: 1
            },
            {
                string: "(Player1) разглядывает странные надписи на стене своего убежища",
                playerCount: 1
            },
            {
                string: "(Player1) молится",
                playerCount: 1
            },
            {
                string: "(Player1) чувствует себя одиноко в своём пустом убежище. Кто-нибудь, поговорите с ним",
                playerCount: 1
            },
            {
                string: "(Player1) жалеет о совершенных поступках",
                playerCount: 1
            },
            {
                string: "(Player1) строит из подручных материалов в своём убежище маленький алтарь, посвящённый Искательнице",
                playerCount: 1
            },
            {
                string: "(Player1) весь дождь пытается переводить язык Древних",
                playerCount: 1
            },
            {
                string: "(Player1) подслушивает ночные трансляции итераторов",
                playerCount: 1
            },
            {
                string: "(Player1) проводит время в регионе, где не идёт дождь, и охотится всю ночь",
                playerCount: 1
            },
            {
                string: "(Player1) снятся итераторы",
                playerCount: 1
            },
            {
                string: "(Player1) просит у богов рандома хорошей удачи на следующий цикл",
                playerCount: 1
            },
            {
                string: "(Player1) не наедается за цикл и засыпает голодным",
                playerCount: 1
            },
            {
                string: "(Player1) танцует в убежище",
                playerCount: 1
            },
            {
                string: "(Player1) прыгает по стенам убежища как одержимый",
                playerCount: 1
            },
            {
                string: "(Player1) засыпает в роскоши огромного убежища внешних далей",
                playerCount: 1
            },
            {
                string: "Голодающий (Player1) убивает собственного питомца в убежище и ест его, захлёбываясь слезами",
                playerCount: 1
            },
            {
                string: "(Player1) сочиняет какую-то мелодию, напевая её себе под нос перед сном",
                playerCount: 1
            },
            {
                string: "(Player1) просит у своего создателя пощады",
                playerCount: 1
            },

            {
                string: "(Player1) почти умирает от холода и дождя, но (Player2) спасает (Player1)",
                playerCount: 2
            },
            {
                string: "(Player1) защищает (Player2) и принимает решение сопровождать его",
                playerCount: 2
            },
            {
                string: "(Player1) тихо плачет в убежище, и (Player2) всю ночь успокаивает его",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2), оказавшись в одном убежище, делятся друг с другом своими проблемами и засыпают под шум дождя, прижавшись друг к другу",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) оказываются в одном убежище, но (Player2) боится (Player1) и засыпает в самом дальнем углу убежища",
                playerCount: 2
            },
            {
                string: "(Player1) приютил (Player2) у себя",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) подрались за убежище, но в итоге решили спать вместе",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) вместе рисуют на стенах убежища",
                playerCount: 2
            },
            {
                string: "(Player1) весь дождь маниакально объясняет (Player2), почему слизнекоты не могут страдать",
                playerCount: 2
            },
            {
                string: "(Player1) снится, как он спит с (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) заводят котят",
                playerCount: 2
            },
            {
                string: "(Player1) врывается в убежище (Player2) с мёртвым долгоногом в руках. В многозначительном молчании они пережидают дождь вместе",
                playerCount: 2
            },
            {
                string: "(Player1) предлагает (Player2) погрызть его вкусную лапу. (Player2) соглашается",
                playerCount: 2
            },
            {
                string: "(Player1) устраивает романтический ужин при свечах для (Player2), но (Player2) так и не приходит",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) спорят о том, кому хуже живётся",
                playerCount: 2
            },
            {
                string: "(Player1) не спит и наблюдает за (Player2) весь дождь",
                playerCount: 2
            },
            {
                string: "(Player1) планирует убийство (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) ссорятся, после чего проводят весь дождь по разным углам",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) строят козни",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) делятся слухами",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) спят вместе. (Player2) долго думает о том, чтобы убить (Player1) посреди сна, но в итоге решает этого не делать",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) случайно ночуют в одном и том же убежище, и (Player1) пугающе рад этому",
                playerCount: 2
            },
            {
                string: "(Player1) впускает (Player2) в своё убежище взамен на все его ценности",
                playerCount: 2
            },
            {
                string: "(Player1) нападает на (Player2) в убежище, но его копьё втыкается в стену. Остаток дождя проводится в неловкой тишине",
                playerCount: 2
            },
            {
                string: "(Player1) обнимает (Player2) во сне. (Player2) ничего не говорит",
                playerCount: 2
            },
            {
                string: "(Player1) обнимает (Player2) во сне. (Player2) его отпихивает и (Player1) просыпается в смущении",
                playerCount: 2
            },
            {
                string: "(Player1) случайно разбалтывает чей-то секрет (Player2) и угрожает (Player2) жестокой расправой. (Player2) в страхе обещает держать рот на замке",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) вместе проводят ночь, бегая по крыше какого-то итератора",
                playerCount: 2
            },
            {
                string: "(Player1) угрюмо молчит на любые попытки (Player2) завести беседу. (Player2) обижается и решает в будущем убить(Player1) при первой же возможности",
                playerCount: 2
            },
            {
                string: "(Player1) уже думает, что лицезрел смерть (Player2), когда механизм убежища захлопывается прямо на нём, но на утро (Player2) жив и здоров",
                playerCount: 2
            },
            {
                string: "(Player1) обнимает (Player2) во сне. (Player2) решает вывести вещи на новый уровень",
                playerCount: 2
            },
            {
                string: "(Player1) выцарапывает копьём на стене убежища: «(Player2) - лох»",
                playerCount: 2
            },
            {
                string: "(Player1) выцарапывает копьём на стене убежища: «(Player2), женись на мне»",
                playerCount: 2
            },
            {
                string: "Оказавшиеся в одном убежище (Player1) и (Player2) злобно делят его на две половины с помощью подручных средств",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) делятся идеями обхода табу",
                playerCount: 2
            },
            {
                string: "(Player1) снятся кошмары о (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) мурчит для (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) собирается притворяться спящим, чтобы застать врасплох и убить (Player2), но засыпает по-настоящему",
                playerCount: 2
            },
            {
                string: "(Player1) спрашивает (Player2), не разлюбил бы ли он его, будь (Player1) крюк-червём. (Player2) отвечает (Player1) чтобы он заткнулся и спал",
                playerCount: 2
            },
            {
                string: "(Player1) весь дождь дискутирует с (Player2) о возникновении их мира и случайно основывает новый культ",
                playerCount: 2
            },
            {
                string: "(Player1) случайно разбалтывает чей-то секрет (Player2), и (Player2) шантажирует этим (Player1), заставляя работать на себя",
                playerCount: 2
            },
            {
                string: "(Player1) находится на грани нервного срыва и почти убивает (Player2) в убежище, однако (Player2) удаётся его успокоить",
                playerCount: 2
            },
            {
                string: "(Player1) настолько сильно горит желанием победить, что застрявший с ним в одном убежище (Player2) начинает за него болеть",
                playerCount: 2
            },
            {
                string: "(Player1) рассказывает (Player2) сказки перед сном",
                playerCount: 2
            },
            {
                string: "(Player1) издаёт странные звуки во сне и (Player2) не может заснуть из-за них",
                playerCount: 2
            },
            {
                string: "(Player1) делится слухами с (Player2), и (Player2) делает удивлённое лицо, при этом прекрасно зная, что эти слухи он и начал распускать",
                playerCount: 2
            },
            {
                string: "(Player1) спаивает (Player2) вином",
                playerCount: 2
            },
            {
                string: "(Player1) оказывается в очень тёмном убежище и не замечает прячущегося там (Player2)",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) оказываются в одном убежище. Сначала (Player1) боится, но позже расслабляется от дружелюбности (Player2)",
                playerCount: 2
            },
            {
                string: "Мнение (Player1) о (Player2) кардинально меняется в худшую сторону, когда они оказываются в одном и том же убежище",
                playerCount: 2
            },
            {
                string: "(Player1) предложил (Player2) посмотреть, как создается домашний жемчуг",
                playerCount: 2
            },
            {
                string: "(Player1) поясняет (Player2), что богиня Шквал и богиня Искательница никогда не воевали и всегда были в союзе. (Player2) яростно отрицает данную теорию",
                playerCount: 2
            },
            {
                string: "(Player1) и (Player2) всю ночь спорят о том, чем на самом деле является синий фрукт",
                playerCount: 2
            },
            {
                string: "(Player1) просыпается посреди дождя и спрашивает (Player2), готова ли анкета на Щепку",
                playerCount: 2
            },
            {
                string: "(Player1) решает убить (Player2) во время дождя, но тот неверно воспринимает его действия. Ситуация скатывается в запрещённую правилами сцену",
                playerCount: 2
            },
            {
                string: "(Player1) застрял в (Player2)",
                playerCount: 2
            },


            {
                string: "(Player1) взмаливается во славу Алексея, оглушая рядом сидящих (Player2) и (Player3)",
                playerCount: 3
            },
            {
                string: "(Player1) не видит смысла продолжать бороться в ГИ, но (Player2) напоминает о том разе, как (Player3) насолил ему, и (Player1) загорается идеей мести",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) спорят, чья жизнь хуже. В итоге все соглашаются, что несчастнее всего (Player3) и успокаивают (Player3)",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) спят в куче",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) не доверяют (Player3) в их убежище и спят по очереди, чтобы он ничего не вытворил",
                playerCount: 3
            },
            {
                string: "(Player1) притворяется, что спит, и подслушивает разговор (Player2) и (Player3)",
                playerCount: 3
            },
            {
                string: "(Player1) пытается убедить всех, что Великая Задача - чепуха, (Player2) осуждает его за неуважение к Древним, (Player3) вообще не понимает, о чем речь",
                playerCount: 3
            },
            {
                string: "Оказавшиеся в одном убежище (Player1), (Player2) и (Player3) весь дождь играют в карты",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) весь дождь спорят о том, почему Щепка умерла от нахождения решения и нашла ли она его вообще",
                playerCount: 3
            },
            {
                string: "(Player1) нападает на (Player2) в убежище, но (Player2) в последний момент убеждает (Player1) не убивать его взамен на ценную информацию о (Player3)",
                playerCount: 3
            },
            {
                string: "(Player1) настигает приступ стыда, и он начинает извиняться перед (Player2) и (Player3) за всё",
                playerCount: 3
            },
            {
                string: "(Player1) и (Player2) секретно встречаются ночью на крыше итератора. (Player3) случайно видит их и решает начать распускать слухи про них",
                playerCount: 3
            },
            {
                string: "(Player1) рассказывает (Player2) и (Player3) страшилки про нарушение табу",
                playerCount: 3
            },
            {
                string: "(Player1) рассказывает (Player2) свой план убийства (Player3). (Player2), как лучший друг (Player3), внимательно слушает",
                playerCount: 3
            },
            {
                string: "(Player1) раздражается от воспоминаний о (Player2) и (Player3), после чего долго сидит и натачивает копьё",
                playerCount: 3
            },
            {
                string: "(Player1) случайно наступает на ногу (Player2) и обвиняет в этом (Player3). Начинается ссора",
                playerCount: 3
            },
            {
                string: "(Player1), (Player2) и (Player3) хотят провести сеанс групповой терапии, но так и не могут решить, кто терапевт",
                playerCount: 3
            },
            {
                string: "(Player1) замечает, что (Player2) умеет рисовать, и весь дождь молит его нарисовать (Player3) в костюме горничной",
                playerCount: 3
            },
            {
                string: "(Player1) весь дождь жалуется (Player2) и (Player3) на новичков, даже не знающих о ГИ или пантеоне или Искательнице или-",
                playerCount: 3
            },


            {
                string: "(Player1), (Player2), (Player3) и (Player4) устраивают пижамную вечеринку в убежище",
                playerCount: 4
            },
            {
                string: "(Player1), (Player2), (Player3) и (Player4) обсуждают легендарную войну богини Шквал и бога Степана, в итоге всё перерастает в драку",
                playerCount: 4
            },
            {
                string: "(Player1) доносит до (Player2) слухи о том, что (Player3) и (Player4) встречаются",
                playerCount: 4
            },
            {
                string: "(Player1) доносит до (Player2) слухи о том, что (Player3) недавно чуть не убил (Player4)",
                playerCount: 4
            },
            {
                string: "(Player1) хочет разделить убежище на части, но (Player2), (Player3) и (Player4) заставляют его спать в куче вместе с ними",
                playerCount: 4
            },
            {
                string: "(Player1) отчаянно пытается убить (Player2); (Player3) и (Player4) приходится прилепить его к стенке убежища",
                playerCount: 4
            },
            {
                string: "(Player1), (Player2), (Player3) и (Player4) решают сыграть в монополию, но никто не знает правила",
                playerCount: 4
            },


            {
                string: "(Player1), (Player2), (Player3), (Player4), (Player5) и (Player6) оказываются в крохотном убежище",
                playerCount: 6
            }
        ],
        lethal: [
            {
                string: "(Player1-Died) ложится спать голодным уже второй цикл и умирает от голода",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Проголодался`;
                }
            },
            {
                string: "(Player1-Died) не замечает сколопендру в углу убежища и получает смертельную дозу электричества",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Обнялся с красной сколопендрой`;
                }
            },
            {
                string: "(Player1-Died) умирает, обнаружив, что его убежище не защищает от дождя",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Не выдержал внезапно полученную информацию`;
                }
            },
            {
                string: "(Player1-Died) висит на рогах оленя и умирает от дождя",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Познал механику оленей`;
                }
            },
            {
                string: "(Player1-Died) рисует пиктограмму на полу убежища со скуки, но из неё появляется Золотой Сталкер и поглощает (Player1-Died)",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Занимался халатным оккультизмом`;
                }
            },
            {
                string: "(Player1-Died) оказывается в одном убежище с группой мусорщиков. Их слишком много, и когда они решают напасть, (Player1-Died) не может защититься",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Переспал с мусорщиками`;
                }
            },
            {
                string: "(Player1-Died) приводит в убежище прирученного ящера, не зная, что ящер всё ещё голодный. На следующий цикл живым выходит только ящер",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Плохо обращался с домашними животными`;
                }
            },
            {
                string: "(Player1-Died) не успевает найти убежище вовремя и погибает под дождём",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Смыло дождём`;
                }
            },
            {
                string: "(Player1-Died) почти забирается на самую высокую точку мира, но падает и разбивается",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Не достиг высот`;
                }
            },
            {
                string: "(Player1-Died) хранит в своём убежище столько хлама, что в итоге не влезает внутрь и погибает под дождём",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Страдал патологическим накопительством`;
                }
            },
            {
                string: "(Player1-Died) тонет в затопленной дождём комнате по пути к убежищу",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Утонул`;
                }
            },
            {
                string: "(Player1-Died) гуляет ночью по крыше итератора, но недооценивает опасность этого времени суток и погибает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Был съеден ужасами ночи`;
                }
            },
            {
                string: "(Player1-Died) проводит всё время в Глубинах, где не идёт дождь, но затем понимает, что оттуда не выбраться, и идёт возноситься",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Помер от тупости`;
                }
            },
            {
                string: "(Player1-Died) вспоминает все те разы, как ошибался или позорился за жизнь, и умирает от кринжа",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Погиб от кринжа`;
                }
            },
            {
                string: "(Player1-Died) застревает в проходе в убежище и погибает",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Застрял в проходе`;
                }
            },
            {
                string: "(Player1-Died) бросает дымовую бомбу в убежище и задыхается от обилия спор",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Погиб от недостатка воздуха`;
                }
            },
            {
                string: "(Player1-Died) не может уснуть и решает поэкспериментировать с жемчугом, пытаясь проглотить 10 штук. На следующий цикл он не выходит из убежища",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Глотал жемчуг`;
                }
            },
            {
                string: "Убежище (Player1-Died) оказывается неисправным и не открывается на следующий цикл. (Player1-Died) остаётся только ждать своей смерти",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Заснул в неисправном убежище`;
                }
            },
            {
                string: "У (Player1-Died) не прогружается игровой сон и он остаётся в убежище навсегда",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Забагал`)
                }
            },
            {
                string: "(Player1-Died) пережидает дождь в структуре итератора, будучи уверенным, что там безопасно. Он тут же уёбывается об электрическую катушку",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Получил смертельную дозу электричества`)
                }
            },
            {
                string: "(Player1-Died) поджаривается электрической бурей в подвесе какого-то итератора",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `и запёкся как курочка гриль`)
                }
            },
            {
                string: "(Player1-Died) пытается подлатать раны, полученные за цикл, но делает только хуже и умирает от кровотечения",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Был плохим врачом`)
                }
            },


            {
                string: "(Player1) и (Player2-Died) дерутся за убежище; (Player1) убивает (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был убит <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) отказывается впустить (Player2-Died) в убежище, и (Player2-Died) умирает",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Смыло дождем (потому что его не пустил бяка <strong><font color="ffff00">` + player1.name + `</font></strong>!!!)`;
                }
            },
            {
                string: "(Player1) рассказывает свой страшный секрет (Player2-Died). (Player2-Died) решает, что умереть под дождём лучше, чем остаться в убежище",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Узнал страшный секрет <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) проводит слишком много времени преследуя (Player2) и не успевает добежать до убежища",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Слишком много сталкерил за <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) в последнюю секунду врывается в убежище, где уже сидит (Player2). Такое соседство (Player2) не по душе, и (Player1-Died) оказывается убит",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Пытался стать соседом <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) прибивает (Player2-Died) копьём к стене и оставляет (Player2-Died) умирать от дождя",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был брутально убит <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) и (Player2-Died) спят вместе, но посреди дождя (Player1) просыпается и убивает (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был убит <strong><font color="ffff00">` + player1.name + `</font></strong> во сне`;
                }
            },
            {
                string: "(Player1) прячется в убежище и неожиданно убивает зашедшего туда (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Внезапно был убит <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) и (Player2) играют в камень-ножницы-бумага, чтобы понять, кто останется в убежище. (Player1-Died) проигрывает",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Не выиграл в камень-ножницы бумага против <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) и (Player2-Died) играют в камень-ножницы-бумага, чтобы понять, кто останется в убежище. (Player1) проигрывает, но просто убивает (Player2-Died), чтобы занять убежище",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Выиграл в камень-ножницы-бумага против <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) обнимает (Player2) во сне. (Player2) пугается и пробивает голову (Player1-Died) копьём",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Дообнимался с <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "Голодный (Player1) врывается в убежище (Player2-Died) и убивает его, чтобы съесть",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Стал ночным перекусом <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) рассказывает (Player2) о своих проблемах, но (Player2) устает от нытья и убивает (Player1-Died) чтобы заснуть в покое",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Задолбал <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) притворяется спящим, чтобы застать врасплох (Player2-Died). (Player2-Died) делает то же самое. Чуть позже они оба нападают на и убивают друг друга",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Попытался обхитрить <strong><font color="ffff00">` + player2.name + `</font></strong>, пока он пытался обхитрить его`;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Попытался обхитрить <strong><font color="ffff00">` + player1.name + `</font></strong>, пока он пытался обхитрить его`;
                }
            },
            {
                string: "(Player1) приглашает (Player2-Died) в своё убежище, но (Player2-Died) предпочёл бы умереть под дождём чем ночевать с (Player1)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Погиб от собственной привередливости`;
                }
            },
            {
                string: "(Player1) не нравятся соседи в убежище, но нравятся деньги, так что он убивает и продает (Player2-Died) на органы",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;


                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был продан на органы. За деталями пишите <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) отказывается впускать (Player2) в убежище, так что (Player2) просто убивает его",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Отказал <strong><font color="ffff00">` + player2.name + `</font></strong> вход в убежище`;
                }
            },
            {
                string: "(Player1) хочет подружиться с оказавшимся с ним в одном убежище (Player2-Died), но он отвечает агрессией, и (Player1) убивает его",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Быковал на <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) нападает на (Player2-Died) в убежище и, несмотря на мольбы о пощаде и готовность сделать что угодно ради жизни, убивает его",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был беспощадно убит <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) и (Player2-Died) мешают друг другу добраться до убежища, однако в итоге оба погибают",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `<strong><font color="ffff00">` + player2.name + `</font></strong> мешал искать убежище`;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `<strong><font color="ffff00">` + player1.name + `</font></strong> мешал искать убежище`;
                }
            },
            {
                string: "(Player1-Died) решает соблазнить (Player2), но (Player2) не из робкого десятка, и запинывает (Player1-Died) до смерти",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Соблазнял <strong><font color="ffff00">` + player2.name + `</font></strong>`
                }
            },
            {
                string: "Пьяный (Player1-Died) решает похвастаться силой (Player2-Died) и открывает засовы убежища вручную. Оба погибают мучительной смертью под водой",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;


                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Погиб от пьянства`;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Стал жертвой пьянства <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) шуршит запасами еды, от чего (Player2) бесится и незамедлительно принимает меры по убийству (Player1-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Невольно выбесил <strong><font color="ffff00">` + player2.name + `</font></strong>`
                }
            },
            {
                string: "(Player1-Died) умирает от сердечного приступа, когда (Player2) предлагает \"немного\" сблизиться ",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Не выдержал пикантного предложения`
                }
            },
            {
                string: "(Player1) видит раненого (Player2-Died), не в состоянии самому добраться до убежища и молящего о помощи, но оставляет его умирать под дождем",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Погиб от равнодушия <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) горячо спорит с (Player2-Died) о вкусе нейронов и ударяет его голову о стену убежища, убивая (Player2-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Имел разногласия с <strong><font color="ffff00">` + player1.name + `</font></strong> на крайне важные темы`;
                }
            },
            {
                string: "(Player1) просыпается посреди дождя и видит, как (Player2-Died) портит его снаряжение. (Player2-Died) не выходит из убежища следующим циклом",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Портил снаряжение <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) лезет слишком много к (Player2), не давая ему уснуть, и оказывается прибит к стене копьём",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Задолбал <strong><font color="ffff00">` + player2.name + `</font></strong>`
                }
            },
            {
                string: "(Player1-Died) и (Player2) оказываются в одном убежище без оружия. (Player1-Died) думает что он в безопасности, но (Player2) всё равно умудряется прикончить его",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Был убит кровожданым нравом <strong><font color="ffff00">` + player2.name + `</font></strong>`
                }
            },
            {
                string: "(Player1-Died) плохо спится. Благо, (Player2) приходит на помощь и выручает друга одним точным ударом копья по голове",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Воспользовался советом <strong><font color="ffff00">` + player2.name + `</font></strong> против бессонницы`
                }
            },
            {
                string: "(Player1-Died) помогает (Player2) добраться до убежища, но затем (Player2) предает и убивает (Player1-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Был предан <strong><font color="ffff00">` + player2.name + `</font></strong>`
                }
            },
            {
                string: "(Player1) не хватает ячеек голода для гибернации. К счастью, вкусный и питательный (Player2-Died) тут как тут",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Стал ночным перекусом <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1);
                }
            },
            {
                string: "(Player1-Died) весь дождь рассказывает очень длинный анекдот (Player2). Он заканчивается плохо, и разъярённый (Player2) сворачивает шею (Player1-Died)",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Кончились хиханьки-хахоньки`, player2);
                }
            },            {
                string: "(Player1-Died) вычерчивает на стене алгебраические выражения, пытаясь просчитать шанс своей победы. (Player2) быстро вычисляет ровный и красивый ноль, пробивая череп (Player1-Died) копьём",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Оказался хуже в математике чем <strong><font color="ffff00">` + player2.name + `</font></strong>`, player2);
                }
            },


            {
                string: "Найдя убежище, (Player1) натыкается там на труп (Player2-Died) и потрёпанного (Player3)",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player3.kills++;
                    player3.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был убит <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died), (Player2) и (Player3) ночуют вместе. (Player1-Died) пытается уговорить (Player2) убить (Player3) во сне, но (Player2) не соглашается и убивает (Player1-Died)",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Не договорился с <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) ждёт, пока (Player2-Died) и (Player3-Died) уснут, чтобы тихо убить их",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был убит <strong><font color="ffff00">` + player1.name + `</font></strong> во сне`;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Был убит <strong><font color="ffff00">` + player1.name + `</font></strong> во сне`;
                }
            },
            {
                string: "(Player1-Died), (Player2-Died) и (Player3-Died) играют весь дождь в русскую рулетку… но ведь копьё всегда попадает",
                playerCount: 3,
                howManyDeaths: 3,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;


                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Гениально сыграл в русскую рулетку с помощью копья`;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Гениально сыграл в русскую рулетку с помощью копья`;

                    placements.push(player3);
                    player3.alive = false;
                    player3.killedBy = `Гениально сыграл в русскую рулетку с помощью копья`;
                }
            },
            {
                string: "(Player1) решает споить (Player2-Died) и (Player3-Died), но перебарщивает, отчего (Player2-Died) и (Player3-Died) смертельно травятся под задумчивый взгляд (Player1)",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Перепил вместе с <strong><font color="ffff00">` + player3.name + `</font></strong>`;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Перепил вместе с <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) уверяет (Player2-Died) и (Player3-Died), что знает путь до убежища как свои пять пальцев, но они так и не находят его",
                playerCount: 3,
                howManyDeaths: 3,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Отрицал свой топографический кретинизм`;

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Слепо доверился <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                    placements.push(player3);
                    player3.alive = false;
                    player3.killedBy = `Слепо доверился <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "В убежище (Player1-Died), (Player2-Died) и (Player3-Died) начинается перепалка. (Player1-Died) кидает бомбу и взрывает всех сразу",
                playerCount: 3,
                howManyDeaths: 3,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Загорелся взрывной идеей`;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Подхватил взрывную идею <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Подхватил взрывную идею <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1), (Player2) и (Player3-Died) пережидают дождь вместе. (Player1) уговаривает (Player2) убить (Player3-Died) во сне",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player2.kills++;
                    player2.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Был убит <strong><font color="ffff00">` + player1.name + `</font></strong> и <strong><font color="ffff00">` + player2.name + `</font></strong> во сне`
                }
            },
            {
                string: "(Player1) приводит в убежище своего ручного ящера, который радостно съедает уже прячущихся там (Player2-Died) и (Player3-Died)",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Покормил ручного ящера <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Покормил ручного ящера <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1), (Player2-Died) и (Player3-Died) находят убежище вместе. (Player1) закрывает врата прямо перед ними, оставляя их умирать.",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player2);
                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    player2.alive = false;
                    player2.killedBy = `Был предан <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Был предан <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1) и (Player2) секретно встречаются ночью на крыше итератора. (Player3-Died) случайно видит их, но выдаёт свое присутствие и оказывается убит",
                playerCount: 3,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player3);
                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    player2.kills++;
                    player2.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Шпионил за <strong><font color="ffff00">` + player1.name + `</font></strong> и <strong><font color="ffff00">` + player2.name + `</font></strong>`
                }
            },
            {
                string: "(Player1-Died), (Player2-Died) и (Player3-Died) выгоняют друг-друга из убежища. Дождь смывает всех троих",
                playerCount: 3,
                howManyDeaths: 3,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Видите двоих слева? Вот да`, player2, player3);
                    theFunnyKillFunction(player2, `Видите двоих по бокам? Вот да`, player1, player3);
                    theFunnyKillFunction(player3, `Видите двоих справа? Вот да`, player1, player2);
                }
            },

            {
                string: "(Player1-Died) и (Player2) отказываются впустить (Player3-Died) и (Player4) в убежище. (Player1-Died) и (Player3-Died) оказываются убиты, (Player2) и (Player4) засыпают вместе",
                playerCount: 4,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player2.kills++;
                    player2.hasKilled.push(player1.name);
                    player4.kills++;
                    player4.hasKilled.push(player1.name);
                    player1.alive = false;
                    player1.killedBy = `Был убит <strong><font color="ffff00">` + player2.name + `</font></strong> и <strong><font color="ffff00">` + player4.name + `</font></strong> в перепалке за убежище`;

                    placements.push(player3);
                    player2.kills++;
                    player2.hasKilled.push(player3.name);
                    player4.kills++;
                    player4.hasKilled.push(player3.name);
                    player3.alive = false;
                    player3.killedBy = `Был убит <strong><font color="ffff00">` + player2.name + `</font></strong> и <strong><font color="ffff00">` + player4.name + `</font></strong> в перепалке за убежище`;
                }
            },
            {
                string: "(Player1-Died), (Player2-Died) и (Player3-Died) заставляют (Player4-Died) вести их к убежищу, но он специально приводит их в тупик и всю группу смывает дождём",
                playerCount: 4,
                howManyDeaths: 4,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    player4.kills++;
                    player4.hasKilled.push(player1.name);
                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Повёлся на уловку <strong><font color="ffff00">` + player4.name + `</font></strong>`;

                    player4.kills++;
                    player4.hasKilled.push(player2.name);
                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Повёлся на уловку <strong><font color="ffff00">` + player4.name + `</font></strong>`;

                    player4.kills++;
                    player4.hasKilled.push(player3.name);
                    placements.push(player3);
                    player3.alive = false;
                    player3.killedBy = `Повёлся на уловку <strong><font color="ffff00">` + player4.name + `</font></strong>`;

                    placements.push(player4);
                    player4.alive = false;
                    player4.killedBy = `Привёл <strong><font color="ffff00">` + player1.name + `</font></strong>, <strong><font color="ffff00">` + player2.name + `</font></strong> и <strong><font color="ffff00">` + player3.name + `</font></strong> в тупик`;
                }
            },
            {
                string: "(Player1-Died), (Player2), (Player3) и (Player4) пережидают дождь вместе, но убежище настолько маленькое, что (Player1-Died) задыхается под весом всей группы",
                playerCount: 4,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Задохнулся под весом <strong><font color="ffff00">` + player2.name + `</font></strong>, <strong><font color="ffff00">` + player3.name + `</font></strong> и <strong><font color="ffff00">` + player4.name + `</font></strong>`;
                }
            },
            {
                string: "(Player1-Died) ошибается в расчетах, производя бомбу мусорщиков в убежище, отчего взрывает себя, (Player2-Died), (Player3-Died), (Player4-Died) и (Player5-Died)",
                playerCount: 5,
                howManyDeaths: 5,
                updateData: function (player1, player2, player3, player4, player5) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;


                    placements.push(player1);
                    player1.alive = false;
                    player1.killedBy = `Чуть-чуть ошибся в расчётах`;

                    player1.kills++;
                    player1.hasKilled.push(player2.name);
                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Лицезрел ошибку <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                    player1.kills++;
                    player1.hasKilled.push(player3.name);
                    placements.push(player3);
                    player3.alive = false;
                    player3.killedBy = `Лицезрел ошибку <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                    player1.kills++;
                    player1.hasKilled.push(player4.name);
                    placements.push(player4);
                    player4.alive = false;
                    player4.killedBy = `Лицезрел ошибку <strong><font color="ffff00">` + player1.name + `</font></strong>`;

                    player1.kills++;
                    player1.hasKilled.push(player5.name);
                    placements.push(player5);
                    player5.alive = false;
                    player5.killedBy = `Лицезрел ошибку <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                }
            }
        ],
        revival: [
            {
                string: "(Player1-Rev) просыпается в холодном поту от кошмара",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "Новооживший (Player1-Rev) пытается понять в каком он регионе, используя цвет стен убежища",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) грустит из-за упавшей кармы",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) вырастает из пола убежища",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) проваливается сквозь потолок убежища",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) возвращается к жизни... прямо под дождём. Чисто из жалости, РВГИ позволяют ожить ему ещё раз на следующий цикл",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) дропается",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) желает всем доброе утро",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) даёт \"взятку\" создателю РВГИ и как ни в чем не бывало перерождается в убежище",
                playerCount: 1,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },

            {
                string: "(Player1-Rev) возрождается в одном убежище со спящим (Player2); на утро (Player2) в крайней растерянности от пропавших снаряжения и запасов",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) материализуется из пентаграммы, со скуки начерченной знатно охреневающим (Player2)",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) вселяется в котёнка (Player2) пока тот спит, возвращаясь в игру",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) приходит к (Player2) во сне. На утро оказывается, что это был не сон",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) врывается в убежище (Player2) прямо посреди дождя. (Player2) клянется, что видел его мёртвым этим циклом",
                playerCount: 2,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            },

            {
                string: "(Player1-Rev) оживает благодаря искусно провёденному ритуалу (Player2-Died), что жертвует собственной жизнью в процессе",
                playerCount: 2,
                howManyDeaths: 1,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    player2.alive = false;
                    player2.killedBy = `Пожертвовал собой ради <strong><font color="ffff00">` + player1.name + `</font></strong>`

                    placements.push(player2);
                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player1-Rev) возрождается в одном убежище со спящим (Player2-Died) и пользуется шансом быстро прикончить его",
                playerCount: 2,
                howManyDeaths: 1,
                howManyRevivals: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;
                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    player2.alive = false;
                    player2.killedBy = `Был убит ожившим <strong><font color="ffff00">` + player1.name + `</font></strong>`

                    placements.push(player2);
                    placements = placements.filter(o => o.name !== player1.name);
                }
            },
            {
                string: "(Player2) и (Player3) делятся слухами о том, что (Player1-Rev) - мёртвый лох. (Player1-Rev) возрождается чисто назло им",
                playerCount: 3,
                howManyDeaths: 0,
                howManyRevivals: 1,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    currentCharacterNumber += this.howManyRevivals;
                    diedThisCycle += this.howManyDeaths;

                    player1.alive = true;
                    player1.revived++;
                    player1.oldKilledBys.push(player1.killedBy);
                    player1.killedBy = undefined;

                    placements = placements.filter(o => o.name !== player1.name);
                }
            }
        ]
    }
}*/

/*var eventsRandom = [
    {
        used: false,
        string: `Внезапно на фоне начинает играть замедленная версия Kayava...<br>"Я должен найти пару или умереть"`,
        eventGenus: {
            regular: function () {
                var eventObject = decideEventObject(eventsRandom[0][`eventGenus`][`array`][`regular`]);

                var playerCount = eventObject.playerCount;

                var players = decidePlayers(playerCount);
                currentUnusedCharacterNumber -= playerCount;

                if (playerCount === 1) var eventString = replacePlaceholderName(eventObject.string, players[0].name)
                else if (playerCount === 2) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name)
                else if (playerCount === 3) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name)
                else if (playerCount === 4) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name)
                else if (playerCount === 5) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name, players[4].name)
                else if (playerCount === 6) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name, players[4].name, players[5].name);
                console.log(eventString, players);

                if (playerCount === 1) var eventImage = makeImages(players[0].image)
                else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
                else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
                else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
                else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
                else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

                var event = eventImage + eventString + `<br><br>`;

                return event;
            },
            lethal: function () {
                do var eventObject = decideEventObject(eventsRandom[0][`eventGenus`][`array`][`lethal`])
                while (eventObject.howManyDeaths >= currentCharacterNumber);

                var playerCount = eventObject.playerCount;

                var players = decidePlayers(playerCount);
                currentUnusedCharacterNumber -= playerCount;

                if (playerCount === 1) var eventString = replacePlaceholderName(eventObject.string, players[0].name)
                else if (playerCount === 2) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name)
                else if (playerCount === 3) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name)
                else if (playerCount === 4) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name)
                else if (playerCount === 5) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name, players[4].name)
                else if (playerCount === 6) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name, players[4].name, players[5].name);
                console.log(eventString, players);

                if (playerCount === 1) var eventImage = makeImages(players[0].image)
                else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
                else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
                else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
                else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
                else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

                var event = eventImage + eventString + `<br><br>`;

                eventObject.updateData.apply(eventObject, players);

                return event;
            },
            revival: function () {
                var eventObject = decideEventObject(eventsRandom[0][`eventGenus`][`array`][`revival`]);

                var playerCount = eventObject.playerCount;

                var revivedPlayers = decideRevivedPlayers(eventObject.howManyRevivals);
                if (revivedPlayers == "stop") return "stop";
                var justPlayers = decidePlayers(playerCount - eventObject.howManyRevivals);

                var players = revivedPlayers.concat(justPlayers);

                currentUnusedCharacterNumber -= playerCount - eventObject.howManyRevivals;

                if (playerCount === 1) var eventString = replacePlaceholderName(eventObject.string, players[0].name)
                else if (playerCount === 2) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name)
                else if (playerCount === 3) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name)
                else if (playerCount === 4) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name)
                else if (playerCount === 5) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name, players[4].name)
                else if (playerCount === 6) var eventString = replacePlaceholderName(eventObject.string, players[0].name, players[1].name, players[2].name, players[3].name, players[4].name, players[5].name);
                console.log(eventString, players);

                if (playerCount === 1) var eventImage = makeImages(players[0].image)
                else if (playerCount === 2) var eventImage = makeImages(players[0].image, players[1].image)
                else if (playerCount === 3) var eventImage = makeImages(players[0].image, players[1].image, players[2].image)
                else if (playerCount === 4) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image)
                else if (playerCount === 5) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image)
                else if (playerCount === 6) var eventImage = makeImages(players[0].image, players[1].image, players[2].image, players[3].image, players[4].image, players[5].image);

                var event = eventImage + eventString + `<br><br>`;

                eventObject.updateData.apply(eventObject, players);

                return event;
            },
            array: {
                regular: [
                    {
                        string: "(Player1) остро реагирует на появление Инва и со злобой убивает его",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) заводит тридцать семь котят с Инвом, после чего Инв навсегда пропадает, уйдя за фруктами",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) оказался настолько несимпатичным, что даже Инв предпочитает избегать егоеё",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) оказывается даже слишком напористым и Инв сбегает",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) пугается Инва и убивает его",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) отказывается встречаться, потому что у него/неё уже есть вторая половинка, но Инв не отстаёт и оказывается убит",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) везёт с тем, чтобы не встретить Инва",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) видит Инва на расстоянии и решает убежать",
                        playerCount: 1
                    },
                    {
                        string: "Инв предлагает подарить (Player1) трусы, но (Player1) отказывается",
                        playerCount: 1
                    },
                    {
                        string: "Инв предлагает (Player1) поцеловаться, но (Player1) не умеет",
                        playerCount: 1
                    },
                    {
                        string: "Инв дарит (Player1) яйцо, но (Player1) не знает, что с ним делать. Инв злится и уходит со свидания",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) так сильно хочет встречаться с Инвом, что тот пугается и тихо убегает",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) предлагает Инву поиграть в прятки и немедленно сбегает как только тот закрывает глаза",
                        playerCount: 1
                    },
                    {
                        string: "Инв почти завоёвывает сердце (Player1), но делает неправильный выбор и (Player1) обижается на него, уходя со свидания",
                        playerCount: 1
                    },
                    {
                        string: "У Инва и (Player1) не получается завести отношения, однако они становятся замечательными друзьями и проходят вместе через уйму приключений",
                        playerCount: 1
                    },
                    {
                        string: "Инв спрашивает у (Player1), не дама ли он, и оказывается убит",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) заманивает Инва к себе домой и продает его на органы",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) убеждает Инва вознестись, но тот возвращается в виде ужасного Отголоска второй кармы. Спасения нет",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) и Инв ночуют вместе в одном убежище ;)",
                        playerCount: 1
                    },
                    {
                        string: "(Player1) целуется с Инвом. (Player2) проходит мимо и расплакивается от увиденного",
                        playerCount: 2
                    },
                    {
                        string: "(Player1) думает, что идёт на свидание с Инвом, но попадается на пранк и получает неловкую встречу с (Player2) ",
                        playerCount: 2
                    },
                    {
                        string: "(Player1) переполняется любовью к Инву, но путается и целует (Player2)",
                        playerCount: 2
                    },
                    {
                        string: "Инв пытается познакомиться с (Player1), но его тут же убивает ревнивый (Player2)",
                        playerCount: 2
                    },
                    {
                        string: "(Player1) разводится с (Player2) чтобы стать парой Инва",
                        playerCount: 2
                    },
                    {
                        string: "(Player1) попадается Инву, но быстро толкает (Player2) к нему вместо себя",
                        playerCount: 2
                    },
                    {
                        string: "Инв пытается замутить с (Player1), но каким-то образом в результате (Player1) и (Player2) начинают встречаться",
                        playerCount: 2
                    },
                    {
                        string: "(Player1), (Player2) и Инв образуют поликулу",
                        playerCount: 2
                    },
                    {
                        string: "(Player1) предлагает познакомить Инва с (Player2), но (Player2) отказывается, потому как влюблён в (Player3)",
                        playerCount: 3
                    }
                ],
                lethal: [
                    {
                        string: "Инв приглашает (Player1) на свидание, вследствие чего (Player1-Died) умирает",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Пошёл на свидание Инва`;
                        }
                    },
                    {
                        string: "(Player1-Died) и Инв хорошо проводят время вместе и влюбляются друг в друга. Яйцо сингулярности объединяет их в одно целое и они живут счастливо до конца",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Счастливо живёт с Инвом`;
                        }
                    },
                    {
                        string: "Инв дарит цветы (Player1-Died), но у (Player1-Died) оказывается на них аллергия, и (Player1-Died) погибает страшной смертью",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Погиб от аллергической реакции`;
                        }
                    },
                    {
                        string: "(Player1-Died) почти соглашается стать его парой, но благодаря паранормальной неудаче Инва, с неба падает левиафан, моментально убивая (Player1-Died)",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Был раздавлен небесным левиафаном`;
                        }
                    },
                    {
                        string: "(Player1-Died), не веря, что коты могут страдать, разбивает сердце Инву. В итоге он использует яйцо, чтобы покончить с жизнью и отомстить (Player1-Died)",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Разбил Инву сердце`;
                        }
                    },
                    {
                        string: "(Player1-Died) отбирает яйцо у Инва и взрывает его, вызывая разлом вселенной, крах законов физики и собственную смерть",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Взорвал яйцо Инва`;
                        }
                    },
                    {
                        string: "(Player1-Died) соглашается пойти на свидание с Инвом, однако сама вселенная против того, чтобы Инв нашел свое счастье, и убивает (Player1-Died)",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Стал жертвой паранормального невезения Инва`;
                        }
                    },
                    {
                        string: "Инв случайно разбивает сердце (Player1-Died). Буквально. Крови было много",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Погиб от разбитого сердца`;
                        }
                    },
                    {
                        string: "(Player1-Died) и Инв гуляют вместе, как вдруг на них сваливается 83 красных сколопендры",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Поздоровался с 83-емя красными сколопендрами`;
                        }
                    },
                    {
                        string: "(Player1-Died) травится едой на свидании с Инвом и умирает",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Отравился на свидании с Инвом`;
                        }
                    },
                    {
                        string: "(Player1-Died) и Инв идут возноситься вместе в знак своей вечной любви, но сваливаются в Рубикон",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Застрял с Инвом в пустоте`;
                        }
                    },
                    {
                        string: "Инв флиртует с (Player1-Died), и тот хочет кое-что ему показать, но случайно давится собственной рукой",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Неудачно показал фокус`;
                        }
                    },
                    {
                        string: "Инв красуется перед (Player1-Died) своими яйцами сингулярности, но (Player1-Died) случайно детонирует их",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Потрогал яйцо Инва`;
                        }
                    },
                    {
                        string: "Инв оказывается настолько горячим, что (Player1-Died) расплавляется",
                        playerCount: 1,
                        howManyDeaths: 1,
                        updateData: function (player1) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Не выдержал высокие температуры`;
                        }
                    },

                    {
                        string: "(Player1) требует от Инва доказать свою любовь, убив (Player2-Died)",
                        playerCount: 2,
                        howManyDeaths: 1,
                        updateData: function (player1, player2) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player2);
                            player1.kills++;
                            player1.hasKilled.push(player2.name);
                            player2.alive = false;
                            player2.killedBy = `Был убит Инвом, нанятым <strong><font color="ffff00">` + player1.name + `</font></strong>`;
                        }
                    },
                    {
                        string: "(Player1-Died) идет на свидание с Инвом, но (Player2) убивает его - не из-за ревности или подобного, однако по закону подлости Инва",
                        playerCount: 2,
                        howManyDeaths: 1,
                        updateData: function (player1, player2) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player2.kills++;
                            player2.hasKilled.push(player1.name);
                            player1.alive = false;
                            player1.killedBy = `Был убит <strong><font color="ffff00">` + player2.name + `</font></strong> по закону подлости Инва`;
                        }
                    },
                    {
                        string: "(Player1-Died) устраивает культ в честь Инва, но его сжигает (Player2), последователь Искательницы",
                        playerCount: 2,
                        howManyDeaths: 1,
                        updateData: function (player1, player2) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player2.kills++;
                            player2.hasKilled.push(player1.name);
                            player1.alive = false;
                            player1.killedBy = `Нарвался на культиста <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                        }
                    },
                    {
                        string: "(Player1-Died) и (Player2-Died) выслеживают Инва с целью убить, но проигрывают в схватке против него и погибают",
                        playerCount: 2,
                        howManyDeaths: 2,
                        updateData: function (player1, player2) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            player1.alive = false;
                            player1.killedBy = `Был убит Инвом`;
                            placements.push(player2);
                            player2.alive = false;
                            player2.killedBy = `Был убит Инвом`;
                        }
                    },

                    {
                        string: "(Player1-Died), (Player2-Died) и (Player3-Died) очень желают встречаться с Инвом, но так и не решают, кто из них троих достойнее, и в битве убивают друг друга",
                        playerCount: 3,
                        howManyDeaths: 3,
                        updateData: function (player1, player2, player3) {
                            currentCharacterNumber -= this.howManyDeaths;
                            diedThisCycle += this.howManyDeaths;

                            placements.push(player1);
                            placements.push(player2);
                            placements.push(player3);

                            player1.kills++;
                            player1.kills++;
                            player1.hasKilled.push(player2.name);
                            player1.hasKilled.push(player3.name);

                            player2.kills++;
                            player2.kills++;
                            player2.hasKilled.push(player1.name);
                            player2.hasKilled.push(player3.name);

                            player3.kills++;
                            player3.kills++;
                            player3.hasKilled.push(player1.name);
                            player3.hasKilled.push(player2.name);

                            player1.alive = false;
                            player1.killedBy = `Боролся за сердце Инва с <strong><font color="ffff00">` + player2.name + `</font></strong> и <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                            player2.alive = false;
                            player2.killedBy = `Боролся за сердце Инва с <strong><font color="ffff00">` + player1.name + `</font></strong> и <strong><font color="ffff00">` + player3.name + `</font></strong>`;
                            player3.alive = false;
                            player3.killedBy = `Боролся за сердце Инва с <strong><font color="ffff00">` + player1.name + `</font></strong> и <strong><font color="ffff00">` + player2.name + `</font></strong>`;
                        }
                    }
                ]
            }
        }
    }
]*/




// ---- ФУНКЦИИ-СТРАНИЧКОБИЛДЕРЫ -----
// а

function htmlCharacterRowBuilder() {
    var html = "";

    var fullRows = Math.floor(initialCharacterNumber / 6);
    var notFullRows = initialCharacterNumber % 6;

    function itits(pronoun) {
        if (pronoun === "it") return "its"
        if (pronoun === "IT") return "ITS"
        else return pronoun
    }

    if (initialCharacterNumber % 6 === 0) {
        for (var i = 0; i < initialCharacterNumber / 6; i++) {
            html += `<table class="tribute">
            <tr>
               <td valign="top"><img src="` + characters[i * 6].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 1].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 2].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 3].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 4].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 5].image + `" height="90" width="90" /></td>
            </tr>
            <tr>
               <td valign="top">` + characters[i * 6].name + `<br>` + characters[i * 6].pronoun[0] + `/` + itits(characters[i * 6].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 1].name + `<br>` + characters[i * 6 + 1].pronoun[0] + `/` + itits(characters[i * 6 + 1].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 2].name + `<br>` + characters[i * 6 + 2].pronoun[0] + `/` + itits(characters[i * 6 + 2].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 3].name + `<br>` + characters[i * 6 + 3].pronoun[0] + `/` + itits(characters[i * 6 + 3].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 4].name + `<br>` + characters[i * 6 + 4].pronoun[0] + `/` + itits(characters[i * 6 + 4].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 5].name + `<br>` + characters[i * 6 + 5].pronoun[0] + `/` + itits(characters[i * 6 + 5].pronoun[1]) + `</td>
            </tr>
            </table>
    <br/>`;
        }
        return html;
    } else {

        for (var i = 0; i < fullRows; i++) {
            html += `<table class="tribute">
            <tr>
               <td valign="top"><img src="` + characters[i * 6].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 1].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 2].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 3].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 4].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + characters[i * 6 + 5].image + `" height="90" width="90" /></td>
            </tr>
            <tr>
               <td valign="top">` + characters[i * 6].name + `<br>` + characters[i * 6].pronoun[0] + `/` + itits(characters[i * 6].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 1].name + `<br>` + characters[i * 6 + 1].pronoun[0] + `/` + itits(characters[i * 6 + 1].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 2].name + `<br>` + characters[i * 6 + 2].pronoun[0] + `/` + itits(characters[i * 6 + 2].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 3].name + `<br>` + characters[i * 6 + 3].pronoun[0] + `/` + itits(characters[i * 6 + 3].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 4].name + `<br>` + characters[i * 6 + 4].pronoun[0] + `/` + itits(characters[i * 6 + 4].pronoun[1]) + `</td>
               <td valign="top">` + characters[i * 6 + 5].name + `<br>` + characters[i * 6 + 5].pronoun[0] + `/` + itits(characters[i * 6 + 5].pronoun[1]) + `</td>
            </tr>
            </table>
    <br/>`;
        }
        if (notFullRows === 1) {
            html += `<table class="tribute">
        <tr>
           <td valign="top"><img src="` + characters[i * 6].image + `" height="90" width="90" /></td>
        </tr>
        <tr>
           <td valign="top">` + characters[i * 6].name + `<br>` + characters[i * 6].pronoun[0] + `/` + itits(characters[i * 6].pronoun[1]) + `</td>
        </tr>
        </table>
    <br/>`
        } else if (notFullRows === 2) {
            html += `<table class="tribute">
        <tr>
           <td valign="top"><img src="` + characters[i * 6].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 1].image + `" height="90" width="90" /></td>
        </tr>
        <tr>
           <td valign="top">` + characters[i * 6].name + `<br>` + characters[i * 6].pronoun[0] + `/` + itits(characters[i * 6].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 1].name + `<br>` + characters[i * 6 + 1].pronoun[0] + `/` + itits(characters[i * 6 + 1].pronoun[1]) + `</td>
        </tr>
        </table>
    <br/>`
        } else if (notFullRows === 3) {
            html += `<table class="tribute">
        <tr>
           <td valign="top"><img src="` + characters[i * 6].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 1].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 2].image + `" height="90" width="90" /></td>
        </tr>
        <tr>
           <td valign="top">` + characters[i * 6].name + `<br>` + characters[i * 6].pronoun[0] + `/` + itits(characters[i * 6].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 1].name + `<br>` + characters[i * 6 + 1].pronoun[0] + `/` + itits(characters[i * 6 + 1].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 2].name + `<br>` + characters[i * 6 + 2].pronoun[0] + `/` + itits(characters[i * 6 + 2].pronoun[1]) + `</td>
        </tr>
        </table>
    <br/>`
        } else if (notFullRows === 4) {
            html += `<table class="tribute">
        <tr>
           <td valign="top"><img src="` + characters[i * 6].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 1].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 2].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 3].image + `" height="90" width="90" /></td>
        </tr>
        <tr>
           <td valign="top">` + characters[i * 6].name + `<br>` + characters[i * 6].pronoun[0] + `/` + itits(characters[i * 6].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 1].name + `<br>` + characters[i * 6 + 1].pronoun[0] + `/` + itits(characters[i * 6 + 1].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 2].name + `<br>` + characters[i * 6 + 2].pronoun[0] + `/` + itits(characters[i * 6 + 2].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 3].name + `<br>` + characters[i * 6 + 3].pronoun[0] + `/` + itits(characters[i * 6 + 3].pronoun[1]) + `</td>
        </tr>
        </table>
    <br/>`
        } else {
            html += `<table class="tribute">
        <tr>
           <td valign="top"><img src="` + characters[i * 6].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 1].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 2].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 3].image + `" height="90" width="90" /></td>
           <td valign="top"><img src="` + characters[i * 6 + 4].image + `" height="90" width="90" /></td>
        </tr>
        <tr>
           <td valign="top">` + characters[i * 6].name + `<br>` + characters[i * 6].pronoun[0] + `/` + itits(characters[i * 6].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 1].name + `<br>` + characters[i * 6 + 1].pronoun[0] + `/` + itits(characters[i * 6 + 1].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 2].name + `<br>` + characters[i * 6 + 2].pronoun[0] + `/` + itits(characters[i * 6 + 2].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 3].name + `<br>` + characters[i * 6 + 3].pronoun[0] + `/` + itits(characters[i * 6 + 3].pronoun[1]) + `</td>
           <td valign="top">` + characters[i * 6 + 4].name + `<br>` + characters[i * 6 + 4].pronoun[0] + `/` + itits(characters[i * 6 + 4].pronoun[1]) + `</td>
        </tr>
        </table>
    <br/>`
        }
        return html;
    }
}    // строит ряды в менюшке

function titleChanger(title) {
    var titleHolder = document.getElementById("titleHolder");
    titleHolder.innerHTML = `<div id = "title"> ` + title + `</div> `;
    currentState = title;
} // меняет название и состояние

function declareWinner() {
    var winner = getRandomAliveCharacter();
    var winnerDeclaration = `<table class="one">
    <tbody>
       <tr>
          <td><img src="` + winner.image + `" height="90" width="90"></td>
       </tr>
    </tbody>
 </table>
 <br>
 Победитель - ` + winner.name + `!!!!!!!!!<br>`
    return winnerDeclaration;
}

function declarePlacements() {
    placements.push(getRandomAliveCharacter());
    placements.reverse();

    var html = "";

    var fullRows = Math.floor(initialCharacterNumber / 4);
    var notFullRows = initialCharacterNumber % 4;
    
    function itits(pronoun) {
        if (pronoun === "it") return "its"
        if (pronoun === "IT") return "ITS"
        else return pronoun
    }

    html += `<table class="tribute">
            <tr>
               <td valign="top"><img src="` + placements[0].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + placements[1].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + placements[2].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + placements[3].image + `" height="90" width="90" /></td>
            </tr>
            <tr>
               <td valign="top"><strong><font color="ffff00">` + placements[0].name + `</font></strong><br>` + placements[0].pronoun[0] + `/` + itits(placements[0].pronoun[1]) + `<br>` + `Winner` + `<br>` + hasKills(placements[0]) + `</td>
               <td valign="top"><strong><font color="ffff00">` + placements[1].name + `</font></strong><br>` + placements[1].pronoun[0] + `/` + itits(placements[1].pronoun[1]) + `<br>` + `2nd Place` + `<br>` + hasKills(placements[1]) + `<br>` + placements[1].killedBy + `</td>
               <td valign="top"><strong><font color="ffff00">` + placements[2].name + `</font></strong><br>` + placements[2].pronoun[0] + `/` + itits(placements[2].pronoun[1]) + `<br>` + `3rd Place` + `<br>` + hasKills(placements[2]) + `<br>` + placements[2].killedBy + `</td>
               <td valign="top"><strong><font color="ffff00">` + placements[3].name + `</font></strong><br>` + placements[3].pronoun[0] + `/` + itits(placements[3].pronoun[1]) + `<br>` + `4th Place` + `<br>` + hasKills(placements[3]) + `<br>` + placements[3].killedBy + `</td>
            </tr>
            </table>
    <br/>`;

    for (var i = 1; i < fullRows; i++) {
        html += `<table class="tribute">
            <tr>
               <td valign="top"><img src="` + placements[i * 4].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + placements[i * 4 + 1].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + placements[i * 4 + 2].image + `" height="90" width="90" /></td>
               <td valign="top"><img src="` + placements[i * 4 + 3].image + `" height="90" width="90" /></td>
            </tr>
            <tr>
               <td valign="top"><strong><font color="ffff00">` + placements[i * 4].name + `</font></strong><br>` + placements[i * 4].pronoun[0] + `/` + itits(placements[i * 4].pronoun[1]) + `<br>` + (i * 4 + 1) + `th Place` + `<br>` + hasKills(placements[i * 4]) + `<br>` + placements[i * 4].killedBy + `</td>
               <td valign="top"><strong><font color="ffff00">` + placements[i * 4 + 1].name + `</font></strong><br>` + placements[i * 4 + 1].pronoun[0] + `/` + itits(placements[i * 4 + 1].pronoun[1]) + `<br>` + (i * 4 + 2) + `th Place` + `<br>` + hasKills(placements[i * 4 + 1]) + `<br>` + placements[i * 4 + 1].killedBy + `</td>
               <td valign="top"><strong><font color="ffff00">` + placements[i * 4 + 2].name + `</font></strong><br>` + placements[i * 4 + 2].pronoun[0] + `/` + itits(placements[i * 4 + 2].pronoun[1]) + `<br>` + (i * 4 + 3) + `th Place` + `<br>` + hasKills(placements[i * 4 + 2]) + `<br>` + placements[i * 4 + 2].killedBy + `</td>
               <td valign="top"><strong><font color="ffff00">` + placements[i * 4 + 3].name + `</font></strong><br>` + placements[i * 4 + 3].pronoun[0] + `/` + itits(placements[i * 4 + 3].pronoun[1]) + `<br>` + (i * 4 + 4) + `th Place` + `<br>` + hasKills(placements[i * 4 + 3]) + `<br>` + placements[i * 4 + 3].killedBy + `</td>
            </tr>
            </table>
    <br/>`;
    }
    if (notFullRows === 1) {
        html += `<table class="tribute">
        <tr>
        <td valign="top"><img src="` + placements[i * 4].image + `" height="90" width="90" /></td>
        </tr>
        <tr>
        <td valign="top"><strong><font color="ffff00">` + placements[i * 4].name + `</font></strong><br>` + placements[i * 4].pronoun[0] + `/` + itits(placements[i * 4].pronoun[1]) + `<br>` + (i * 4 + 1) + `th Place` + `<br>` + hasKills(placements[i * 4]) + `<br>` + placements[i * 4].killedBy + `</td>
        </tr>
        </table>
    <br/>`
    } else if (notFullRows === 2) {
        html += `<table class="tribute">
        <tr>
        <td valign="top"><img src="` + placements[i * 4].image + `" height="90" width="90" /></td>
        <td valign="top"><img src="` + placements[i * 4 + 1].image + `" height="90" width="90" /></td>
        </tr>
        <tr>
        <td valign="top"><strong><font color="ffff00">` + placements[i * 4].name + `</font></strong><br>` + placements[i * 4].pronoun[0] + `/` + itits(placements[i * 4].pronoun[1]) + `<br>` + (i * 4 + 1) + `th Place` + `<br>` + hasKills(placements[i * 4]) + `<br>` + placements[i * 4].killedBy + `</td>
        <td valign="top"><strong><font color="ffff00">` + placements[i * 4 + 1].name + `</font></strong><br>` + placements[i * 4 + 1].pronoun[0] + `/` + itits(placements[i * 4 + 1].pronoun[1]) + `<br>` + (i * 4 + 2) + `th Place` + `<br>` + hasKills(placements[i * 4 + 1]) + `<br>` + placements[i * 4 + 1].killedBy + `</td>
        </tr>
        </table>
    <br/>`
    } else if (notFullRows === 3) {
        html += `<table class="tribute">
        <tr>
        <td valign="top"><img src="` + placements[i * 4].image + `" height="90" width="90" /></td>
        <td valign="top"><img src="` + placements[i * 4 + 1].image + `" height="90" width="90" /></td>
        <td valign="top"><img src="` + placements[i * 4 + 2].image + `" height="90" width="90" /></td>
        </tr>
        <tr>
        <td valign="top"><strong><font color="ffff00">` + placements[i * 4].name + `</font></strong><br>` + placements[i * 4].pronoun[0] + `/` + itits(placements[i * 4].pronoun[1]) + `<br>` + (i * 4 + 1) + `th Place` + `<br>` + hasKills(placements[i * 4]) + `<br>` + placements[i * 4].killedBy + `</td>
        <td valign="top"><strong><font color="ffff00">` + placements[i * 4 + 1].name + `</font></strong><br>` + placements[i * 4 + 1].pronoun[0] + `/` + itits(placements[i * 4 + 1].pronoun[1]) + `<br>` + (i * 4 + 2) + `th Place` + `<br>` + hasKills(placements[i * 4 + 1]) + `<br>` + placements[i * 4 + 1].killedBy + `</td>
        <td valign="top"><strong><font color="ffff00">` + placements[i * 4 + 2].name + `</font></strong><br>` + placements[i * 4 + 2].pronoun[0] + `/` + itits(placements[i * 4 + 2].pronoun[1]) + `<br>` + (i * 4 + 3) + `th Place` + `<br>` + hasKills(placements[i * 4 + 2]) + `<br>` + placements[i * 4 + 2].killedBy + `</td>
        </tr>
        </table>
    <br/>`
    }
    return html;
}

function declareKillPlacements() {
    var html = `<td width="45%"><u><strong>KILLS::</strong></u><br><br>`
    var characterPlacement = sortCharactersByKills();
    for (var i = 0; i < characterPlacement.length; i++) {
        html += characterPlacement[i].kills + `::'<font color="ffff00">` + characterPlacement[i].name + `</font>';KILLED::'<font color="aaaaaa">` + getKillArray(characterPlacement[i]) + `</font>'<br>`;
    }
    html += `</td>`;
    return html;
}

function declareRevivedPlacementsAndOther() {
    var html = `<td width="55%"><u><strong>REVIVALS::</strong></u><br><br>`
    var characterPlacement = sortCharactersByRevivals();
    for (var i = 0; i < characterPlacement.length; i++) {
        html += characterPlacement[i].revived + `::'<font color="ffff00">` + characterPlacement[i].name + `</font>';DEATH CAUSES::'<font color="aaaaaa">` + getKilledBysArray(characterPlacement[i]) + `</font>'<br>`;
    }
    /* html += `<br><br><u><strong>Прочая Статистика</strong></u><br><br>Индекс парафинов: ` + paraffinIndex;
    if (paraffinIndex != 0) html += ` (<font color="aaaaaa">` + paraffinCycles.join(', ') + `</font>)<br>`;
    else html += `<br>`;*/
    html += `</td>`;
    return html;
}

function declareOtherPlacements() {
    var html = `<table class="summary" width="800px"><tbody>`;
    html += declareKillPlacements();
    html += declareRevivedPlacementsAndOther();
    html += `</tbody></table>`;
    return html;
}

function savePage(name, insert, addThing) { 
    var titleHolder = document.getElementById("titleHolder");
    var content = document.getElementById('content'); 
    var htmlTitleHolder = titleHolder.innerHTML; 
    var htmlContent = content.innerHTML;

    var html = [];
    html.push(htmlTitleHolder);
    html.push(htmlContent);

    localStorage.setItem(name, JSON.stringify(html)); 

    if (insert != undefined) { 
        var sideLeft = document.getElementById("sideLeft"); 

        var newLink = document.createElement("ul");


        if (addThing == `1`) newLink.innerHTML += `-<br>`; 
        newLink.innerHTML += `<a href="#" onclick="goToPage('` + name + `')" class="navbar2">` + insert + `</a><br>`; 
        if (addThing != undefined && addThing != `1`) newLink.innerHTML += `-<br>`;

        sideLeft.appendChild(newLink);
    };
}

function goToPage(name) {
    var html = JSON.parse(localStorage.getItem(name));
    var htmlTitleHolderToInsert = html[0];
    var htmlContentToInsert = html[1];

    var content = document.getElementById("content")
    var titleHolder = document.getElementById("titleHolder")

    content.innerHTML = htmlContentToInsert;
    titleHolder.innerHTML = htmlTitleHolderToInsert; 
}










//////////////////////////////////////////////// тут типа движок???? эаэа //////////////////////////////////////////////////////////////

console.log("%c---", 'color: #666666');
console.log("%c---", 'color: #666666');
console.log("%c---", 'color: #666666');
console.log("%c---", 'color: #666666');


function theMenu() {
    console.log('%c---  THE MENU  ---', 'background: #0000b3; color: #cce6ff')
    var htmlContentToInsert = htmlCharacterRowBuilder() + `<a href = "#" onclick = "theGenerate()">proceed.</a> `;
    var content = document.getElementById("content");
    content.innerHTML = htmlContentToInsert;

    savePage(`theMenu`, `!!__PARTICIPANTS__!!`, `0`);

    console.log('%cTHE MENU - ENDED', 'background: #006600; color: #66ff99');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
} // менюха


function theRace() {
    console.log('%c---  THE COLLAPSE   ---', 'background: #0000b3; color: #cce6ff')
    updateDataBeforeUse();
    titleChanger("!!__THE_COLLAPSE__!!");

    var htmlContentToInsert = `Out of nowhere, every corner of the embassy erupts in a signal of pain and rage. The frightened qou are given an order through distorted words of the... groundsmind?<br/><i><font color='ff0066'>KILL and dont BE KILLED!! only 1 of u ll get a chance to survive >:]</font></i><br><br>` + generateEvents(eventRace) + declareTheDiedThisCycleNumber() + `<br/><a href = "#" onclick = "goToPage('1')"> proceed.</a> `;
    var content = document.getElementById("content");
    content.innerHTML = htmlContentToInsert;

    savePage(`theRace`, `!!__THE_COLLAPSE__!!`);

    console.log('%cTHE RACE - ENDED', 'background: #006600; color: #66ff99');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
} // самый старт ги


function theCycle(hasTheEventAlreadyHappened) {
    updateDataBeforeUse();
    if (currentCharacterNumber === 1) {
        return true;
    } else if ((cycleNumber >= safeCycles && Math.random() < chanceRandomEvent) && hasTheEventAlreadyHappened != true) {
        chanceRandomEvent = decreaseRandomEventChanceTo;
        theEvent();
        return false;
    };
    if (cycleNumber >= safeCycles && increaseRandomEventChanceWithTime === true) chanceRandomEvent += increaseRandomEventChanceBy;
    cycleNumber++;
    magicPageNumber++;

    console.log('%c---  CYCLE ' + cycleNumber + '   ---', 'background: #0000b3; color: #cce6ff');


    titleChanger("!!__WINK_" + cycleNumber + "__!!");

    var htmlContentToInsert = generateEvents(eventCycle) + declareTheDiedThisCycleNumber() + `<br/><a href = "#" onclick = "goToPage('` + (parseInt(magicPageNumber) + 1) + `')"> proceed.</a> `;
    var content = document.getElementById("content");
    content.innerHTML = htmlContentToInsert;

    savePage(magicPageNumber, `!!__WINK_` + cycleNumber + "__!!", 1);

    console.log('%c---  CYCLE ' + cycleNumber + ' - ENDED   ---', 'background: #006600; color: #66ff99');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
} // циклы ака дни


/*function theRain() {
    updateDataBeforeUse();
    if (currentCharacterNumber === 1) {

        return true;
    }
    rainNumber++;
    magicPageNumber++;
    console.log('%c---   RAIN ' + rainNumber + '   ---', 'background: #0000b3; color: #cce6ff');


    titleChanger("Дождь " + rainNumber);

    var htmlContentToInsert = generateEvents(eventRain) + declareTheDiedThisCycleNumber() + `<br/><a href = "#" onclick = "goToPage('` + (parseInt(magicPageNumber) + 1) + `')"> proceed.</a> `;
    var content = document.getElementById("content");
    content.innerHTML = htmlContentToInsert;

    savePage(magicPageNumber, `Дождь ` + rainNumber);

    console.log('%c---   RAIN ' + rainNumber + ' - ENDED   ---', 'background: #006600; color: #66ff99');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
}*/


function theEvent() {
    magicPageNumber++;
    console.log('%c---   RANDOM EVENT   ---', 'background: #0000b3; color: #cce6ff');

    var eventData = decideEventGenus();
    var eventGenus = eventData.eventGenus;


    titleChanger("!!__RANDOM_EVENT__!!");

    var htmlContentToInsert = eventData.string + `<br><br>` + generateEvents(eventGenus) + declareTheDiedThisCycleNumber() + `<br/><a href = "#" onclick = "goToPage('` + (parseInt(magicPageNumber) + 1) + `')"> proceed.</a> `;
    var content = document.getElementById("content");
    content.innerHTML = htmlContentToInsert;

    savePage(magicPageNumber, `!!__RANDOM_EVENT__!!`, `1`)
    console.log('%c---   RANDOM EVENT - ENDED   ---', 'background: #006600; color: #66ff99');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');

    theCycle(true);
}


function theWinner() {
    console.log('%c--   THE WINNER   ---', 'background: #0000b3; color: #cce6ff');

    doubleCheck();
    magicPageNumber++;

    titleChanger("!!!!!!!!");

    var htmlContentToInsert = declareWinner() + `<br/><a href = "#" onclick = "goToPage('thePlacements')"> proceed.</a> `;
    var content = document.getElementById("content");
    content.innerHTML = htmlContentToInsert;

    savePage(magicPageNumber, `!!!!!!!!`, `1`);
    console.log('%c---   THE WINNER - ENDED   ---', 'background: #006600; color: #66ff99');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
}


function thePlacements() {
    console.log('%c---   THE PLACEMENTS   ---', 'background: #0000b3; color: #cce6ff');

    doubleCheck();
    titleChanger("!!__RANKINGS__!!");

    var htmlContentToInsert = declarePlacements() + declareOtherPlacements() + `<br/><a href = "#" onclick = "location.reload()"> reload the page and play again!</a> `;
    var content = document.getElementById("content");
    content.innerHTML = htmlContentToInsert;

    savePage(`thePlacements`, `!!__RANKINGS__!!`);

    console.log('%c---   THE PLACEMENTS - ENDED   ---', 'background: #006600; color: #66ff99');
    console.log('%cParaffin Index: ' + paraffinIndex, 'background: #006600; color: #66ff99');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
    console.log("%c---", 'color: #666666');
}


function theGenerate() {
    if (generated == true) {
        goToPage(`theRace`);
        return;
    }
    theRace();
    do {
        i = theCycle();
        // i = theRain();
    } while (i != true)
    theWinner();
    thePlacements();
    goToPage(`theRace`);
    console.log("*делает кофе квамбу*")
    generated = true;
}


window.onload = localStorage.clear();
window.onload = theMenu();
