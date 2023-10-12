let banan = 0;
let havemonkey = false;
let numberofmonkeys = 0;
let amontofbananas = 0

function minFunktion() {
    banan += 1
    if (havemonkey){
        banan += numberofmonkeys 

    }
    if(banan === 1)
    {
    document.getElementById("demo").innerHTML = banan + ' Banan';  
    }
    else {
    document.getElementById("demo").innerHTML = banan + ' Bananer';}
}

let monkeycost = 10;
let monkey = 0;
let amountofmonkeys = 0;


function BuyMonkey() {
    if (banan >= monkeycost) {
        banan = banan - monkeycost
        havemonkey = true 
        numberofmonkeys++
        monkeycost *= 2
        amountofmonkeys = numberofmonkeys
        document.getElementById("demo").innerHTML = banan + ' Bananer';
        document.getElementById("abe pris").innerHTML = 'Amount of bananas for the next monkey upgrade: ' + monkeycost;
        document.getElementById("antalaber").innerHTML = 'You currently have so many monkeys: ' + amountofmonkeys 
    }else{
        alert('You are running low on bananas, get more to and upgrade me again.')
    }
}

let Farmercost = 80
let bananIsekundet = 0
let havefarmer = false
let numbreoffarmers = 0
let amountoffarmers = 0

function bananFarmer() {
    if(banan >= Farmercost) {
        banan = banan - Farmercost;
        bananIsekundet += 1
        havefarmer = true
        numbreoffarmers++ 
        amountoffarmers = numbreoffarmers
        Farmercost *= 2
        document.getElementById("demo").innerHTML = banan + ' Bananer';
        document.getElementById("Farmer Pris").innerHTML = 'Amount of bananas for the next Farmer upgrade: ' + Farmercost;
        document.getElementById("antalfarmer").innerHTML = 'You currently have so many farmers: ' + amountoffarmers;
    }else{
        alert('You are low on banana, I am not going to work for free')
    }
}

setInterval(function(){
    banan += bananIsekundet
    banan1 += bananIsekundet
    document.getElementById("demo").innerHTML = banan + ' Bananer';
}, 1000)


let banan1 = 0

function minFunktion2() {
    banan1 += 1;
    if (BuyMonkey && bananFarmer) {
        banan1 += amountofmonkeys;
        banan1 += amountoffarmers;
    }
}

let highs = 0

function highscore() {
    highs = banan1 
    document.getElementById("highscore").innerHTML = 'Total amount of bananas ever collected:' + highs;
}

