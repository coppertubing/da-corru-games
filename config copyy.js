// ---- ПЕРСОНАЖИ и ВЕСЕЛЫЕ ПЕРЕМЕННЫЕ и СПИСОК ИВЕНТОВ -----
// здесь дуто разрешает тыкаться в нужные штуки
var ver = "all corru"

var characters = [
    {
        name: "Zoriavik",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/amnez/1.PNG",
    },
    {
        name: "Rovata",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "img/participants/amnez/2.PNG",
    },
    {
        name: "Koduyuta",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/amnez/3.PNG",
    },
    {
        name: "Gavizva",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "img/participants/amnez/4.PNG",
    },
    {
        name: "Mivizl",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "img/participants/amnez/5.PNG",
    },
    {
        name: "Vedane",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "img/participants/amnez/6.PNG",
    },
    {
        name: "Akjellte",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "img/participants/amnez/7.PNG",
    },
    {
        name: "Caiunaka",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/amnez/8.PNG",
    }
]

characters.forEach(function (element) {
    element.alive = true
    element.beenUsed = false
    element.kills = 0,
    element.hasKilled = []
    element.killedBy = undefined
    element.oldKilledBys = []
    element.revived = 0
    element.special = { afflicted: false, evil: false, mindcore:false, cool:true}
    element.filter = []
});

var placements = [];
var killPlacements = [];
var currentState = "";

var initialCharacterNumber = characters.length; // изначальное колво игроков
var currentCharacterNumber = initialCharacterNumber; // счетчик - текущее колво игроков (сначала равно изначальному)
var currentUnusedCharacterNumber = currentCharacterNumber; // счетчик - текущее колво неисп. игроков (сначала равно текущему)
var diedThisCycle = 0; // счетчик - сколько умерло в этом цикле

var cycleNumber = 0; // счетчик - колво циклов
var rainNumber = 0; // счетчик - колво дождей

var paraffinIndex = 0; // :)
var paraffinCycles = [];
var paraffinChecker = false;

var generated = false;
var magicPageNumber = 0;

// начиная отсюда можно трогать переменные

var chanceLethal = 0.25; // шанс смертельных ивентов (по умолчанию - 25%)
var chanceRevival = 0.033333333; // шанс возрождающих ивентов (по умолчанию - 3.333333333%)

var chanceRandomEvent = 0.5; // шанс каждого дня стать случайным событием (по умолчанию - 10%)

var safeCycles = 5; // сколько циклов должна продлиться игра перед тем как смогут начать случаться случайные события (по умолчанию - 2)
var safeCyclesDuringGame = 1; // сколько циклов должна продлиться игра после случайного события перед тем как смогут начать случаться случайные события (по умолчанию - 1)

var increaseRandomEventChanceWithTime = false; // повышать ли шанс случайного события по прошествию игры раз в цикл (не начинает повышение до конца safeCycles) (по умолчанию - false)
var increaseRandomEventChanceBy = 0.0 // на сколько повышать шанс раз в цикл (по умолчанию - 5%)
var decreaseRandomEventChanceTo = 0.0 // до скольки понижать шанс после срабатывания случайного события (ИМЕЙ В ВИДУ, что оно сразу же начисляет increaseRandomEventChanceBy поверх) (по умолчанию - 10%)

var record = 25 // рекорд смертей - менять вручную!!

var nicknamecolor_died = `ff00ff` // каким цветом красить ник умершего в ивенте чела (по умолчанию - fb5c00)
var nicknamecolor_revived = `00ffff` // каким цветом красить ник умершего в ивенте чела (по умолчанию - bbd404)
