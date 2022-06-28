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
        btn.style.background = "rgba(0, 0, 0, 0.075)";
        btn.style.color = "rgba(255, 255, 255, 0.75)";
        }
}

function flipReg(drpBtnId) {
    flipRegCss(drpBtnId);
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
        btn.style.background = "rgba(0, 0, 0, 0.075)";
        btn.style.color = "rgba(255, 255, 255, 0.75)";
        drpBtn.style.background = "rgba(0, 0, 0, 0)";
        drpBtn.style.color = "rgba(0, 0, 0, 0.5)";
        buttonRegionMap.set(drpBtnId, false);
    }
}

function display() {
    var string = "";
    currentList.forEach(champion => string = string + champion.name + "\n");
    document.getElementById("1").textContent = string;
}

function CC() {
    currentList = [];
    list.forEach(champion => {if(champion.cc) {
        currentList.push(champion);
    }});
    var string = "";
    currentList.forEach(champion => string = string + champion.name + "\n");
    document.getElementById("1").textContent = string;
}

setup();