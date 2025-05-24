// ---- ПЕРСОНАЖИ и ВЕСЕЛЫЕ ПЕРЕМЕННЫЕ и СПИСОК ИВЕНТОВ -----
// здесь дуто разрешает тыкаться в нужные штуки

var characters = [
    {
        name: "duto",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "img/participants/we/duto.PNG",
    },
    {
        name: "gakvu \"the antisun\"",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "img/participants/we/gakvu.PNG",
    },
    {
        name: "haze/thesis/metadata",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "img/participants/we/hazethesismetadata.PNG",
    },
    {
        name: "id?il",
        pronoun: [`sh*`,`h*r`,`h*r`,`h*rs`,`h*rself`], singular: true,
        image: "img/participants/we/idwil.PNG",
    },
    {
        name: "Juniper",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "img/participants/we/juniper.PNG",
    },
    {
        name: "kazkin't",
        pronoun: [`fae`,`faer`,`faer`,`faers`,`faerself`], singular: true,
        image: "img/participants/we/kazkin't.PNG",
    },
    {
        name: "knifefight",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "img/participants/we/knifefight.PNG",
    },
    {
        name: "tozikoric",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "img/participants/we/tozik.PNG",
    },
    {
        name: "TRANSLATORFRIEND",
        pronoun: [`IT`,`IT`,`ITS`,`ITS`,`ITSELF`], singular: true,
        image: "img/participants/we/trend.PNG",
    },


    {
        name: "Akizet",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/canon/aki.png",
    },
    {
        name: "Cavik",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "img/participants/canon/cav.png",
    },
    {
        name: "Kazki",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/canon/kaz.png",
    },
    {
        name: "Bozko",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "img/participants/canon/boz.png",
    },
    {
        name: "Gakvu",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/canon/gak.png",
    },
    {
        name: "Tozik",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "img/participants/canon/toz.png",
    },
    {
        name: "Miltza",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/canon/mil.png",
    },
    {
        name: "Idril",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/canon/idr.png",
    },
    

    
    {
        name: "CARNAGE ☄️",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "img/participants/carnar.png",
    },
    {
        name: "Kotzu",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "img/participants/kotzu.gif",
    },
    {
        name: "Azzun",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "img/participants/azzun.gif",
    },
]

characters.forEach(function (element) {
    element.alive = true
    element.beenUsed = false
    element.kills = 0,
    element.hasKilled = []
    element.killedBy = undefined
    element.oldKilledBys = []
    element.revived = 0
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

var chanceLethal = 0.5; // шанс смертельных ивентов (по умолчанию - 25%)
var chanceRevival = 0.25; // шанс возрождающих ивентов (по умолчанию - 3.333333333%)

var chanceRandomEvent = 0; // шанс каждого дня стать случайным событием (по умолчанию - 10%)

var safeCycles = 2; // сколько циклов должна продлиться игра перед тем как смогут начать случаться случайные события (по умолчанию - 2)
var safeCyclesDuringGame = 1; // сколько циклов должна продлиться игра после случайного события перед тем как смогут начать случаться случайные события (по умолчанию - 1)

var increaseRandomEventChanceWithTime = false; // повышать ли шанс случайного события по прошествию игры раз в цикл (не начинает повышение до конца safeCycles) (по умолчанию - false)
var increaseRandomEventChanceBy = 0.05 // на сколько повышать шанс раз в цикл (по умолчанию - 5%)
var decreaseRandomEventChanceTo = 0.10 // до скольки понижать шанс после срабатывания случайного события (ИМЕЙ В ВИДУ, что оно сразу же начисляет increaseRandomEventChanceBy поверх) (по умолчанию - 10%)

var record = 25 // рекорд смертей - менять вручную!!

var nicknamecolor_died = `ff00ff` // каким цветом красить ник умершего в ивенте чела (по умолчанию - fb5c00)
var nicknamecolor_revived = `00ffff` // каким цветом красить ник умершего в ивенте чела (по умолчанию - bbd404)
