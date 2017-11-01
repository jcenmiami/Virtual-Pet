var HomeState = {

    init: function(message){
        this.message = message;

    },

    create: function(){
        var titleText;

        var background = this.game.add.sprite(0, 0, 'backyard');
        background.inputEnabled = true;

        background.events.onInputDown.add(function(){
            this.state.start('GameState');
        }, this);

        var style = {font: '35px Arial', fill: '#fff', boundsAlignH: 'center', boundsAlignV: 'middle'};
        titleText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 100, 'Touch Screen \nto Start', style);
        //this.game.add.text(30, this.game.world.centerY + 200, 'Touch Screen \nto Start', style);
        titleText.anchor.setTo(0.5);
        titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        if(this.message) {
            this.game.add.text(60, this.game.world.centerY, this.message, style);
        }
  },
};