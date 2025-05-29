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
        /*1*/[
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
        /*2-4*/[
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
            "remember to stay hydrated guys ^^ those " + diedThisCycle + " sure didnt",
            "eating " + diedThisCycle + " participants"
        ],
        /*5-10*/[
            "cruel and unusual punishment for " + diedThisCycle + " people",
            diedThisCycle + " peoples",
            diedThisCycle + " are not there anymore",
            "mmmmmmmmmmmmmmmmmmmmm " + diedThisCycle,
            "anyways, " + diedThisCycle + ".",
            "someone dies every gaze. but today " + diedThisCycle + " more guys died",
            "today " + diedThisCycle + " died 👍",
            "kill kill die die kill kill die die (" + diedThisCycle + " died)",
            "i think " + diedThisCycle + " died. i think. dunno for sure",
            "remember to stay hydrated guys ^^ those " + diedThisCycle + " sure didnt",
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
        /*11-16*/[
            diedThisCycle + "!!!!!! " + diedThisCycle + "!!!!!!!!!!!!!!",
            "heeeeehehehehehee. " + diedThisCycle + ".",
            "anyways, " + diedThisCycle + ".",
            "huh. " + diedThisCycle + " died.",
            "what action! what battle! what " + diedThisCycle + " dead participants!",
            "listen, the corru games are just like that, the corru games just kill " + diedThisCycle + " people a day",
            diedThisCycle + " okidoiad",
            "remember to stay hydrated guys ^^ those " + diedThisCycle + " sure didnt",
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
            "hey girl are you an infectious embodiment of bloodlust and violence cause i be getting the urge to kill " + diedThisCycle + " people just from looking at you",
            "HA now we know that " + diedThisCycle + "% of corru game participants are loooosrs (yes this is how percentages work. trust)",
            "someone died! " + diedThisCycle + " times!",
            diedThisCycle + " participants are sludgy",
            "mfw " + diedThisCycle + " participants die",
            "ultrakilling " + diedThisCycle,
            "the corru games are on a roll today! " + diedThisCycle + " dead, " + currentCharacterNumber - (Math.round(Math.random() * 6) + 5) + " injured"
        ],
        /*17-24*/[
            "hey girl are you an infectious embodiment of bloodlust and violence cause i be getting the urge to kill " + diedThisCycle + " people just from looking at you",
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
        /*>24*/[
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
    else if (diedThisCycle === 3 && Math.random() < 0.15) return "<br/>triple affirmative<br/>"
    else if (diedThisCycle === 4 && Math.random() < 0.15) return "<br/>fourp<br/>"
    else if (diedThisCycle === 12 && Math.random() < 0.15) return "<br/>twolve<br/>"
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

    string = string.replaceAll(`[` + number + `]`, `<strong><font color="ffff00">` + character.name + `</font></strong>`);

    string = string.replaceAll(`[die` + number + `]`, `<strong><font color="` + nicknamecolor_died + `">` + character.name + `</font></strong>`);

    string = string.replaceAll(`[rev` + number + `]`, `<strong><font color="` + nicknamecolor_revived + `">` + character.name + `</font></strong>`);

    string = string.replaceAll(`. [` + number + `they]`, `. ` + capitalizeFirstLetter(character.pronoun[0]));
    string = string.replaceAll(`. [` + number + `them]`, `. ` + capitalizeFirstLetter(character.pronoun[1]));
    string = string.replaceAll(`. [` + number + `their]`, `. ` + capitalizeFirstLetter(character.pronoun[2]));
    string = string.replaceAll(`. [` + number + `theirs]`, `. ` + capitalizeFirstLetter(character.pronoun[3]));
    string = string.replaceAll(`. [` + number + `themself]`, `. ` + capitalizeFirstLetter(character.pronoun[4]));

    string = string.replaceAll(`[` + number + `they]`, character.pronoun[0]);
    string = string.replaceAll(`[` + number + `them]`, character.pronoun[1]);
    string = string.replaceAll(`[` + number + `their]`, character.pronoun[2]);
    string = string.replaceAll(`[` + number + `theirs]`, character.pronoun[3]);
    string = string.replaceAll(`[` + number + `themself]`, character.pronoun[4]);

    if (character.singular == true) {
        string = string.replaceAll(`[` + number + `are]`, `is`);
        string = string.replaceAll(`[` + number + `have]`, `has`);
        string = string.replaceAll(`[` + number + `do]`, `does`);
        string = string.replaceAll(number + 'e]', `es`);
        string = string.replaceAll(number + ']', `s`);
    } else {
        string = string.replaceAll(`[` + number + `are]`, `are`);
        string = string.replaceAll(`[` + number + `have]`, `have`);
        string = string.replaceAll(`[` + number + `do]`, `do`);
        string = string.replaceAll(number + 'e]', ``);
        string = string.replaceAll(number + ']', ``);
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
    var killerSet = [];
    if (whoKiller1 != undefined) {
        whoKiller1.kills++;
        whoKiller1.hasKilled.push(who.name)
        killerSet.push(whoKiller1)
        if (whoKiller2 != undefined) {
            whoKiller2.kills++;
            whoKiller2.hasKilled.push(who.name)
            killerSet.push(whoKiller2)
            if (whoKiller3 != undefined) {
                whoKiller3.kills++;
                whoKiller3.hasKilled.push(who.name)
                killerSet.push(whoKiller3)
                if (whoKiller4 != undefined) {
                    whoKiller4.kills++;
                    whoKiller4.hasKilled.push(who.name)
                    killerSet.push(whoKiller4)
                    if (whoKiller5 != undefined) {
                        whoKiller5.kills++;
                        whoKiller5.hasKilled.push(who.name)
                        killerSet.push(whoKiller5)
                    }
                }
            }
        }
    }
    who.killedBy = parseNamesAndPronouns(parseAllNamesAndPronouns(why, killerSet), 0, who)
    
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
                string: "[1] somehow just does not notice the start of the collapse",
                playerCount: 1
            },
            {
                string: "[1] blames it all on the bright cousins",
                playerCount: 1
            },
            {
                string: "[1] tries to understand the signal's true meaning but ends up with a migraine",
                playerCount: 1
            },
            {
                string: "[1] thinks that this is a very weird prank but promptly changes [1their] mind upon seeing a horde of rabid containers",
                playerCount: 1
            },
            {
                string: "[1] is startled by the announcement",
                playerCount: 1
            },
            {
                string: "[1] is immediately attacked by a golem but manages to escape",
                playerCount: 1
            },
            {
                string: "[1] gets a bad headache from the signal",
                playerCount: 1
            },
            {
                string: "[1] cannot shake off the feelings of pain and anger",
                playerCount: 1
            },
            {
                string: "One of [1]'s limbs almost turns to sludge from the signal",
                playerCount: 1
            },
            {
                string: "[1] collapses from the signal",
                playerCount: 1
            },
            {
                string: "[1] wants to activate communications, but [1their] communicator is sludged!",
                playerCount: 1
            },
            {
                string: "[1] activates communications but does not hear anything good...",
                playerCount: 1
            },
            {
                string: "[1] goes to look for [1their] friends right away",
                playerCount: 1
            },
            {
                string: "[1] is frustrated that [1they] [1have] to stop [1their] work",
                playerCount: 1
            },
            {
                string: "[1] watches the chaos unfold",
                playerCount: 1
            },
            {
                string: "[1] notices something strange about the corrucystic machinery",
                playerCount: 1
            },
            {
                string: "[1] grabs everything [1they] can and runs for the exit. Too bad one cannot escape the Corru Games!",
                playerCount: 1
            },
            {
                string: "[1] plans to max out [1their] kill count",
                playerCount: 1
            },
            {
                string: "[1] feels weird",
                playerCount: 1
            },
            {
                string: "[1] is unbothered",
                playerCount: 1
            },
            {
                string: "[1] tries to find someone to form a team with but fails",
                playerCount: 1
            },
            {
                string: "[1] barely escapes a crowd of incoherent enemies",
                playerCount: 1
            },
            {
                string: "[1] is scared: first this weird signal, then the announcement, and now everyone and everything are acting so strangely!!",
                playerCount: 1
            },
            {
                string: "[1] cannot believe the absurdity of the situation",
                playerCount: 1
            },
            {
                string: "[1] yells for help as a golem approaches [1them]",
                playerCount: 1
            },
            {
                string: "[1] immediately rushes toward the exit, but it disappears before [1their] eyes. One cannot escape the Corru Games!",
                playerCount: 1
            },

            // 2's

            {
                string: "[1] tells [2] that everything will be alright",
                playerCount: 2
            },
            {
                string: "[1] and [2] make an agreement not to kill each other until the very end",
                playerCount: 2
            },
            {
                string: "[1] and [2] stare at each other in shock",
                playerCount: 2
            },
            {
                string: "[1] offers [2] to work together, but [2they] respond2] by trying to kill [1them]",
                playerCount: 2
            },
            {
                string: "[1] and [2] search for the exit together. Oooh, but one cannot escape the Corru Games!",
                playerCount: 2
            },
            {
                string: "[1] turns to [2] to ask about what is happening, but [2] throws a cyst at [1them] and runs off",
                playerCount: 2
            },
            {
                string: "[1] grabs [2]'s arm and leads [2them] somewhere",
                playerCount: 2
            },
            {
                string: "[1] tells [2] that [1they] [1have] a very bad feeling",
                playerCount: 2
            },
            {
                string: "[1] and [2] disagree on what they should do",
                playerCount: 2
            },
            {
                string: "[1] witnesses wounded [2] barge into [1their] room and is left terrified",
                playerCount: 2
            },
            {
                string: "[1] and [2] grow worried as seemingly all tech exhibits signs of severe incoherence",
                playerCount: 2
            },
            {
                string: "[1] helps [2] fight off a sudden attendant attack",
                playerCount: 2
            },
            {
                string: "[1] demands an explanation from [2], knowing [2they] [2are] from the opposite side of the conflict",
                playerCount: 2
            },
            {
                string: "[1] asks [2] if [2they] [2are] okay",
                playerCount: 2
            },
            {
                string: "[1] and [2] stick together",
                playerCount: 2
            },
            {
                string: "[1] leaves [2] in a hurry. [2they] [2do] not understand what is going on, are they not friends?",
                playerCount: 2
            },
            {
                string: "[1] grabs a bunch of weapons and tells [2] to do the same if [2they] want to survive",
                playerCount: 2
            },
            {
                string: "[1] asks [2] if they have any useful items. [2] offers [1them] a couple of restoratives",
                playerCount: 2
            },
            {
                string: "[1] whispers under [1their] breath: \"not again...\"; [2] is confused",
                playerCount: 2
            },
            {
                string: "[1] demands [2] to give up all [2their] belongings",
                playerCount: 2
            },
            {
                string: "[1] wants to find an exit. [2] tells [1them] not to even try",
                playerCount: 2
            },
            {
                string: "[1] and [2] both find an aima cyst, but they do not want to share it. Eventually it breaks and they part ways",
                playerCount: 2
            },

            // 3's

            {
                string: "[1] searches for anyone with a communicator, but neither [2] nor [3] has one in working condition",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] panic and huddle together in a group",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] debate over who will die first",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] scatter in all directions",
                playerCount: 3
            },
            {
                string: "[1] orders [2] and [3] to follow [1them]",
                playerCount: 3
            },
            {
                string: "[1] laughs at [2] and [3], who formed a group, and says that cooperation is futile in this game",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] get into a messy fight",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] search for anything that might help them later on",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] destroy every enemy on their path",
                playerCount: 3
            },
            {
                string: "While [1] and [2] fight over resources, [3] steals them all",
                playerCount: 3
            },
            {
                string: "[1] and [2] threaten [3] and seize [3their] belongings",
                playerCount: 3
            },
            {
                string: "[1] attempts to kill [2] and [3] in order to get their equipment, but fails and escapes by a miracle",
                playerCount: 3
            },

            // 4's

            {
                string: "[1], [2], [3] and [4] search for other participants",
                playerCount: 4
            },

        ],
        lethal: [

            // 1's

            {
                string: "[die1] manages to get out of the embassy before all exits close. For this crime, I kill [1them] personally",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Tried to escape`)
                },
            },
            {
                string: "[die1] speedruns [1their] death",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Got a world record`)
                },
            },
            {
                string: "[die1] cannot withstand the signal's power",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Okidoia'd but like really violently`)
                },
            },

            // 2's


            // 3's

            {
                string: "While everyone is still recovering from the signal, [1] kills the weakened [die2] and [die3]",
                playerCount: 3,
                howManyDeaths: 2,
                updateData: function (player1, player2, player3) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Weakened by the signal, killed by <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1)
                    theFunnyKillFunction(player3, `Weakened by the signal, killed by <strong><font color="ffff00">` + player1.name + `</font></strong>`, player1)
                },
            },

            // 4's


            // 5's
        ]
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
                string: "[1] tries to figure out where the fuck [1are] [1they]",
                playerCount: 1
            },
            {
                string: "[1] sneezes. Wait, what? Qou bodies are not supposed to do that",
                playerCount: 1
            },
            {
                string: "[1] throws [1their] simulacrum at an incoherent veilklight",
                playerCount: 1
            },
            {
                string: "[1] stumbles into a room [1they] did not know existed",
                playerCount: 1
            },
            {
                string: "[1] is",
                playerCount: 1
            },
            {
                string: "[1] feels a little incoherent",
                playerCount: 1
            },
            {
                string: "[1] fights through rows of enemies, leaving behind a trail of sludge",
                playerCount: 1
            },
            {
                string: "[1] locks [1themself] in a personnel room and tries to calm down",
                playerCount: 1
            },
            {
                string: "[1] searches for sfer and useful items",
                playerCount: 1
            },
            {
                string: "[1] takes a moment to rest",
                playerCount: 1
            },
            {
                string: "[1] finds bright weaponry but, not knowing its effectiveness, leaves it be",
                playerCount: 1
            },
            {
                string: "[1] mends [1their] wounds with restorative cysts",
                playerCount: 1
            },
            {
                string: "[1] finds some simulacra and drinks it all",
                playerCount: 1
            },
            {
                string: "[1] grieves the loss of [1their] false enviroments",
                playerCount: 1
            },
            {
                string: "[1] hears it calling",
                playerCount: 1
            },
            {
                string: "[1] is ambushed by a group of very sneaky containers",
                playerCount: 1
            },
            {
                string: "[1] finds a kavruka. Yay! Explode everything!",
                playerCount: 1
            },
            {
                string: "[1] chats with a barfriend, who keeps insisting [1they] seek1] shelter, but [1] just does not stop talking",
                playerCount: 1
            },
            {
                string: "[1] finds bright weaponry and uses it to shoot a nearby golem 28 times before running out of ammunition",
                playerCount: 1
            },
            {
                string: "[1] is doing violence",
                playerCount: 1
            },
            {
                string: "[1] overhears someone talking but does not recognize the voices. [1they] decide1] to back off",
                playerCount: 1
            },
            {
                string: "[1] uses [1their] last disabler charge to escape a large group of enemies",
                playerCount: 1
            },
            {
                string: "[1] steals something from [1their] friend's room",
                playerCount: 1
            },
            {
                string: "[1] says a very bad word after being hit in the face by a container",
                playerCount: 1
            },
            {
                string: "[1] makes a bomb",
                playerCount: 1
            },
            {
                string: "[1] chews on corru",
                playerCount: 1
            },
            {
                string: "[Participant] finds a bug",
                playerCount: 1
            },
            {
                string: "[1] engages in a deep philosophical conversation with a newly-sapient chair",
                playerCount: 1
            },
            {
                string: "[1] finds and pets a dog",
                playerCount: 1
            },
            {
                string: "[1] talks to a very strange door... It does not look like made out of corru…",
                playerCount: 1
            },
            {
                string: "[1] sets up deadly traps",
                playerCount: 1
            },
            {
                string: "[1] curses Velzie",
                playerCount: 1
            },
            {
                string: "[1] hopes not to die stupidly",
                playerCount: 1
            },
            {
                string: "[1] scribbles on a wall: \"[1] was here\"",
                playerCount: 1
            },
            {
                string: "[1] prays for Velzie to smile on [1them]",
                playerCount: 1
            },
            {
                string: "[1] feels a little lonely",
                playerCount: 1
            },
            {
                string: "[1] regrets [1their] actions",
                playerCount: 1
            },
            {
                string: "For a split blink, [1] hears someone calling out [1their] name",
                playerCount: 1
            },
            {
                string: "[1] hopes the bright cousins are okay",
                playerCount: 1
            },
            {
                string: "[1] cannot remember how much time has passed",
                playerCount: 1
            },
            {
                string: "[1] prays for Velzie to play tricks on [1their] enemies",
                playerCount: 1
            },
            {
                string: "[1] bounces off the walls",
                playerCount: 1
            },
            {
                string: "[1] sings a tune",
                playerCount: 1
            },
            {
                string: "[1] begs [1their] creator for mercy",
                playerCount: 1
            },
            {
                string: "[1] breathes in, and out",
                playerCount: 1
            },
            {
                string: "[1] meows",
                playerCount: 1
            },
            {
                string: "[1] decides who will be [1their] victim in the next wink",
                playerCount: 1
            },
            {
                string: "[1] dreams about victory",
                playerCount: 1
            },
            {
                string: "[1] draws on the walls with sludge",
                playerCount: 1
            },
            {
                string: "[1] gets lost",
                playerCount: 1
            },
            {
                string: "[1] does a really cool flip",
                playerCount: 1
            },
            {
                string: "[1] hides from other participants",
                playerCount: 1
            },
            {
                string: "[1] thinks really hard",
                playerCount: 1
            },
            {
                string: "[1] forgets something extremely important",
                playerCount: 1
            },
            {
                string: "[1] eats a cyst",
                playerCount: 1
            },
            {
                string: "[1] laughs like a movie villain",
                playerCount: 1
            },
            {
                string: "[1] bows to the audience",
                playerCount: 1
            },
            {
                string: "[1] thinks about orange juice",
                playerCount: 1
            },

            // 2's

            {
                string: "[1] plays dead to take [2] by surprise and kill [2them], but accidentally falls asleep",
                playerCount: 2
            },
            {
                string: "[1] scribbles on a wall: \"[2] is a dumbass\"",
                playerCount: 2
            },
            {
                string: "[1] is sullenly silent to any attempts by [2] to make conversation. [2they] take2] offense and decide2] to kill [1] whenever possible in the future",
                playerCount: 2
            },
            {
                string: "[1] accidentally spills someone's secret to [2] and threatens to kill [2them]. [2] fearfully promises to keep [2their] mouth shut",
                playerCount: 2
            },
            {
                string: "[1] wants to win so badly that [2] starts rooting for [1them]",
                playerCount: 2
            },
            {
                string: "[1] and [2] feel <i>really</i> awkward",
                playerCount: 2
            },
            {
                string: "[1] shares a rumor with [2], and [2] makes a surprised expression, knowing full well that [2they] started the rumor in the first place",
                playerCount: 2
            },
            {
                string: "[1] wants to grab a simulacrum, but [2] tells [1them] that this has no priority right now",
                playerCount: 2
            },
            {
                string: "[1] finds [1themself] in a very dark room and does not notice [2] hiding there",
                playerCount: 2
            },
            {
                string: "[1] endlessly yaps to [2] about something",
                playerCount: 2
            },
            {
                string: "At first [1] is afraid of [2], but later relaxes from [2their] friendliness",
                playerCount: 2
            },
            {
                string: "[1]'s opinion of [2] changes dramatically for the worse",
                playerCount: 2
            },
            {
                string: "[1] and [2] play a game of parasite",
                playerCount: 2
            },
            {
                string: "[1] insults [2]. [2they] brush2e] it off",
                playerCount: 2
            },
            {
                string: "[1] and [2] gossip",
                playerCount: 2
            },
            {
                string: "[1] and [2] plot together",
                playerCount: 2
            },
            {
                string: "[1] is almost killed by a spire attendant, but [2] saves [1them]",
                playerCount: 2
            },
            {
                string: "[1] and [2] discuss possible escape options",
                playerCount: 2
            },
            {
                string: "[1] throws an explosive too close to [2], who screams at [1them] to be more careful!!!",
                playerCount: 2
            },
            {
                string: "[1] tries to soothe the distressed [2]",
                playerCount: 2
            },
            {
                string: "[1] attacks [2], hoping to take [2their] resources, but [2] fights [1them] off",
                playerCount: 2
            },
            {
                string: "[1] ambushes [2] and takes [2their] equipment but spares [2their] life",
                playerCount: 2
            },
            {
                string: "[1] quietly stalks the unsuspecting [2]",
                playerCount: 2
            },
            {
                string: "[1] and [2] avoid each other",
                playerCount: 2
            },
            {
                string: "[1] gives [2] a restorative cyst. [2] cannot stop thanking [1them]",
                playerCount: 2
            },
            {
                string: "[1] and [2] hug",
                playerCount: 2
            },
            {
                string: "[1] sees [2] rummaging through the storage of [1their] personnel room but decides not to interfere",
                playerCount: 2
            },
            {
                string: "[1] and [2] threaten each other excessively",
                playerCount: 2
            },
            {
                string: "[1] does not trust [2]. After all, was the announcement not \"kill and do not be killed\"?",
                playerCount: 2
            },
            {
                string: "[1] bites [2]!!!!!!!!",
                playerCount: 2
            },
            {
                string: "[1] and [2] battle for enrichment",
                playerCount: 2
            },
            {
                string: "[1] masterfully defeats numerous foes. [2] is in awe",
                playerCount: 2
            },
            {
                string: "[1] assures [2] that \"[1they] will take care of the enemies\" but almost dies",
                playerCount: 2
            },
            {
                string: "[1] screams very loudly for no reason. From the other side of the wall, [2] answers with an equally loud scream",
                playerCount: 2
            },
            {
                string: "[1] tries to earn [2]'s trust by killing all the enemies for [2them], but that causes [2] to grow even more distrustful",
                playerCount: 2
            },
            {
                string: "[1] and [2] make a truce. They shall not kill each other until the very end",
                playerCount: 2
            },
            {
                string: "[1] protects [2] in exchange for valuables",
                playerCount: 2
            },
            {
                string: "[1] notices that [1they] [1are] starting to enjoy [2]'s company",
                playerCount: 2
            },
            {
                string: "[1] calls out [2]'s name, but [2they] [2do] not answer, choosing to stay hidden",
                playerCount: 2
            },
            {
                string: "[1] smiles gently at [2]. [2they] ask2] what the fuck [1are] [1they] doing with [1their] face",
                playerCount: 2
            },
            {
                string: "[1] and [2] fight alongside each other",
                playerCount: 2
            },
            {
                string: "[1] asks [2] something about the bright cousins. [2they] answer2] in a very normal way",
                playerCount: 2
            },
            {
                string: "[1] tells [2] a secret. [2they] look2] very surprised",
                playerCount: 2
            },
            {
                string: "[1] tells [2] a secret. [2they] look2] horrified",
                playerCount: 2
            },
            {
                string: "[1] and [2] realize they come from the same cave-city",
                playerCount: 2
            },
            {
                string: "[1] barely convinces [2] not to kill [1them]",
                playerCount: 2
            },
            {
                string: "[1] asks [2] for a receptor curl",
                playerCount: 2
            },
            {
                string: "[1] jumpscares [2]",
                playerCount: 2
            },
            {
                string: "[1] swears [1they] will find and kill [2]",
                playerCount: 2
            },
            {
                string: "[1] and [2] resort to playing rock-acid-claws in order to settle a debate",
                playerCount: 2
            },
            {
                string: "[1] panics and throws a rabid container at [2]. [2they] [2are] unamused",
                playerCount: 2
            },
            {
                string: "[1] thinks [1they] [1have] found [2]'s corpse, but in reality [2] is pretending to be dead",
                playerCount: 2
            },
            {
                string: "[1] gifts [2] a trinket",
                playerCount: 2
            },
            {
                string: "[1] challenges [2] to a fight. No one wins, but they recognize each other's strength and become friends",
                playerCount: 2
            },
            {
                string: "[1] compliments [2]'s signature",
                playerCount: 2
            },
            {
                string: "[1] gives all the junk he found to [2] and takes away all the valuable stuff [1themself]",
                playerCount: 2
            },
            {
                string: "[1] trips over a cyst, picks it up and throws it away in anger; it hits [2] right on the head",
                playerCount: 2
            },
            {
                string: "[1] searches everywhere for [2], wanting to give [2them] a gift. [2] hides desperately",
                playerCount: 2
            },
            {
                string: "[1] asks [2] if [2they] ever heard of the closed loop theory",
                playerCount: 2
            },
            {
                string: "[1] and [2] bump into each other several times in a row and decide to go together, believing it to be a sign from Velzie",
                playerCount: 2
            },
            {
                string: "[1] tries to scare away [2], but accidentally becomes [2their] friend",
                playerCount: 2
            },
            {
                string: "[1] and [2] fight for the entire wink, but continue to evade each other's attacks over and over again",
                playerCount: 2
            },
            {
                string: "[1] sees [2] running away from something and helps [2them] escape",
                playerCount: 2
            },
            {
                string: "[1] hits [2] with a chair",
                playerCount: 2
            },
            {
                string: "[1] and [2] both hide from each other, thinking that one wants to kill the other",
                playerCount: 2
            },
            {
                string: "[1] and [2] make some kind of device together",
                playerCount: 2
            },
            {
                string: "[1] watches [2] and sees something [1they] should not have",
                playerCount: 2
            },
            {
                string: "[1] promises [2] not to kill [2them] in return for all [2their] supplies, but [2] only gives [1] a punch in the face",
                playerCount: 2
            },
            {
                string: "[1] and [2] :)",
                playerCount: 2
            },
            {
                string: "[1] performs an exchange with [2]. All of a sudden, [2] frightfully points behind [1their] back and, while [1] is distracted, disappears with [1their] goods",
                playerCount: 2
            },
            {
                string: "[1] tries to wrestle a kavruka away from [2], but [2they] throw2] it to the side, detonating it",
                playerCount: 2
            },

            // 3's

            {
                string: "[1] notices [2] and [3] following [1them] and tries to escape",
                playerCount: 3
            },
            {
                string: "[1] explains the mechanics of the dull to [2] and [3] in excruciating detail. [2] is actually invested, but the other one wants to kill [1] just so [3they] do not have to listen to this",
                playerCount: 3
            },
            {
                string: "[1] intimidates [2] and [3] and kicks them out of [1their] tendril",
                playerCount: 3
            },
            {
                string: "[1] and [2] invite [3] to join them, but [3they] silently leave3]",
                playerCount: 3
            },
            {
                string: "[1] sees [2] waving and waves back. Then realizes that [2] is waving not to [1them], but to [3]",
                playerCount: 3
            },
            {
                string: "[1] and [2] team up to kill [3], but they never gather the courage to do it",
                playerCount: 3
            },
            {
                string: "[1] and [2] ambush [3], but [3] is armed well and successfully defends [3themself]",
                playerCount: 3
            },
            {
                string: "[1] blows up a bunch of sludged junk for fun, nearly killing [2] and [3] hiding nearby",
                playerCount: 3
            },
            {
                string: "[1] and [2] want to set up an ambush for [3], but they cannot agree on a plan",
                playerCount: 3
            },
            {
                string: "[1] and [2] find [3]'s personnel room and rummage through [3their] stuff. Not for resources, just because they can",
                playerCount: 3
            },
            {
                string: "[1] wants to kill [2] but cannot risk attacking while [3] is nearby",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] are having fun and playing",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] are being a bunch of sillies",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] get into a huge physical fight, but no one wins",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] tell each other stories from their larval lives",
                playerCount: 3
            },
            {
                string: "[1] and [2] argue to the point where they draw their weapons. [3] barely manages to calm them down",
                playerCount: 3
            },
            {
                string: "[1] and [2] encounter [3], who wants to join their group despite [2]'s protest. [1] decides to abandon [2] to navigate the embassy with [3] instead",
                playerCount: 3
            },
            {
                string: "[1] and [2] encounter [3], who wants to join their group despite [2]'s protest. [1] decides to stay with [2], and [3] begrudgingly leaves",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3], who were on the verge of killing each other, are forced to cooperate in order to survive a group of violent kivskins",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] try to claw their way out through the walls",
                playerCount: 3
            },
            {
                string: "[1] promises that [1they] would never hurt [2] and [3]",
                playerCount: 3
            },
            {
                string: "[1] wounds [2] badly but does not get enough time to finish [2them] off before [3] appears out of nowhere and fights [1them] off",
                playerCount: 3
            },
            {
                string: "[1] shares [1their] knowledge of combat with [2] and [3]",
                playerCount: 3
            },
            {
                string: "[1] sees [2] and [3] and immediately turns back",
                playerCount: 3
            },
            {
                string: "[1] and [2] argue about the sides of the meteorite conflict. [3], clueless about what are those two so angry about, listens in",
                playerCount: 3
            },
            {
                string: "[1] sees no point in continuing to fight in the Сorru Games, but [2] reminds [1them] of the time [3] wronged [1them], and [1] lights up with the idea of revenge",
                playerCount: 3
            },
            {
                string: "[1], [2] and [3] argue about whose fate is worse. In the end, everyone agrees that [3] is the unhappiest and comforts [3them]",
                playerCount: 3
            },
            {
                string: "[1] attacks [2], but at the last moment [2they] convince2] [1] not to kill [2them] in exchange for valuable information about [3]",
                playerCount: 3
            },
            {
                string: "[1] apologizes to [2] and [3] for everything",
                playerCount: 3
            },
            {
                string: "[1] tells [2] [1their] plan to kill [3]. [2], as [3]'s best friend, listens intently",
                playerCount: 3
            },
            {
                string: "[1] gets annoyed at the memories of [2] and [3], and then sits for a long time sharpening [1their] claws",
                playerCount: 3
            },
            {
                string: "[1] accidentally steps on [2]'s foot and blames it on [3]. An argument ensues",
                playerCount: 3
            },
            {
                string: "[1] betrays [2] and [3], stealing their supplies and running away",
                playerCount: 3
            },

            // 4's

            {
                string: "[1] proposes a plan to kill [2], but [3] and [4] vehemently refuse",
                playerCount: 4
            },
            {
                string: "While [1] and [2] battle over supplies, [3] and [4] fight over the right to steal those very supplies",
                playerCount: 4
            },
            {
                string: "[1], [2] and [3] watch some husks fight in a pit and place bets. [4], who falls into the pit, wins",
                playerCount: 4
            },
            {
                string: "[1] stockpiles weapons, [2] steals them, [3] catches [2them] in the act and goes to tell everyone, and [4] tries [4their] best to stop that from happening",
                playerCount: 4
            },
            {
                string: "[1] and [2] run away from [3] and [4] in absolute terror",
                playerCount: 4
            },
            {
                string: "[1] and [2] try to track down and kill [3] and [4] while [3] and [4] try to track down and kill [1] and [2]",
                playerCount: 4
            },
            {
                string: "[1] informs [2] of a rumor that [3] recently almost killed [4]",
                playerCount: 4
            },
            {
                string: "[1] desperately tries to kill [2]; [3] and [4] have to drag [1them] into another room",
                playerCount: 4
            },
            {
                string: "[1], [2], [3] and [4] decide to play a cousinly game called \"Monopoly\", but no one knows the rules",
                playerCount: 4
            },

            {
                string: "[1] tells [2], [3] and [4] everything about the meteorite and the conflict around it",
                playerCount: 4
            },

            // 5's

            {
                string: "[1], [2] and [3], [4] are arguing over the right to take [5] on their team. Before it gets to a fight, [5] silently slips out of their sight",
                playerCount: 5
            },
            {
                string: "[1] declares that the Corru Games is an unfair and cold-blooded system. [1they] [1are] joined by [2] and [3], wanting fairness, while [4] and [5]  laugh at the idea",
                playerCount: 5
            },
            {
                string: "[1] and [2] fight fiercely, but a group of [3], [4] and [5] comes and chases them away",
                playerCount: 5
            },
            {
                string: "[1] is rude to [2], who gets upset and complains to [3], who tells [4] about the situation, who asks [5] for help, who punches [1] in the face",
                playerCount: 5
            },

            // 6's

            {
                string: "[1], [2] and [3] compete with [4], [5] and [6] for resources",
                playerCount: 6
            },
        ],
        lethal: [
            {
                string: "[die1] connects to an unknown cyst and dies of incoherency",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    theFunnyKillFunction(player1, `Did not have basic computer competence`)
                },        
            },
            {
                string: "[die1] joins the okidoia",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    theFunnyKillFunction(player1, `Okidoia'd`)
                },
            },
            {
                string: "[die1] dies in the ceremony unceremoniously",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    theFunnyKillFunction(player1, `Victim of a really stupid event pun`)
                },
            },
            {
                string: "[die1] cannot handle the amount of foes that has surrounded [1them]",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                
                    theFunnyKillFunction(player1, `Too many enemies`)
                },
            },
            {
                string: "[die1] mysteriously disappears",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Disappeared`)
                },
            },
            {
                string: "[die1] bites a container. The container bites [1them] back, and fatally so",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Bited`)
                },
            },
            {
                string: "[die1] just dies",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Because I said so`)
                },
            },
            {
                string: "[die1] sips from an EVIL simulacrum and DIES",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Alcoholism`)
                },
            },
            {
                string: "The room [die1] is in collapses and [1they] [1are] crushed under the debris",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Victim of a collapse in the collapse`)
                },
            },
            {
                string: "[die1] is too scared of husks to concentrate on fighting and ends up killed by them",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Husks :(`)
                },
            },
            {
                string: "[die1] gets eaten by a movefoe",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Learned the evil of elevators`)
                },
            },
            {
                string: "[die1] curses Velzie. Velzie curses [1them] back",
                playerCount: 1,
                howManyDeaths: 1,
                updateData: function (player1) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player1, `Cursed`)
                },
            },

            // 2's

            {
                string: "[1] bets that [die2] cannot jump over that huge gap in the floor",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Lost a bet`)
                },
            },
            {
                string: "[1] sends [die2] to the backstage",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Finished [0their] performance with the help of [1]`, player1)
                },
            },
            {
                string: "[1] successfully lands " + (Math.round(Math.random() * 100) + 31) + " frenzy critical hits on [die2]",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Totally frenzied by [1]`, player1)
                },
            },
            {
                string: "[1] tells [die2] to close [2their] eyes because [1they] [1are] going to show [2them] a surprise! The surprise was death",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Surprised by [1]`, player1)
                },
            },
            {
                string: "[1] shoots [die2] with a \"gun's\"",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Guns are cool (shot by [1])`, player1)
                },
            },
            {
                string: "[1] commits vehicular manslaughter on [die2]",
                playerCount: 2,
                howManyDeaths: 1,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player2, `Vehicularmanslaughtered by [1]`, player1)
                },
            },
            {
                string: "[die1] accidentally explodes [1themself] along with [die2]",
                playerCount: 2,
                howManyDeaths: 2,
                updateData: function (player1, player2) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;
                    player1.kills++;
                    player1.hasKilled.push(player2.name);

                    theFunnyKillFunction(player1, `Exploded by accident`)

                    placements.push(player2);
                    player2.alive = false;
                    player2.killedBy = `Got caught in <strong><font color="ffff00">` + player1.name + `</font></strong>'s explosion`;
                },
            },

            // 3's


            // 4's

            {
                string: "[1], [2] and [3] gather around [die4] and stab [4them] 23 times",
                playerCount: 4,
                howManyDeaths: 1,
                updateData: function (player1, player2, player3, player4) {
                    currentCharacterNumber -= this.howManyDeaths;
                    diedThisCycle += this.howManyDeaths;

                    theFunnyKillFunction(player4, `Ides of March (killed by [1], [2] and [3])`, player1, player2, player3)
                },
            },
        ],
        revival: [
            {
                string: "[rev1] spawns back in",
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
                string: "[rev1] appears out of the blue",
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
                string: "[rev1] wakes up from a bad dream",
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
                string: "[rev1] declares [1they] [1are] not dead anymore",
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
                string: "[rev1] clarifies that [1they] did not <i>die</i> - [1they] <u>died</u>",
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
                string: "Velzie's fondness for [rev1] is truly nauseating",
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
                string: "[rev1] emerges from a wall",
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
                string: "[rev1] reverse-dies",
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
                string: "[rev1] simply refuses to lose like that",
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
                string: "[rev1] accidentally begins existing again",
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
                string: "[rev1] cancels [1their] death",
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
                string: "[rev1] is back on stage",
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
                string: "[rev1] wishes everyone a great gaze",
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
                string: "[rev1] is actually alive now",
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
                string: "Through a giggle of Velzie, [rev1] is back",
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

            // 2's

            {
                string: "[rev1] chases after [2] for the entire wink, trying to ask what eye it is right now",
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
                string: "[rev1] is revived by [2] through the power of friendship and love",
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
                string: "[rev1] is revived by [2] through the power of <i>a lot</i> of obscure technical knowledge. [2] where did you learn this",
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
                string: "[rev1]'s ghost haunts [2] into finding [1their] remains and reviving [1them]",
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
                string: "[rev1] still feels weird after being revived. [1they] ask1] [2] for assistance",
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
                string: "[rev1] steals [die2]'s body and rejoins the Corru Games",
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

                    theFunnyKillFunction(player2, `<strong><font color="ffff00">` + player1.name + `</font></strong> asked to borrow the body`, player1)
                }
            },
            {
                string: "[rev1] comes back to life just to kill [die2]",
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

                    theFunnyKillFunction(player2, `Got <strong><font color="ffff00">` + player1.name + `</font></strong> so mad [1they] came1] back from the afterlife to kill`, player1)
                }
            },
        ]
    }
}

