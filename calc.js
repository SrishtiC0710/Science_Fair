var meat;
var egg;
var beef;
var poultry;
var pork;
var cheese;
var milk;
var rice;
var legume;
var carrot;
var potato;
var dishes;
var hand;
var washer;
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
var checkCar = false;
var checkDish = false;
var bike;
var bus;
var walk;
var plane;
var gym;
var trash;
var total = 0;

const result = document.getElementById("result");

//question3
function question3() {
  var select = document.getElementsByClassName("meat");
  for (i = 0; i < select.length; i++) {
    if (select[i].checked) {
      meat = select[i].value;

      if (meat == "beef") {
        window.location.href = "beefq.html";
        // document.getElementById("question").innerHTML = htotal;
      } else if (meat == "egg") {
        window.location.href = "eggq.html";
      } else if (meat == "poultry") {
        window.location.href = "poultry.html";
      } else if (meat == "pork") {
        window.location.href = "porkq.html";
      }
    }
  }
  var selectedMeat;
  if (selectedMeat == null) {
    // If no transport is selected, display an error message
    alert("Please enter a response before submitting.");
  }
}

//egg
function eggQ() {
  let eggQ = document.getElementById("eggq");
  eggQ.addEventListener("submit", function (event) {
    event.preventDefault();
    egg = document.getElementById("eggques").value;
    var eggInt = parseInt(egg) * 0.89;
    sessionStorage.setItem("eggNum", eggInt);
  });
  var eggInput = document.getElementById("eggques").value;
  if (eggInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//beef
function beefQ() {
  let beefQ = document.getElementById("beefq");
  beefQ.addEventListener("submit", function (event) {
    event.preventDefault();
    beef = document.getElementById("beefques").value;
    var beefInt = parseInt(beef) * 6.61;
    sessionStorage.setItem("beefNum", beefInt);
  });
  var beefInput = document.getElementById("beefques").value;
  if (beefInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//poultry
function poultryQ() {
  let poultryQ = document.getElementById("poultryq");
  poultryQ.addEventListener("submit", function (event) {
    event.preventDefault();
    poultry = document.getElementById("poultryques").value;
    var poultryInt = parseInt(poultry) * 1.26;
    sessionStorage.setItem("poultryNum", poultryInt);
  });
  var poultryInput = document.getElementById("poultryques").value;
  if (poultryInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//pork
function porkQ() {
  let porkQ = document.getElementById("porkq");
  porkQ.addEventListener("submit", function (event) {
    event.preventDefault();
    pork = document.getElementById("porkques").value;
    var porkInt = parseInt(pork) * 1.72;
    sessionStorage.setItem("porkNum", porkInt);
  });
  var porkInput = document.getElementById("porkques").value;
  if (porkInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//cheese
function cheeseQ() {
  let cheeseQ = document.getElementById("cheeseq");
  cheeseQ.addEventListener("submit", function (event) {
    event.preventDefault();
    cheese = document.getElementById("cheeseques").value;
    var cheeseInt = parseInt(cheese) * 2.45;
    sessionStorage.setItem("cheeseNum", cheeseInt);
  });
  var cheeseInput = document.getElementById("cheeseques").value;
  if (cheeseInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//milk
function milkQ() {
  let milkQ = document.getElementById("milkq");
  milkQ.addEventListener("submit", function (event) {
    event.preventDefault();
    milk = document.getElementById("milkques").value;
    var milkInt = parseInt(milk) * 0.72;
    sessionStorage.setItem("milkNum", milkInt);
  });
  var milkInput = document.getElementById("milkques").value;
  if (milkInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//Rice
function riceQ() {
  let riceQ = document.getElementById("riceq");
  riceQ.addEventListener("submit", function (event) {
    event.preventDefault();
    rice = document.getElementById("riceques").value;
    var riceInt = parseInt(rice) * 0.16;
    sessionStorage.setItem("riceNum", riceInt);
  });
  var riceInput = document.getElementById("riceques").value;
  if (riceInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//Legume
function legumeQ() {
  let legumeQ = document.getElementById("legumeq");
  legumeQ.addEventListener("submit", function (event) {
    event.preventDefault();
    legume = document.getElementById("legumeques").value;
    var legumeInt = parseInt(legume) * 0.11;
    sessionStorage.setItem("legumeNum", legumeInt);
  });
  var legumeInput = document.getElementById("legumeques").value;
  if (legumeInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//Carrot
function carrotQ() {
  let carrotQ = document.getElementById("carrotq");
  carrotQ.addEventListener("submit", function (event) {
    event.preventDefault();
    carrot = document.getElementById("carrotques").value;
    var carrotInt = parseInt(carrot) * 0.07;
    sessionStorage.setItem("carrotNum", carrotInt);
  });
  var carrotInput = document.getElementById("carrotques").value;
  if (carrotInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//Potato
function potatoQ() {
  let potatoQ = document.getElementById("potatoq");
  potatoQ.addEventListener("submit", function (event) {
    event.preventDefault();
    potato = document.getElementById("potatoques").value;
    var potatoInt = parseInt(potato) * 0.03;
    sessionStorage.setItem("potatoNum", potatoInt);
  });
  var potatoInput = document.getElementById("potatoques").value;
  if (potatoInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//question4
function question4() {
  var select = document.getElementsByClassName("dishes");
  for (i = 0; i < select.length; i++) {
    if (select[i].checked) {
      dishes = select[i].value;

      if (dishes == "washer") {
        checkDish = true;
        window.location.href = "washerq.html";
      } else if (dishes == "hand") {
        checkDish = true;
        window.location.href = "handq.html";
      }
    }
  }
  // var select = document.getElementsByClassName("dishes");
  // var selectedDishes;
  // if (selectedDishes == null) {
  //     alert("Please enter a response before submitting.");
  // }
}

// hand wash
function handQ() {
  let handQ = document.getElementById("handq");
  handQ.addEventListener("submit", function (event) {
    event.preventDefault();
    hand = document.getElementById("handques").value;
    var handInt = parseInt(hand) * 8.0;
    sessionStorage.setItem("handNum", handInt);
  });
  var handInput = document.getElementById("handques").value;
  if (handInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

// dishwasher
function washerQ() {
  let washerQ = document.getElementById("washerq");
  washerQ.addEventListener("submit", function (event) {
    event.preventDefault();
    washer = document.getElementById("washerques").value;
    var washerInt = parseInt(washer) * 1.34;
    sessionStorage.setItem("washerNum", washerInt);
  });
  var washerInput = document.getElementById("washerques").value;
  if (washerInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//electricity
function electricityQ() {
  let electricityQ = document.getElementById("electricityq");
  electricityQ.addEventListener("submit", function (event) {
    event.preventDefault();
    electricity = document.getElementById("electricityques").value;
    var electricityInt = parseInt(electricity) * 0.86;
    sessionStorage.setItem("electricityNum", electricityInt);
  });
  var electricityInput = document.getElementById("electricityques").value;
  if (electricityInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//water
function waterQ() {
  let waterQ = document.getElementById("waterq");
  waterQ.addEventListener("submit", function (event) {
    event.preventDefault();
    water = document.getElementById("waterques").value;
    var waterInt = parseInt(water) * 0.18;
    sessionStorage.setItem("waterNum", waterInt);
  });
  var waterInput = document.getElementById("waterques").value;
  if (waterInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//Hair question
function question7() {
  var hairInt = 0;

  let dryer = document.getElementById("dryer");
  let straightner = document.getElementById("straightner");
  let curler = document.getElementById("curler");

  if (dryer.checked) {
    hairInt += 2.87;
  }
  if (straightner.checked) {
    hairInt += 1.29;
  }
  if (curler.checked) {
    hairInt += 0.1032;
  }
  sessionStorage.setItem("hairNum", hairInt);
}

//insta
function instaQ() {
  let instaQ = document.getElementById("instaq");
  instaQ.addEventListener("submit", function (event) {
    event.preventDefault();
    insta = document.getElementById("instaques").value;
    var instaInt = parseInt(insta) * 0.00683;
    sessionStorage.setItem("instaNum", instaInt);
  });
  var instaInput = document.getElementById("instaques").value;
  if (instaInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//tiktok
function tiktokQ() {
  let tiktokQ = document.getElementById("tiktokq");
  tiktokQ.addEventListener("submit", function (event) {
    event.preventDefault();
    tiktok = document.getElementById("tiktokques").value;
    var tiktokInt = parseInt(tiktok) * 0.002833;
    sessionStorage.setItem("tiktokNum", tiktokInt);
  });
  var tiktokInput = document.getElementById("tiktokques").value;
  if (tiktokInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//netflix
function netflixQ() {
  let netflixQ = document.getElementById("netflixq");
  netflixQ.addEventListener("submit", function (event) {
    event.preventDefault();
    netflix = document.getElementById("netflixques").value;
    var netflixInt = parseInt(netflix) * 0.002;
    sessionStorage.setItem("netflixNum", netflixInt);
  });
  var netflixInput = document.getElementById("netflixques").value;
  if (netflixInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//computer
function computerQ() {
  let computerQ = document.getElementById("computerq");
  computerQ.addEventListener("submit", function (event) {
    event.preventDefault();
    computer = document.getElementById("computerques").value;
    var computerInt = parseInt(computer) * 0.1934;
    sessionStorage.setItem("computerNum", computerInt);
  });
  var computerInput = document.getElementById("computerques").value;
  if (computerInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//work
function workQ() {
  var workInt = 0;
  var select = document.getElementsByClassName("work");
  for (i = 0; i < select.length; i++) {
    if (select[i].checked) {
      work = select[i].value;

      if (work == "home") {
        workInt += 119.35;
      } else if (work == "office") {
        workInt += 23.87;
      }
    }
  }
  sessionStorage.setItem("workNum", workInt);

  // var selectedWork;
  // if (selectedWork !== null) {
  //     alert("Please enter a response before submitting.");
  // }
}

//transport
function transportQ() {
  var select = document.getElementsByClassName("transport");
  for (i = 0; i < select.length; i++) {
    if (select[i].checked) {
      transport = select[i].value;

      if (transport == "car") {
        checkCar = true;
        window.location.href = "car.html";
      } else if (transport == "elecCar") {
        checkCar = false;
        window.location.href = "elecCar.html";
      }
    }
  }
  // var selectedTransport;
  // if (selectedTransport == null) {
  //     alert("Please enter a response before submitting.");
  // }
}

//car
function carQ() {
  let carQ = document.getElementById("carq");
  carQ.addEventListener("submit", function (event) {
    event.preventDefault();
    car = document.getElementById("carques").value;
    var carInt = parseInt(car) * 0.77;
    sessionStorage.setItem("carNum", carInt);
  });
  var carInput = document.getElementById("carques").value;
  if (carInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//elecCar
function elecCarQ() {
  let elecCarQ = document.getElementById("elecCarq");
  elecCarQ.addEventListener("submit", function (event) {
    event.preventDefault();
    elecCar = document.getElementById("elecCarques").value;
    var elecCarInt = parseInt(elecCar) * 0.440925;
    console.log(elecCarInt);
    sessionStorage.setItem("elecCarNum", elecCarInt);
  });
  var elecCarInput = document.getElementById("elecCarques").value;
  if (elecCarInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

function calcCar() {
  if (checkCar) {
    carQ();
  } else if (!checkCar) {
    elecCarQ();
  }
}

//bike

function bikeQ() {
  let bikeQ = document.getElementById("bikeq");
  bikeQ.addEventListener("submit", function (event) {
    event.preventDefault();
    bike = document.getElementById("bikeques").value;
    var bikeInt = parseInt(bike) * 0.0727525;
    sessionStorage.setItem("bikeNum", bikeInt);
  });
  var bikeInput = document.getElementById("bikeques").value;
  if (bikeInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//walk
function walkQ() {
  let walkQ = document.getElementById("walkq");
  walkQ.addEventListener("submit", function (event) {
    event.preventDefault();
    walk = document.getElementById("walkques").value;
    var walkInt = parseInt(walk) * 0.13;
    sessionStorage.setItem("walkNum", walkInt);
  });
  var walkInput = document.getElementById("walkques").value;
  if (walkInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//bus
function busQ() {
  let busQ = document.getElementById("busq");
  busQ.addEventListener("submit", function (event) {
    event.preventDefault();
    bus = document.getElementById("busques").value;
    var busInt = parseInt(bus) * 0.18;
    sessionStorage.setItem("busNum", busInt);
  });
  var busInput = document.getElementById("busques").value;
  if (busInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//plane
function planeQ() {
  let planeQ = document.getElementById("planeq");
  planeQ.addEventListener("submit", function (event) {
    event.preventDefault();
    plane = document.getElementById("planeques").value;
    var planeInt = parseInt(plane) * 198.416;
    sessionStorage.setItem("planeNum", planeInt);
  });
  var planeInput = document.getElementById("planeques").value;
  if (planeInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//gym
function gymQ() {
  let gymQ = document.getElementById("gymq");
  gymQ.addEventListener("submit", function (event) {
    event.preventDefault();
    gym = document.getElementById("gymques").value;
    var gymInt = parseInt(gym) * 0.99;
    sessionStorage.setItem("gymNum", gymInt);
  });
  var gymInput = document.getElementById("gymques").value;
  if (gymInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

//trash
function trashQ() {
  let trashQ = document.getElementById("trashq");
  trashQ.addEventListener("submit", function (event) {
    event.preventDefault();
    trash = document.getElementById("trashques").value;
    var trashInt = parseInt(trash) * 0.8;
    sessionStorage.setItem("trashNum", trashInt);
  });
  var trashInput = document.getElementById("trashques").value;
  if (trashInput.trim() == "") {
    alert("Please enter a response before submitting.");
  }
}

function trackTotal() {
  let eggNum = sessionStorage.getItem("eggNum");
  let beefNum = sessionStorage.getItem("beefNum");
  let poultryNum = sessionStorage.getItem("poultryNum");
  let porkNum = sessionStorage.getItem("porkNum");
  let cheeseNum = sessionStorage.getItem("cheeseNum");
  let milkNum = sessionStorage.getItem("milkNum");
  let riceNum = sessionStorage.getItem("riceNum");
  let legumeNum = sessionStorage.getItem("legumeNum");
  let carrotNum = sessionStorage.getItem("carrotNum");
  let potatoNum = sessionStorage.getItem("potatoNum");
  let washerNum = 0;
  let electricityNum = sessionStorage.getItem("electricityNum");
  let waterNum = sessionStorage.getItem("waterNum");
  let hairNum = sessionStorage.getItem("hairNum");
  let instaNum = sessionStorage.getItem("instaNum");
  let tiktokNum = sessionStorage.getItem("tiktokNum");
  let netflixNum = sessionStorage.getItem("netflixNum");
  let computerNum = sessionStorage.getItem("computerNum");
  let workNum = sessionStorage.getItem("workNum");
  let carNum = 0;
  let bikeNum = sessionStorage.getItem("bikeNum");
  let walkNum = sessionStorage.getItem("walkNum");
  let busNum = sessionStorage.getItem("busNum");
  let planeNum = sessionStorage.getItem("planeNum");
  let gymNum = sessionStorage.getItem("gymNum");
  let trashNum = sessionStorage.getItem("trashNum");

  if (checkCar) {
    carNum = sessionStorage.getItem("carNum");
    console.log(carNum);
  } else if (!checkCar) {
    carNum = sessionStorage.getItem("elecCarNum");
    carNum = 0;
  }

  if (checkDish) {
    washerNum = sessionStorage.getItem("handNum");
  } else if (!checkDish) {
    washerNum = sessionStorage.getItem("washerNum");
  }
  //changes
  var elements = [
    eggNum,
    beefNum,
    poultryNum,
    porkNum,
    cheeseNum,
    milkNum,
    riceNum,
    legumeNum,
    carrotNum,
    potatoNum,
    washerNum,
    electricityNum,
    waterNum,
    hairNum,
    instaNum,
    tiktokNum,
    netflixNum,
    computerNum,
    workNum,
    carNum,
    bikeNum,
    walkNum,
    busNum,
    planeNum,
    gymNum,
    trashNum,
  ];

  for (i = 0; i < elements.length; i++) {
    total += parseFloat(elements[i]);
  }

  for (i = 0; i < elements.length; i++) {
    var elementValue = parseFloat(elements[i]);
    console.log(`Value for element ${i}: ${elementValue}`);

    if (!isNaN(elementValue)) {
      total += elementValue;
    } else {
      console.error(`Invalid value for element ${i}: ${elements[i]}`);
    }
  }
  fetch("", {
    method: "POST",
    body: JSON.stringify({
      total: total,
      element: elements,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  console.log("Total:", total);
  return total;
}

function endPage() {
  var finalTotal = trackTotal();
  result.innerHTML = finalTotal.toFixed(2) + " lbs of CO2 Annually!";
  var treeTotal = finalTotal / 48;
  treeR.innerHTML =
    "If everyone lived like you, we would need to plant <br>" +
    treeTotal.toFixed(2) +
    " <br> Trees to absorb how much Carbon you emit in a year.";
}
