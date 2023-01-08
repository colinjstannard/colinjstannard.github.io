var fr = 120;
var vel = 0;
var inc = 0;
var dec = .991;
var lastTick = 18;
var back = false;
var firstSound = false;
const rolls = ["Kaiju - 1", "Found Footage - 2", "Alien / UFO - 3 ", "Bigfoot - 4 ", "On Your Watchlist - 5 ", "Animated - 6 ", "Documentary - 7 ", "Criterion Collection - 8 ", "Foreign - 9 ", "Series Feature - 10 ", "Anime - 11 ", "Junk - 12 ", "Hunk / Babe Alert - 13 ", "Pre 60's - 14 ", "Shorts - 15 ", " Black Comedy - 16 ", "Actor Feature - 17", "Director Feature - 18", "RAINBOW - 19", "Rollers Choice - 20"];
var angles = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var games = [];
var wedges = 20;
var spinAgain = ["Spin Again"];
var moon;
var canvas;
var ff = false;
var fb = true;
var playSound = false;
var firstSound = true;
var intro, victory, tick, actorfeature, alienufo, animated, anime, bigfoot, blackcomedy, criterioncollection, directorfeature, documentary, foreign, foundfootage, hunkbabealert, junk, kaiju, onyourwatchlist, presixties, rainbow, rollerschoice, seriesfeature, shorts;

function preload() { // Preloads Sounds
  soundFormats('ogg', 'mp3');
  intro = loadSound('assets/intro.mp3');
  victory = loadSound('assets/victory.mp3');
  tick = loadSound('assets/tick.mp3');
  actorfeature = loadSound('assets/actorfeature.mp3');
  alienufo = loadSound('assets/alienufo.mp3');
  animated = loadSound('assets/animated.mp3');
  anime = loadSound('assets/anime.mp3');
  bigfoot = loadSound('assets/bigfoot.mp3');
  blackcomedy = loadSound('assets/blackcomedy.mp3');
  criterioncollection = loadSound('assets/criterioncollection.mp3');
  directorfeature = loadSound('assets/directorfeature.mp3');
  documentary = loadSound('assets/documentary.mp3');
  foreign = loadSound('assets/foreign.mp3');
  foundfootage = loadSound('assets/foundfootage.mp3');
  hunkbabealert = loadSound('assets/hunkbabealert.mp3');
  junk = loadSound('assets/junk.mp3');
  kaiju = loadSound('assets/kaiju.mp3');
  onyourwatchlist = loadSound('assets/onyourwatchlist.mp3');
  presixties = loadSound('assets/presixties.mp3');
  rainbow = loadSound('assets/rainbow.mp3');
  rollerschoice = loadSound('assets/rollerschoice.mp3');
  seriesfeature = loadSound('assets/seriesfeature.mp3');
  shorts = loadSound('assets/shorts.mp3');
  moon = loadImage("reel.png");
}

function setup() {
  canvas = createCanvas(900, 900);
  canvas.parent('canvas');
  frameRate(fr);
  smooth();
  }

function draw(){
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    background(17); // Sets Background color to #111111
    translate(width/2, height/2); // Sets orgin to center
    pieChart(800, angles); // Draws Roulette
    drawCenter(); //Draws Center Circle
    getNames(); // Gets Names from HTML Forms
    drawText(); // Draws Names on Roulette
    drawPointer(); // Draws The Wheel Selector
    doPhysics(); // Calculates Physics
    doSound(); // Calculates Sound
    if(firstSound == true){
      intro.play();
      firstSound = false;
    }
    //console.log(lastTick);
}

function getNames(){
  //localStorage.setItem("alert", document.getElementById("alt").style.display);
  games = [];
  var num = [];
  var count = 0;
  //var temp = document.getElementById("gameInput");
  for(var i = 0; i < wedges; i++){ // Goes through each form. != Didn't work
    num[count] = rolls[i];
    count++;
    //console.log( rolls[i].str);
  }
  calculateGames(num, count);
}

function saveNames(){
  for(var i = 0; i < wedges; i++){
    localStorage.setItem("game" + i, games[i]);
  }
}

function loadNames(){
  document.getElementById("alt").style.display = localStorage.getItem("alert");
  for(var i = 0; i < wedges; i++){
    document.getElementById("gameInput").elements[i].value = localStorage.getItem("game" + i);
  }
}

