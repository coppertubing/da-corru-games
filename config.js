// ---- ПЕРСОНАЖИ и ВЕСЕЛЫЕ ПЕРЕМЕННЫЕ и СПИСОК ИВЕНТОВ -----
// здесь дуто разрешает тыкаться в нужные штуки
var ver = "all corru"

var characters = [

    {
        name: "Interloper",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "https://static.wikitide.net/corruwiki/c/c9/Interloper_portrait.gif",
    },
    {
        name: "Moth",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "https://static.wikitide.net/corruwiki/a/ac/MothCropped.gif",
    },



    {
        name: "Sentries",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "img/participants/allcorru/sentry.png",
    },


    {
        name: "Funfriend",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/3/39/Funfriend_Log_Portrait.gif",
    },


    {
        name: "Gordon",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://corru.observer/img/local/city/envoybutton.gif",
    },
    {
        name: "Oliver",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://corru.observer/img/local/city/realeye.gif",
    },


    {
        name: "Interviewer",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://corru.observer/img/local/ocean/ship/interviewerportrait.gif",
    },
    {
        name: "Maze Shit",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://corru.observer/img/local/ocean/ship/help.gif",
    },


    {
        name: "Memoryhole",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/a/a9/Eyeswarped.gif",
    },


    {
        name: "God",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/0/04/God-whitebg.gif",
    },


    {
        name: "Council",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "https://static.wikitide.net/corruwiki/a/a4/CouncilIcon.gif",
    },
    {
        name: "Fairy",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "https://static.wikitide.net/corruwiki/9/97/FairyIcon.gif",
    },
    {
        name: "Isabel",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/c/c9/IsabelIcon.gif",
    },
    {
        name: "Geli",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/f/f9/BsteliPortrait.gif",
    },
    {
        name: "Effigy",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/4/49/EffigyIcon.gif",
    },
    {
        name: "BSTRD",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/0/0a/BSTRD.gif",
    },
    {
        name: "Stowaway",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/c/c8/Stowaway.gif",
    },



    {
        name: "Drowning",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/d/de/Drowningportrait.gif",
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
        name: "Itzil",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "https://static.wikitide.net/corruwiki/4/4e/Itzil_sprite.gif",
    },
    {
        name: "Karik",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/7/77/Karik_sprite.gif",
    },
    {
        name: "Dozkallvi",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/8/8c/Dozkallviportrait.gif",
    },
    {
        name: "Idril",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "img/participants/canon/idr.png",
    },
    {
        name: "Telyu",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/d/d2/Telyu_portrait.gif",
    },
    {
        name: "Vekoa",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/e/eb/VekoaSpectre.gif",
    },




    {
        name: "Velzie (Thoughtform)",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://static.wikitide.net/corruwiki/8/81/Velzie.png",
    },

    {
        name: "Velzie (God)",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://corru.observer/img/local/embassy/wallm2.gif",
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

var chanceLethal = 0.25; // шанс смертельных ивентов (по умолчанию - 25%)
var chanceRevival = 0.033333333; // шанс возрождающих ивентов (по умолчанию - 3.333333333%)

var chanceRandomEvent = 0; // шанс каждого дня стать случайным событием (по умолчанию - 10%)

var safeCycles = 2; // сколько циклов должна продлиться игра перед тем как смогут начать случаться случайные события (по умолчанию - 2)
var safeCyclesDuringGame = 1; // сколько циклов должна продлиться игра после случайного события перед тем как смогут начать случаться случайные события (по умолчанию - 1)

var increaseRandomEventChanceWithTime = true; // повышать ли шанс случайного события по прошествию игры раз в цикл (не начинает повышение до конца safeCycles) (по умолчанию - false)
var increaseRandomEventChanceBy = 0.05 // на сколько повышать шанс раз в цикл (по умолчанию - 5%)
var decreaseRandomEventChanceTo = 0.10 // до скольки понижать шанс после срабатывания случайного события (ИМЕЙ В ВИДУ, что оно сразу же начисляет increaseRandomEventChanceBy поверх) (по умолчанию - 10%)

var record = 25 // рекорд смертей - менять вручную!!

var nicknamecolor_died = `ff00ff` // каким цветом красить ник умершего в ивенте чела (по умолчанию - fb5c00)
var nicknamecolor_revived = `00ffff` // каким цветом красить ник умершего в ивенте чела (по умолчанию - bbd404)
