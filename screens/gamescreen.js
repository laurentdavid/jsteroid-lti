/**
 * This is a small space shooter/arcade game aiming at learning the basics of
 * programming. We have tried to hide as much as possible the "difficulties".
 * 
 * Inspired From "Step by Step Creation Tutorial" Using melonJS
 * http://www.melonjs.org
 * 
 * @package JSTeroid
 * @subpackage Game Engine
 * 
 * @copyright (c) 2013 Laurent David
 * @license GNU Public License
 * 
 * @author Laurent David <lmedavid@gmail.com>
 */

/*
 * The main play screen Here we had to use the internals of MelonJS as it is
 * first intended to use a Map. We wanted to leave the map creation for a more
 * complex tutorials.
 */
var GameScreen = me.ScreenObject.extend({

	/**
	 * Keeps a count of enemy Sprites. Could be added to melonJS as
	 * me.game.objectCount()
	 */
	enemySpriteCount : 0,
	enemyRemoveCallback : function() {
		this.enemySpriteCount--;
	},
	init : function() {
		this.parent(true);
		this.title = me.loader.getImage("game_background");
	},

	/*
	 * This is the reset function when we change state (game state).
	 */
	onResetEvent : function() {
		// We need to reset a couple of things on state change: zorder and the
		// HUD
		this.z = 1;
		playerentity = new PlayerEntity(0, 380);
		// we have to manually add th playern entity here
		me.game.world.addChild(playerentity);
		
		this.HUD = new HUD.Container( me.video.getWidth()-32, 0,playerentity);
		me.game.world.addChild(this.HUD);
		
		// sorting is necessary if you want to be able to "see" the player
		//me.game.world.moveToTop(this.HUD);
		
		me.game.world.moveToTop(playerentity);
		//me.game.world.moveToTop(this.HUD);
		me.audio.playTrack("music_game", 100.0);
	},

	/*
	 * Every frame update this method is called
	 */
	update : function() {
		// Randomly add an ennemy
		if ((Math.random() * 100) > 95 && (this.enemySpriteCount < 10)) {
			alien = new AlienEntity(Math.random() * me.video.getWidth(), 0,
					this);
			me.game.world.addChild(alien);
			this.enemySpriteCount++;
			return true;
		}
		return false;
	},
	/*
	 * This draw callback for every frame
	 */
	draw : function(context) {
		// we just display a black background
		me.video.clearSurface(context, "black");
		context.drawImage(this.title, 0, 0);
	},
	/*
	 * action to perform when game is finished (state change)
	 */
	onDestroyEvent : function() {
		me.audio.stopTrack();
		me.game.world.removeChild(this.HUD,false);
	}

});