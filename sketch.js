var database;
var Gamestate= 0, PlayerCount;
var form, game, player;
var bg, bgimg

function preload(){
    bg= loadImage("background.png")
}

function setup(){
    database= firebase.database();
    createCanvas(windowWidth,windowHeight);
    game= new Game();
    game.getState();
    game.start();

    bgimg= bg
}

function draw(){
    background(bgimg);   
}




