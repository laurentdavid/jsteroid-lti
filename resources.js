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
 * Adds a couple of entities types not defined in the engine
 */
var MISSILE_ENTITY = 50;
var PLAYER_ENTITY = 100;

/*
 * game resources This global variables stores the game resource definition
 */
var g_resources = [ {
	name : "spaceship01",
	type : "image",
	src : "data/sprite/spaceship01.png"
}, {
	name : "missile01",
	type : "image",
	src : "data/sprite/missile01.png"
}, {
	name : "alien01",
	type : "image",
	src : "data/sprite/alien01.png"
}, {
	name : "title_screen",
	type : "image",
	src : "data/GUI/title_screen.png"
}, {
	name : "gover_screen",
	type : "image",
	src : "data/GUI/gover_screen.png"
}, {
	name : "32x32_font",
	type : "image",
	src : "data/sprite/32x32_font.png"
}, {
	name : "music_game",
	type : "audio",
	src : "data/audio/",
	channel : 1,
}, {
	name : "music_menu",
	type : "audio",
	src : "data/audio/",
	channel : 1,
}, {
	name : "game_background",
	type : "image",
	src : "data/GUI/game_background.png"
}, ];

var ENTITY_ZORDER=5;
var HUD_ZORDER = 10;