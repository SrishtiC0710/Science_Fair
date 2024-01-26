var household;
var meat;
var beef;
var egg;
var pork;
var poultry;
var dishes;
var hand;
var wahser;
var electricity;
var water;
var insta;
var tiktok;
var netflix;
var computer; 
var work;
var transport;
var car;
var elecCar;
var bike;
var bus;
var walk;
var plane;
var gym;
var trash;
var total = 0;


const result = document.getElementById("result");


// question1
let question1 = document.getElementById("question1");
        question1.addEventListener("submit", function (e) {
            e.preventDefault();
            household = document.getElementById("houseq");
            console.log(household.value);
            // if (household = "4"){
            //     htotal += 2;
            //     console.log(htotal); 
            // }
      });

//question3
function question3() {
    var select = document.getElementsByClassName("meat");
    for (i = 0; i < select.length; i++) {
        if (select[i].checked) {
            meat = select[i].value;

            if (meat == "beef") {
                window.location.href = "beefq.html";
                // document.getElementById("question").innerHTML = htotal;
            }
            else if(meat == "egg"){
                window.location.href = "eggq.html";
            }
            else if(meat == "poultry"){
                window.location.href = "poultry.html";
            }
            else if (meat == "pork"){
                window.location.href = "porkq.html";
            }
        }
    }
}

//egg
function eggQ(){
    let eggQ = document.getElementById("eggq");
    eggQ.addEventListener("submit", function (event) {
        event.preventDefault();
        egg = document.getElementById("eggques").value;
        var eggInt = parseInt(egg) * 0.89;
        console.log(eggInt);
        total += eggInt;
    });
}

//beef
function beefQ(){
    let beefQ = document.getElementById("beefq");
    beefQ.addEventListener("submit", function (event) {
        event.preventDefault();
        beef = document.getElementById("beefques").value;
        var beefInt = parseInt(beef) * 6.61;
        console.log(beefInt);
        total += eggInt;
    });
}

//poultry
function poultryQ(){
    let poultryQ = document.getElementById("poultryq");
    poultryQ.addEventListener("submit", function (event) {
        event.preventDefault();
        poultry = document.getElementById("poultryques").value;
        var poultryInt = parseInt(poultry) * 1.26;
        console.log(poultryInt);
        total += poultryInt;
    });
}

//pork
function porkQ(){
    let porkQ = document.getElementById("porkq");
    porkQ.addEventListener("submit", function (event) {
        event.preventDefault();
        pork = document.getElementById("porkques").value;
        var porkInt = parseInt(pork) * 1.72;
        console.log(porkInt);
        total += porkInt;
    });
}


//question4
function question4() {
    var select = document.getElementsByClassName("dishes");
    for (i = 0; i < select.length; i++) {
        if (select[i].checked) {
            dishes = select[i].value;

            if (dishes == "washer") {
                window.location.href = "washerq.html";
                // document.getElementById("question").innerHTML = htotal;
            }
            else if(dishes == "hand"){
                window.location.href = "handq.html";
            }
        }
    }
}

// hand wash
function handQ(){
    let handQ = document.getElementById("handq");
    handQ.addEventListener("submit", function (event) {
        event.preventDefault();
        hand = document.getElementById("handques").value;
        var handInt = parseInt(hand) * 8;
        console.log(handInt);
        total += handInt;
    });
}

// dishwasher
function washerQ(){
    let washerQ = document.getElementById("washerq");
    washerQ.addEventListener("submit", function (event) {
        event.preventDefault();
        washer = document.getElementById("washerques").value;
        var washerInt = parseInt(washer) * 1.34;
        console.log(washerInt);
        total += washerInt;
    });
}

//electricity
function electricityQ(){
    let electricityQ = document.getElementById("electricityq");
    electricityQ.addEventListener("submit", function (event) {
        event.preventDefault();
        electricity = document.getElementById("electricityques").value;
        var electricityInt = parseInt(electricity) * 0.86;
        console.log(electricityInt);
        total += electricityInt;
    });
}

//water
function waterQ(){
    let waterQ = document.getElementById("waterq");
    waterQ.addEventListener("submit", function (event) {
        event.preventDefault();
        water = document.getElementById("waterques").value;
        var waterInt = parseInt(water) * 0.18;
        console.log(waterInt);
        total += waterInt;
    });
}

//Hair question
function question7(){
        var htotal = 0;
      
        let dryer = document.getElementById("dryer");
        let straightner = document.getElementById("straightner");
        let curler = document.getElementById("curler");
      
        if (dryer.checked) {
          htotal += 2.87    ;
        }
        if (straightner.checked) {
          htotal += 1.29;
        }
        if (curler.checked) {
          htotal += 0.1032;
        }
        console.log("Your total is " + htotal + "pounds of CO2");
        total += htotal;
}

