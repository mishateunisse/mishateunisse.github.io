var grey = '#9198a3';
var black = '#000';

var loadState = {
	preload: function(){
		var loadingLabel = game.add.text(80,150, 'Loading.... ', {font: '30px Courier', fill: '#ffffff'});
		game.load.image('startButton', 'assets/start.png');
		game.load.image('pikachu', 'assets/pikachu.png');
		game.load.image('bulbasaur', 'assets/bulbasaur.png');
		game.load.image('mew', 'assets/mew.png');
		game.load.image('aromatisse', 'assets/aromatisse.png');
		game.load.image('snivy', 'assets/snivy.png');
		game.load.image('player', 'assets/player.png');
		game.load.image('background', 'assets/background.png');
		game.load.image('ball', 'assets/pokeball.png');
		game.load.spritesheet('brickRed', 'assets/red.jpg');
		game.load.audio('pokemonTheme', 'assets/sounds/PokemonTheme.mp3');
	},

	create: function(){
		game.state.start('menu');
	}
};