var eventsRandom = [
    {
        used: false,
        string: `Every corner of the embassy is all of a sudden filled with hundreds of containers... And these containers are-<br><font color='ff0066'>RABID n EVIL AS FUCK!!!!!!!!!!!!!!!!!!!!!!</font>`,
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
                regular: [],
                lethal: []
            }
        }
    } // 1000 containers 
    /*{
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
    }*/
]




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
    var htmlContentToInsert = htmlCharacterRowBuilder() + `<a href = "#" onclick = "theGenerate()">proceed.</a> <div id="version">` + ver + `</div>`;
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

    var htmlContentToInsert = `Out of nowhere, every corner of the embassy erupts in a signal of pain and rage. The frightened qou are given an order through distorted words of the... groundsmind? No, it cannot be-<br/><i><font color='ff0066'>WELCAME TO DA CORRU GAMES!!!!!!!!!!<br>KILL and dont BE KILLED!! only 1 of u ll get a chance to survive >:]</font></i><br><br>` + generateEvents(eventRace) + declareTheDiedThisCycleNumber() + `<br/><a href = "#" onclick = "goToPage('1')"> proceed.</a> `;
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

    var htmlContentToInsert = declarePlacements() + declareOtherPlacements() + `<br/><a href = "#" onclick = "location.reload()">reload the page and play again!</a>`;
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
