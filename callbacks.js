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

function alienUpdatePosition(x, y, vx, vy) {
	newcoords = new Array();

	// Set Current speed
	if (vx == 0) {
		vx = 1;
	}
	if (vx > 0 && x >= 600) {
		vx = -vx;
	}
	if (vx < 0 && x < 20) {
		vx = -vx;
	}
	vy = 2;

	// Update coordinates
	y = y + vy;
	x = x + vx;

	// Return the values
	newcoords.vx = vx;
	newcoords.vy = vy;
	newcoords.x = x;
	newcoords.y = y;
	return newcoords;
}