//insta
function instaQ(){
    let instaQ = document.getElementById("instaq");
    instaQ.addEventListener("submit", function (event) {
        event.preventDefault();
        insta = document.getElementById("instaques").value;
        var instaInt = parseInt(insta) * 0.00683;
        console.log(instaInt);
        total += instaInt;
    });
}

//tiktok
function tiktokQ(){
    let tiktokQ = document.getElementById("tiktokq");
    tiktokQ.addEventListener("submit", function (event) {
        event.preventDefault();
        tiktok = document.getElementById("tiktokques").value;
        var tiktokInt = parseInt(tiktok) * 0.002833;
        console.log(tiktokInt);
        total += tiktokInt;
    });
}

//netflix
function netflixQ(){
    let netflixQ = document.getElementById("netflixq");
    netflixQ.addEventListener("submit", function (event) {
        event.preventDefault();
        netflix = document.getElementById("netflixques").value;
        var netflixInt = parseInt(netflix) * 0.002;
        console.log(netflixInt);
        total += netflixInt;
    });
}

//computer
function computerQ(){
    let computerQ = document.getElementById("computerq");
    computerQ.addEventListener("submit", function (event) {
        event.preventDefault();
        computer = document.getElementById("computerques").value;
        var computerInt = parseInt(computer) * 0.1934;
        console.log(computerInt);
        total += computerInt;
    });
}

//work
function workQ() {
    var wtotal = 0;
    var select = document.getElementsByClassName("work");
    for (i = 0; i < select.length; i++) {
        if (select[i].checked) {
            work = select[i].value;

            if (work == "home") {
                wtotal += 119.35;
            }
            else if(work == "office"){
                wtotal += 23.87;
            }
        }
    }
    console.log(wtotal);
}

//transport
function transportQ() {
    var select = document.getElementsByClassName("transport");
    for (i = 0; i < select.length; i++) {
        if (select[i].checked) {
            transport = select[i].value;

            if (transport == "car") {
                window.location.href = "car.html"
            }
            else if(transport == "elecCar"){
                window.location.href = "elecCar.html"
            }
        }
    }
}

//car
function carQ(){
    let carQ = document.getElementById("carq");
    carQ.addEventListener("submit", function (event) {
        event.preventDefault();
        car = document.getElementById("carques").value;
        var carInt = parseInt(car) * 0.77;
        console.log(carInt);
        total += carInt;
    });
}

//elecCar
function elecCarQ(){
    let elecCarQ = document.getElementById("elecCarq");
    elecCarQ.addEventListener("submit", function (event) {
        event.preventDefault();
        elecCar = document.getElementById("elecCarques").value;
        var elecCarInt = parseInt(elecCar) * 0.440925;
        console.log(elecCarInt);
        total += elecCarInt;
    });
}

//bike
function bikeQ(){
    let bikeQ = document.getElementById("bikeq");
    bikeQ.addEventListener("submit", function (event) {
        event.preventDefault();
        bike = document.getElementById("bikeques").value;
        var bikeInt = parseInt(bike) * 0.0727525;
        console.log(bikeInt);
        total += bikeInt;
    });
}

//walk
function walkQ(){
    let walkQ = document.getElementById("walkq");
    walkQ.addEventListener("submit", function (event) {
        event.preventDefault();
        walk = document.getElementById("walkques").value;
        var walkInt = parseInt(walk) * 0.13;
        console.log(walkInt);
        total += walkInt;
    });
}

//bus
function busQ(){
    let busQ = document.getElementById("busq");
    busQ.addEventListener("submit", function (event) {
        event.preventDefault();
        bus = document.getElementById("busques").value;
        var busInt = parseInt(bus) * 0.18;
        console.log(busInt);
        total += busInt;
    });
}

//plane
function planeQ(){
    let planeQ = document.getElementById("planeq");
    planeQ.addEventListener("submit", function (event) {
        event.preventDefault();
        plane = document.getElementById("planeques").value;
        var planeInt = parseInt(plane) * 198.416;
        console.log(planeInt);
        trackTotal(planeInt);
    });
}

//gym
function gymQ(){
    let gymQ = document.getElementById("gymq");
    gymQ.addEventListener("submit", function (event) {
        event.preventDefault();
        gym = document.getElementById("gymques").value;
        var gymInt = parseInt(gym) * 0.99;
        console.log(gymInt);
        trackTotal(gymInt);

    });
}

//trash
function trashQ(){
    let trashQ = document.getElementById("trashq");
    trashQ.addEventListener("submit", function (event) {
        event.preventDefault();
        trash = document.getElementById("trashques").value;
        var trashInt = parseInt(trash) * 0.8;
        console.log(trashInt);
        trackTotal(trashInt);
    });
}

function endPage(){
    console.log(total);
}

function trackTotal(calc){
    total += calc;
    result.innerHTML = total + "pounds of CO2";
}

