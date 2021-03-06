export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');

        this.loadText;
    }

    preload ()
    {
				console.log("alex preload");
        this.loadText = this.add.text(400, 360, 'Loading ...', { fontFamily: 'Arial', fontSize: 64, color: '#e3f2ed' });

        this.loadText.setOrigin(0.5);
        this.loadText.setStroke('#203c5b', 6);
        this.loadText.setShadow(2, 2, '#2d2d2d', 4, true, false);

        this.load.setPath('assets/');
        this.load.image([ 'background-emoji', 'logo-emoji' ]);
        this.load.atlas('emojis', 'emojis.png', 'emojis.json');

        //  Audio ...
        this.load.setPath('assets/sounds/');

        this.load.audio('music', [ 'sound.mp3' ]);
        this.load.audio('countdown', [ 'sound.mp3' ]);
        this.load.audio('match', [ 'sound.mp3' ]);
    }

    create ()
    {
        if (this.sound.locked)
        {
            this.loadText.setText('Click to Start');

            this.input.once('pointerdown', () => {

                this.scene.start('MainMenu');

            });
        }
        else
        {
            this.scene.start('MainMenu');
        }
    }
}
