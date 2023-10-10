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
        document.getElementById("demo").innerHTML = banan + ' Bananer';
    }
}
