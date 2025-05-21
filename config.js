// ---- ПЕРСОНАЖИ и ВЕСЕЛЫЕ ПЕРЕМЕННЫЕ и СПИСОК ИВЕНТОВ -----
// здесь дуто разрешает тыкаться в нужные штуки

var characters = [
    {
        name: "Akizet",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`],
        singular: true,
        image: "https://i.ibb.co/rKkNgHJ6/aki.png",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "Cavik",
        pronoun: [`he`,`him`,`his`,`his`,`himself`],
        singular: true,
        image: "https://i.ibb.co/G33NB4pf/cav.png",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "Kazki",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`],
        singular: true,
        image: "https://i.ibb.co/6JfCRdCq/kaz.png",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "Bozko",
        pronoun: [`he`,`him`,`his`,`his`,`himself`],
        singular: true,
        image: "https://i.ibb.co/0wBRWwZ/boz.png",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "Gakvu",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`],
        singular: true,
        image: "https://i.ibb.co/jZGSB9bs/gak.png",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "Tozik",
        pronoun: [`he`,`him`,`his`,`his`,`himself`],
        singular: true,
        image: "https://i.ibb.co/fzDwWCFR/toz.png",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "Miltza",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`],
        singular: true,
        image: "https://i.ibb.co/6cnWCFjF/mil.png",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "Idril",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`],
        singular: true,
        image: "https://i.ibb.co/Wp4GwhYV/idr.png",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    /*{
        name: "duto",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`],
        singular: false,
        image: "img/p/duto.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "gakvu \"the antisun\"",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`],
        singular: false,
        image: "img/p/gakvu.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "haze/thesis/metadata",
        pronoun: [`it`,`it`,`its`,`its`,`itself`],
        singular: true,
        image: "img/p/hazethesismetadata.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "id?il",
        pronoun: [`sh*`,`h*r`,`h*r`,`h*rs`,`h*rself`],
        singular: true,
        image: "img/p/idwil.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "Juniper",
        pronoun: [`it`,`it`,`its`,`its`,`itself`],
        singular: true,
        image: "img/p/juniper.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "kazkin't",
        pronoun: [`fae`,`faer`,`faer`,`faers`,`faerself`],
        singular: true,
        image: "img/p/kazkin't.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "knifefight",
        pronoun: [`he`,`him`,`his`,`his`,`himself`],
        singular: true,
        image: "img/p/knifefight.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "tozikoric",
        pronoun: [`he`,`him`,`his`,`his`,`himself`],
        singular: true,
        image: "img/p/tozik.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },
    {
        name: "TRANSLATORFRIEND",
        pronoun: [`IT`,`IT`,`ITS`,`ITS`,`ITSELF`],
        singular: true,
        image: "img/p/trend.PNG",
        alive: true,
        beenUsed: false,
        kills: 0,
        hasKilled: [],
        killedBy: undefined,
        oldKilledBys: [],
        revived: 0
    },*/
]



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
