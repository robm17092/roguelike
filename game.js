const scene = {
    preload: function () {
        this.load.bitmapFont("arcade", "font/arcade.png", "font/arcade.xml"); //Load arcade font
        this.load.spritesheet('tiles', 'colored.png', { frameWidth: 16, frameHeight: 16, spacing: 1 }) //Load tilemap
    },
    create: function () {
        this.helloText = this.add.bitmapText(400, 300, "arcade", "MOVEMENT TEST").setOrigin(0.5);
        this.cursors = this.input.keyboard.createCursorKeys();

        let level = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 27, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]

        //Define gameobjects
        const wall = 554
        const floor = 0
        const enemy = 27
        level = level.map(r => r.map(t => t == 1 ? wall : floor)) //Convert 1 to 554 

        //Display tilemap
        const tileSize = 16
        const config = {
            data: level,
            tileWidth: tileSize,
            tileHeight: tileSize,
        }
        const map = this.make.tilemap(config)
        const tileset = map.addTilesetImage('tiles', 'tiles', tileSize, tileSize, 0, 1)
        const ground = map.createStaticLayer(0, tileset, 0, 0)        
    },
    update: function () {
        //Movement controls for sprite
        if (this.cursors.left.isDown) {
            this.helloText.x -= 10;
        }
        if (this.cursors.right.isDown) {
            this.helloText.x += 10;
        }
        if (this.cursors.up.isDown) {
            this.helloText.y -= 10;
        }
        if (this.cursors.down.isDown) {
            this.helloText.y += 10;
        }

        //Movement bounding
        if(this.helloText.x > 600) {
            this.helloText.x -= 200
        }
        if(this.helloText.x < 100) {
            this.helloText.x += 200
        }
        if(this.helloText.y < 0) {
            this.helloText.y += 50
        }
        if(this.helloText.y > 600) {
            this.helloText.y -= 50
        }
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