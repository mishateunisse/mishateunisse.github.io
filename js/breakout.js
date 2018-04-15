var testWord = "tessdsdt";
var wordLength = testWord.length;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var bricks;
var player;
var ball;
var brick;
var pokemonMap;
var pokemon = ["pikachu", "bulbasaur", "aromatisse", "snivy"];
var backgroundMusic;
var alivePokemon = 0;
var scoreText;
var score = 0;
var ballOnPlayer = true;


var breakoutState = {
	create: function(){
		// var loadingLabel = game.add.text(80,150, 'Loading.... ', {font: '30px Courier', fill: '#ffffff'});
		// game.stage.backgroundColor = black;
		pokemonMap = game.add.tileSprite(0, 0, 1024, 1024, "background");
		game.physics.arcade.checkCollision.down = false;

		//Music
		backgroundMusic = game.add.audio('pokemonTheme', 1, true);
		backgroundMusic.play();

		//score
		scoreText = game.add.text(32, 550, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
		

		//Bricks
		bricks = game.add.group();
		bricks.enableBody = true;
		bricks.physicsBodyType = Phaser.Physics.ARCADE;
		bricks.scale.set(1);


		// brick = bricks.create(500,200,'pikachu');
		//Pikachus upper x
		// var xLoc = 41;
		var yLoc = -80;

		for (var y = 0; y < 4; y++){
			var xLoc = 86;
			yLoc += 90;
			for (var i = 0; i < 6; i++){
				brick = bricks.create(xLoc,yLoc,pokemon[y]);
				xLoc += 100;
				brick.body.bounce.set(1);
				brick.body.immovable = true;
			}
		}




		
		//Bulbasaur
		// var xLocBulba = 41
		// 	for (var i = 0; i < 6; i++){
		// 		brick = bricks.create(xLocBulba,130,'bulbasaur');
		// 		xLocBulba += 200;
		// 		brick.body.bounce.set(1);
		// 		brick.body.immovable = true;
		// 	}



		//player
		player = game.add.sprite(game.world.centerX, 550, 'player');
		player.anchor.setTo(0.5, 0.5);
		game.physics.enable(player, Phaser.Physics.ARCADE);

		player.body.collideWorldBounds = true;
    	player.body.bounce.set(1);
    	player.body.immovable = true;

    	//ball
    	ball = game.add.sprite(game.world.centerX, 527, 'ball');
    	ball.anchor.set(0.5);
    	//ball.scale.set(0.2);
    	ball.checkWorldBounds = true;
    	game.physics.enable(ball, Phaser.Physics.ARCADE);

    	ball.body.collideWorldBounds = true;
    	ball.body.bounce.set(1);

    	game.input.onDown.add(releaseBall, this);


	},

	update: function(){
		//check for mouse input and change player location accordingly
		player.x = game.input.x;
		    if (player.x < 24) {
        		player.x = 24;
    		}
    		else if (player.x > game.width - 24) {
        		player.x = game.width - 24;
    		}
    		if (ballOnPlayer) {
    			ball.body.x = player.x
    		}


    	game.physics.arcade.collide(ball, player, ballCollidesPaddle, null, this);
    	game.physics.arcade.collide(ball, bricks, bricksCollideBall, null, this);
	}
};


function releaseBall () {
		
	if (ballOnPlayer){
		ball.body.velocity.y = -300;
        ball.body.velocity.x = -75;
        ballOnPlayer = false;
    }
}

function ballCollidesPaddle(){
	var difference;

	if (ball.x < player.x){
		difference = player.x - ball.x;
		ball.body.velocity.x = (-10 * difference);
	}

	else if (ball.x > player.x){
		difference = ball.x - player.x;
		ball.body.velocity.x = (10 * difference);
	}

	else {
		ball.body.velocity.x = 2 + Math.random() * 8;
	}
}

function bricksCollideBall(ball, bricks){
	bricks.kill();
	alivePokemon += 1;
	score += 10;
	yLoc = -80;
	scoreText.text = 'score: ' + score;


}
