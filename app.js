let banan = 0
function minFunktion() {
    banan += 1
    if(banan === 1) {
    }
    document.getElementById("demo").innerHTML = banan + ' Bananer';
}


let monkeycost = 20
let monkey = 0


function BuyMonkey() {
    if (banan >= monkeycost) {
        banan = banan - monkeycost
        document.getElementById("demo").innerHTML = banan + ' Bananer';
    }
}

function addtobananer(amount) {
    banan = banan + amount;
    document.getElementsById("demo").innerHTML = banan + 'Bananer';
}

setInterval(function BuyMonkey(){
    banan = banan + monkey*40;
    document.getElementsById("demo").innerHTML = banan + 'Bananer';
} , 1000); 
udatepersecond 


