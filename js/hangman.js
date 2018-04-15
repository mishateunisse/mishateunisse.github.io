var testWord = "tessdsdt";
var wordLength = testWord.length;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


var hangmanState = {
	create: function(){
		// var loadingLabel = game.add.text(80,150, 'Loading.... ', {font: '30px Courier', fill: '#ffffff'});
		game.stage.backgroundColor = "#9198a3";

		

		//drawing the alphabet
		var xLoc = 20;
		var yLoc = 400
		var i;
		for (i = 0; i < alphabet.length; i++){
			
			game.add.text(xLoc,yLoc, alphabet[i]);

			xLoc += 62;
			if (i == 12){
				yLoc = 500;
				xLoc = 20;
			}
		}





	}
};