function calculateGames(num, count){
  switch(count){
    case 20:
      for(var i = 0; i < count; i++){
        games[i] = str(num[i]);
      }
    break;
    case 19:
      for(var i = 0; i < count; i++){
        games[i] = str(num[i]);
      }
      append(games, "Spin Again");
      break;
    case 18:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
      }
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 19);
      break;
    case 17:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 19);
      break;
    case 16:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 14);
      splice(games, spinAgain, 19);
      break;
    case 15:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 11);
      splice(games, spinAgain, 15);
      splice(games, spinAgain, 19);
      break;
    case 14:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 10);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 16);
      splice(games, spinAgain, 19);
      break;
    case 13:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 1);
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 10);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 16);
      splice(games, spinAgain, 19);
      break;
    case 12:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 3);
      splice(games, spinAgain, 5);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 11);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 15);
      splice(games, spinAgain, 17);
      break;
    case 11:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 1);
      splice(games, spinAgain, 3);
      splice(games, spinAgain, 5);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 11);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 15);
      splice(games, spinAgain, 17);
      break;
    case 10:
      for(var i = 0; i < wedges; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      break;
    case 9:
      for(var i = 0; i < count*2; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 19);
      break;
    case 8:
      for(var i = 0; i < count*2; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 14);
      splice(games, spinAgain, 19);
      break;
    case 7:
      for(var i = 0; i < count*2; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 10);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 16);
      splice(games, spinAgain, 19);
      break;
    case 6:
      for(var i = 0; i < count*3; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
        splice(games, spinAgain, 9);
        splice(games, spinAgain, 19);
      break;
    case 5:
      for(var i = 0; i < wedges; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      break;
    case 4:
      for(var i = 0; i < wedges; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      break;
    case 3:
      for(var i = 0; i < count*6; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
        splice(games, spinAgain, 9);
        splice(games, spinAgain, 19);
      break;
    case 2:
      for(var i = 0; i < wedges; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      break;
    case 1:
      for(var i = 0; i < wedges; i++){
        games[i] = "";
      }
      break;
    case 0:
      for(var i = 0; i < wedges; i++){
        games[i] = "";
      }
      break;
    default:
  }
}

function doSound(){

  if(inc!= 0){

    if(lastTick <= vel && !back && ff == false){
      tick.play();
      lastTick +=18;
    }
    else if(lastTick <= vel && !back && ff == true){
      fb = true;
      ff = false;
      lastTick +=18;
    }
    else if(lastTick >= vel && back && fb == false){
      lastTick -=18
      tick.play();
    }
    else if(lastTick >= vel && back && fb == true){
      fb = false;
      ff = true;
      lastTick -=18;
    }
  }
}

function mouseDragged(){

  var file = document.getElementById("input");
  if (file.style.display !== "block") {
    var newVelocity = (atan2(mouseY-height/2,mouseX-width/2) - atan2(pmouseY-height/2,pmouseX-width/2));
    if(newVelocity < 0){
      newVelocity = 0 - (atan2(mouseY-height/2,mouseX-width/2) - atan2(pmouseY-height/2,pmouseX-width/2));
      back = true;
    } else {
      back = false;
    }
    if(newVelocity > 5)
      newVelocity = 0;
    inc = newVelocity * 25;
  }
}

function keyPressed(){
  var file = document.getElementById("input");
  playSound = true;
  if(keyCode == 32 && file.style.display !== "block") // Space
    inc = random(5,25);
}

function doPhysics(){
  if(inc > 0.03){
    if(back){
      vel -=inc;
    } else
      vel +=inc;
    inc *= dec + random(0,0.003);
    if(vel >= 360 || vel <= -360){
      vel = 0;
      lastTick = 0;
    }
  } else
    inc = 0;
}

function drawCenter(){
  image(moon,-56* 2,-56 * 2, 56*4, 56*4);
}

function drawPointer(){
  fill(160,40,40);
  triangle(420, 10, 380, 0, 420, -10);
}

function drawText(){
  var selectedChart = lastTick / 18;
  rotate(radians(vel));
  noStroke();
  textAlign(RIGHT, CENTER);
  textSize(22);
  for(var i = 0; i <wedges ; i++){
    if(i % 2 == 0){
      fill(244);
    } else {
      fill(17);
    }
     if(i == 20 - abs(selectedChart) && inc == 0){
       fill(17);
     }
    rotate(radians(18/2)); //rotates to center of wedge
    text(games[i], 375, 0);
    rotate(radians(18/2)); //rotates to end of edge
  }
  rotate(0 - radians(vel));
}

function pieChart(diameter, data) {
  var selectedChart = lastTick / 18;
  rotate(radians(vel));
  strokeWeight(3);
  stroke(244);
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    if(i % 2 == 0){
      fill(17);
    } else{
      fill(244);
    }
     if(i == 20 - abs(selectedChart) && inc == 0){
      if(playSound && firstSound){
        victory.play();
      switch(abs(selectedChart)){
        case 1:
          rollerschoice.play();
        break;
        case 2:
          rainbow.play();
        break;
        case 3:
          directorfeature.play();
        break;
        case 4:
          actorfeature.play();
        break;
        case 5:
          blackcomedy.play();
        break;
        case 6:
          shorts.play();
        break;
        case 7:
          presixties.play();
        break;
        case 8:
          hunkbabealert.play();
        break;
        case 9:
          junk.play();
        break;
        case 10:
          anime.play();
        break;
        case 11:
          seriesfeature.play();
        break;
        case 12:
          foreign.play();
        break;
        case 13:
          criterioncollection.play();
        break;
        case 14:
          documentary.play();
        break;
        case 15:
          animated.play();
        break;
        case 16:
          onyourwatchlist.play();
        break;
        case 17:
          bigfoot.play();
        break;
        case 18:
          alienufo.play();
        break;
        case 19:
          foundfootage.play();
        break;
        case 20:
          kaiju.play();
        break;
      }
      }
      playSound = false;
      if(firstSound){
        fill(255, 215, 0);
      }
      arc(0, 0, diameter + 10, diameter, lastAngle, lastAngle+radians(angles[i] * 18));
     }
    else{
    arc(0, 0, diameter, diameter, lastAngle, lastAngle+radians(angles[i] * 18));
    }
    lastAngle += radians(angles[i] * 18);
  }
  firstSound = true;
  rotate(0 - radians(vel));
}
