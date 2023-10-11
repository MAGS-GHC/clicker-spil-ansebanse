let banan = 0;
let havemonkey = false;
let numberofmonkeys = 0

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

let monkeycost = 10
let monkey = 0


function BuyMonkey() {
    if (banan >= monkeycost) {
        banan = banan - monkeycost
        havemonkey = true 
        numberofmonkeys++
        monkeycost *= 2
        document.getElementById("demo").innerHTML = banan + ' Bananer';
        document.getElementById("abe pris").innerHTML = 'Price of monkey: ' + monkeycost;
    }else{
        alert('You are running low on bananas, get more to and upgrade me again.')
    }
}

let Samler = 80
let bananIsekundet = 0

function bananSamler() {
    if(banan >= Samler)
    banan = banan - Samler;
    bananIsekundet 
}

setInterval(function(){
    banan += bananIsekundet
    document.getElementById("demo").innerHTML = banan + ' Bananer';
}, 1000)
