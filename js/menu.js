var start

var menuState = {
	create: function(){
		//var nameLabel = game.add.text(80, 80, 'ddds', {font: '50px Arial', fill: '#ffffff'});
		start = game.add.button(400,300,'startButton', startHangman);
		start.scale.set(0.2);
		start.anchor.setTo(0.5);

		game.stage.backgroundColor = "#40E0D0";
	},


};

function startHangman(){
	game.state.start('breakout');
}