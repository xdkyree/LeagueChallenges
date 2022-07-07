function setup() {
    currentList = [];
    list.forEach(champion => currentList.push(champion));
    
    buttonMap = new Map();
    challengeNames = ['aoeUlt', 'poke', 'global', 'shield', 'hook', 'cc', 'trap', 'revive', 'stealth', 'pet', 'terrain', 'region'];
    challengeNames.forEach(challenge => {buttonMap.set(challenge, false);})

    buttonRegionMap = new Map();
    regionNames = ['bandleCity', 'bilgewater', 'demacia', 'freljord', 'ionia', 'ixtal', 'noxus', 'piltover', 'shadowIsles', 'shurima', 'targon', 'void', 'zaun'];
    regionNames.forEach(region => {buttonRegionMap.set(region, false);})
}

function flip(btnId) {
    flipCss(btnId);
    filter();
    refresh();
}

function flipCss(btnId) {
    var btn = document.getElementById(btnId);
    var clicked = buttonMap.get(btnId);
    buttonMap.set(btnId, !clicked);
    if (!clicked) {
        var gradient1;
        var gradient2;
        switch(btnId) {
            case 'aoeUlt': 
                gradient1 = "#2BC0E4";
                gradient2 = "#EAECC6";
                break;
                
            case 'poke': 
                gradient1 = "#EB3349";
                gradient2 = "#F45C43";
                break;

            case 'global': 
                gradient1 = "#04de5b";
                gradient2 = "#04c2d4";
                break;

            case 'shield': 
                gradient1 = "#1F1C2C";
                gradient2 = "#928DAB";
                break;

            case 'hook': 
                gradient1 = "#603813";
                gradient2 = "#b29f94";
                break;

            case 'cc': 
                gradient1 = "#5C258D";
                gradient2 = "#4389A2";
                break;

            case 'trap': 
                gradient1 = "#16A085";
                gradient2 = "#F4D03F";
                break;

            case 'revive': 
                gradient1 = "#E1F5C4";
                gradient2 = "#5FC3E4";
                break;

            case 'stealth': 
                gradient1 = "#525252";
                gradient2 = "#1c1c1c";
                break;

            case 'pet': 
                gradient1 = "#DD5E89";
                gradient2 = "#F7BB97";
                break;

            case 'terrain': 
                gradient1 = "#134E5E";
                gradient2 = "#71B280";
                break;
        }
        
        btn.style.background = "linear-gradient(to bottom right, " + gradient1 + ", " + gradient2;
        btn.style.color = "white";
    }
    else {
        btn.style.background = "";
        btn.style.color = "";
        }
}

function flipReg(drpBtnId) {
    flipRegCss(drpBtnId);
    filter();
    refresh();
}

function flipRegCss(drpBtnId) {
    var btn = document.getElementById('region');
    var drpBtn = document.getElementById(drpBtnId);
    var clicked = buttonRegionMap.get(drpBtnId);
    buttonMap.set('region', !clicked);
    if (!clicked) {
        buttonRegionMap.forEach((value, key) => {
            if (value) {
                buttonRegionMap.set(key, false);
                var drpBtnPrev = document.getElementById(key);
                drpBtnPrev.style.background = "rgba(0, 0, 0, 0)";
                drpBtnPrev.style.color = "rgba(0, 0, 0, 0.5)";
            }
        }
        )
        btn.style.background = "linear-gradient(to bottom right, #cc2b5e, #753a88";
        btn.style.color = "white";
        drpBtn.style.background = "linear-gradient(to bottom right, #cc2b5e, #753a88";
        drpBtn.style.color = "white";
        buttonRegionMap.set(drpBtnId, true);
    }
    else {
        btn.style.background = "";
        btn.style.color = "";
        drpBtn.style.background = "";
        drpBtn.style.color = "";
        buttonRegionMap.set(drpBtnId, false);
    }
}

function refresh() {
    deleteAll();
    var listElement = document.getElementById("list");
    currentList.forEach(champion => {
        createChampionCard(champion, listElement);
    });
}

function createChampionCard(champion, listElement) {

    var template = document.createElement('button');
    template.classList.add('champion');
    listElement.appendChild(template);

    var crop = document.createElement('div');
    crop.classList.add('crop');
    template.appendChild(crop);

    var image = document.createElement('img');
    image.setAttribute('src', champion.iconPath);
    crop.appendChild(image);

    var name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = '\u2001' + champion.name;
    template.appendChild(name);

    var text = document.createElement('div');
    text.classList.add('text');

    if (champion.aoeUlt) {
        text.innerHTML += '\u2001 \u2001 \u2001AOE Ult';
    }
    if (champion.poke) {
        text.innerHTML += '\u2001 \u2001 \u2001Poke';
    }
    if (champion.global) {
        text.innerHTML += '\u2001 \u2001 \u2001Global';
    }
    if (champion.shield) {
        text.innerHTML += '\u2001 \u2001 \u2001Shield';
    }
    if (champion.displacement) {
        text.innerHTML += '\u2001 \u2001 \u2001Hook';
    }
    if (champion.cc) {
        text.innerHTML += '\u2001 \u2001 \u2001CC';
    }
    if (champion.trap) {
        text.innerHTML += '\u2001 \u2001 \u2001Trap';
    }
    if (champion.revive) {
        text.innerHTML += '\u2001 \u2001 \u2001Revive';
    }
    if (champion.stealth) {
        text.innerHTML += '\u2001 \u2001 \u2001Stealth';
    }
    if (champion.pet) {
        text.innerHTML += '\u2001 \u2001 \u2001Pet';
    }
    if (champion.terrain) {
        text.innerHTML += '\u2001 \u2001 \u2001Terrain';
    }
    text.innerHTML += '\u2001 \u2001 \u2001' + champion.region;
    template.appendChild(text);
}

function filter() {
    currentList = [...list];
    buttonMap.forEach((value, key) => {
        if (value) {
            currentList.forEach(champion => {
                var code = 'champion.' + key;
                var boolean = eval(code);
                if (!boolean) {
                    currentList = currentList.filter(word => word.name != champion.name);
                }
            })
        }
    })
    buttonRegionMap.forEach((value, key) => {
        if (value) {
            currentList.forEach(champion => {
                currentList = currentList.filter(word => word.region == key);
            })
        }
    })
}

function deleteAll() {
    var e = document.getElementById('list');
    var first = e.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    }
}

setup();
refresh();