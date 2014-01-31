/**
 * This is a small space shooter/arcade game aiming at learning the basics of
 * programming. We have tried to hide as much as possible the "difficulties".
 * 
 * Inspired From "Step by Step Creation Tutorial" Using melonJS
 * http://www.melonjs.org
 * 
 * @package JSTeroid
 * @subpackage Hud
 * 
 * @copyright (c) 2013 Laurent David
 * @license GNU Public License
 * 
 * @author Laurent David <lmedavid@gmail.com>
 */
HUD = {};

HUD.Container = me.ObjectContainer.extend({
 
    init: function(x,y, p) {
        // call the constructor
        this.parent();
         
        // persistent across level change
        this.isPersistent = true;
         
        // non collidable
        this.collidable = false;
         
        // make sure our object is always draw first
        this.z = HUD_ZORDER;
 
        // give a name
        this.name = "HUD";
         
        // add our child score object at the right-bottom position
        this.addChild(new HUD.ScoreItem(x, y, p));
    }
});
 
HUD.ScoreItem = me.Renderable.extend( {   
    /**
     * constructor
     */
    init: function(x, y, p) {
         
        // call the parent constructor
        // (size does not matter here)
        this.parent(new me.Vector2d(x, y), 10, 10);
         
        // create a font
        this.font = new me.BitmapFont("32x32_font", 32);
        this.font.set("right");
         
        // local copy of the global score
        this.playerentity =  p;
        this.lifedisplayed  = this.playerentity.getLifeCount();
        // make sure we use screen coordinates
        this.floating = true;
    },
     
    /**
     * update function
     */
    update : function () {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if (this.lifedisplayed != this.playerentity.getLifeCount()) {
        	this.lifedisplayed  = this.playerentity.getLifeCount();
            return true;
        }
        return true;
    },
 
    /**
     * draw the score
     */
    draw : function (context) {
        this.font.draw (context, this.playerentity.getLifeCount(), this.pos.x, this.pos.y);
        this.lifedisplayed  = this.playerentity.getLifeCount();
    }
    
});