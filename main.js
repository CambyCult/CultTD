import Phaser from 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload () {
    this.load.image('player', './assets/player.jpg');
}

function create () {
    this.add.image(20, 20, 'player');
}

function update () {
    // Game logic goes here
}
