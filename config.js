// ---- ПЕРСОНАЖИ и ВЕСЕЛЫЕ ПЕРЕМЕННЫЕ и СПИСОК ИВЕНТОВ -----
// здесь дуто разрешает тыкаться в нужные штуки
var ver = "all corru"

var characters = [
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
        name: "Vizir",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "https://media.discordapp.net/attachments/1547920550402195520/1553409110110773308/vizir-dithered.png?ex=6ab92478&is=6ab7d2f8&hm=99370b23fa955416042b92cec63c8d942cb5e63b6fc8e831e5f37cf442ca9a11&=&format=webp&quality=lossless",
    },
    {
        name: "Taxev",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553409182709977181/taxevikori-dithered.png?ex=6ab9248a&is=6ab7d30a&hm=db51d683cea914eb17af20f271d1683da71f858456f56940a4f24c9c1de4425b&",
    },
    {
        name: "Talika",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553409261147791481/talikirina-dithered.png?ex=6ab9249c&is=6ab7d31c&hm=af6131d6cf0f5ecaf14d6659a56da59aaa3d77b50189204162904d9bad0140df&",
    },
    {
        name: "Zenit",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553409325815566446/zenit-dithered.png?ex=6ab924ac&is=6ab7d32c&hm=558d6b40d746fba01ead50df6125387ee86134dfad55fb4cca1c74fb347a5783&",
    },
    {
        name: "Tokuva",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553409431436525588/artist-portrait.png?ex=6ab924c5&is=6ab7d345&hm=9d15ff5719cdeec42e015d06f4928cb68863032b60dfff671610743d4cef1bfc&",
    },
    {
        name: "Antari",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://media.discordapp.net/attachments/1547920550402195520/1553410023500021880/endobesk4.png?ex=6ab92552&is=6ab7d3d2&hm=04b61b3dc9d38c399f62cd3a51a0d8b45669e26808baa1dd2a5862b08e2ac459&=&format=webp&quality=lossless",
    },
    {
        name: "Lozvi",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553409474524352554/lozvi_1.png?ex=6ab924cf&is=6ab7d34f&hm=2e81a22f754559eb613a869f6245c151efc357a2a4c89acb18e4b16dc2f8dd64&",
    },
    {
        name: "Tikza",
        pronoun: [`they`,`them`,`their`,`theirs`,`themself`], singular: false,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553409488315490354/Tumblr_l_792310125112378_1.gif?ex=6ab924d2&is=6ab7d352&hm=6f3ed3a4882e328da71e81e4995c0262064c804fcc31d370fc3ca6c00498e564&",
    },
    {
        name: "Varil",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://media.discordapp.net/attachments/1547920550402195520/1553410090059698236/image0.jpg?ex=6ab92562&is=6ab7d3e2&hm=768a11e90b6debc32c8787430fec035f0f7067842f3e30bbf37f4a712b1c3153&=&format=webp&width=691&height=1024",
    },
    {
        name: "corru piss special",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://media.discordapp.net/attachments/1547920550402195520/1553409852271763608/zaza_glih.png?ex=6ab92529&is=6ab7d3a9&hm=793d1e8f61f4a4b15699de305170e1b5cd6edb9cdc07c1abab035f37ca359286&=&format=webp&quality=lossless",
    },
    {
        name: "Goku",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553409327786893373/goku.png?ex=6ab924ac&is=6ab7d32c&hm=bcefdc48576f64acc53edbebbb8cf7eeb60c9da9beeac6d0fc1c32ced57d056e&",
    },
    {
        name: "Bastar Secret Brother",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553409165219602442/image.png?ex=6ab92485&is=6ab7d305&hm=40a9aa123f4d64eb642d65be28c8e8aa25afec0fadb22b5fd9681f91d815a47f&",
    },
    {
        name: "Tzunya",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://f2.toyhou.se/file/f2-toyhou-se/characters/41320374?1789679085",
    },
    {
        name: "Ozukan",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://f2.toyhou.se/file/f2-toyhou-se/characters/40676784?1790002859",
    },
    {
        name: "Vitko",
        pronoun: [`he`,`him`,`his`,`his`,`himself`], singular: true,
        image: "https://f2.toyhou.se/file/f2-toyhou-se/characters/41727117?1790002608",
    },

    {
        name: "Fiend",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://media.discordapp.net/attachments/1547920550402195520/1553413096410972232/image.png?ex=6ab9282f&is=6ab7d6af&hm=cd185cc9eae5274094c474c1bebb9e8b765c47baa25f0d871864a6bf16b59f76&=&format=webp&quality=lossless",
    },

    {
        name: "Tanyu",
        pronoun: [`she`,`her`,`her`,`hers`,`herself`], singular: true,
        image: "https://cdn.discordapp.com/attachments/1547920550402195520/1553416557986848768/39480931_1.png?ex=6ab92b68&is=6ab7d9e8&hm=893e15a4f5465d73c92f9a34f16244669da7bab4522c505a06d9f631ef4bd3c6&",
    },

    {
        name: "Maze Shit",
        pronoun: [`it`,`it`,`its`,`its`,`itself`], singular: true,
        image: "https://corru.observer/img/local/ocean/ship/help.gif",
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

var safeCycles = 20; // сколько циклов должна продлиться игра перед тем как смогут начать случаться случайные события (по умолчанию - 2)
var safeCyclesDuringGame = 1; // сколько циклов должна продлиться игра после случайного события перед тем как смогут начать случаться случайные события (по умолчанию - 1)

var increaseRandomEventChanceWithTime = false; // повышать ли шанс случайного события по прошествию игры раз в цикл (не начинает повышение до конца safeCycles) (по умолчанию - false)
var increaseRandomEventChanceBy = 0.0 // на сколько повышать шанс раз в цикл (по умолчанию - 5%)
var decreaseRandomEventChanceTo = 0.0 // до скольки понижать шанс после срабатывания случайного события (ИМЕЙ В ВИДУ, что оно сразу же начисляет increaseRandomEventChanceBy поверх) (по умолчанию - 10%)

var record = 25 // рекорд смертей - менять вручную!!

var nicknamecolor_died = `ff00ff` // каким цветом красить ник умершего в ивенте чела (по умолчанию - fb5c00)
var nicknamecolor_revived = `00ffff` // каким цветом красить ник умершего в ивенте чела (по умолчанию - bbd404)
