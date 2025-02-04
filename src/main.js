let config = {
    type: Phaser.AUTO,
    width: 960,//840
    height: 540,//525
    autoCenter: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 300
            }
        }
    },
    scene: [Menu, Tutorial, Level1]
};

let game = new Phaser.Game(config);

let keyA, keyS, keyD, keyW, keySPACE, keyM;