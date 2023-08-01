const scene = {
    preload: function () {
        this.load.bitmapFont("arcade", "font/arcade.png", "font/arcade.xml"); //Load arcade font
        this.load.spritesheet('tiles', 'colored.png', { frameWidth: 16, frameHeight: 16, spacing: 1 }) //Load tilemap
    },
    create: function () {
        this.helloText = this.add.bitmapText(400, 300, "arcade", "MOVEMENT TEST").setOrigin(0.5);
        this.cursors = this.input.keyboard.createCursorKeys();
    },
    update: function () {
    }
}

const config = {
    type: Phaser.AUTO,
    width: 80*16,
    height: 50*16,
    backgroundColor: "#123",
    parent: "game",
    pixelArt: true,
    scene: scene,
    zoom: 2,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }
        }
    }
};

const game = new Phaser.Game(config);