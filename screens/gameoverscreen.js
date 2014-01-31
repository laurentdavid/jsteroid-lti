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
 * This Game Over screen when the game ends Just displays a background image and
 * some text Mainly inspired from the tutorial (http://melonjs.org)
 */
var GameOverScreen = me.ScreenObject.extend({
	// constructor
	init : function() {
		this.parent(true);
		// title screen image
		this.title = null;
		this.font = null;
	},

	// reset function
	onResetEvent : function() {
		if (this.title == null) {
			// init stuff if not yet done
			this.title = me.loader.getImage("gover_screen");
			// font to display the menu items
			this.font = new me.BitmapFont("32x32_font", 32);
			this.font.set("left");
			me.audio.playTrack("music_menu", 100.0);

		}
		// enable the keyboard
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);

	},

	// update function
	update : function() {
		// enter pressed ?
		if (me.input.isKeyPressed('enter')) {
			me.state.change(me.state.MENU);
		}
		return true;
	},

	// draw function
	draw : function(context) {
		context.drawImage(this.title, 0, 0);

		this.font.draw(context, "GAME OVER!!", 20, 20);
	},

	// destroy function
	onDestroyEvent : function() {
		me.input.unbindKey(me.input.KEY.ENTER);
		me.audio.stopTrack();
	}

});
