var currentList = [];
list.forEach(champion => currentList.push(champion));

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

window.onload = display;