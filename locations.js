//
// Locations.js
//

// Locations prototype

var locales = new Array();

function locale(_id, _description, _item, _description_2nd, _description_3rd) {
  this.id      = _id;
  this.description   = _description;
  this.item        = _item;    
  this.description_2nd   = _description_2nd;
  this.description_3rd   = _description_3rd;
   
  this.toString = function() {
    var retVal = "";
    retVal = "[locations]"                                                                + "\n" + 
				"id:"                                           + this.id                  + "\n" +
				"description:"                              + this.description         + "\n" +
				"item:"                                       + this.item                + "\n" +
				"description after item pickup: "    + this.description_2nd     + "\n" +
				"description #3: "                        + this.description_3rd     + "\n" ;
    return retVal;
  }   
}
  
  location0 = new locale(0,"This is where I woke up.", "", "","");
  
  location1 = new locale(1,"There is a picture on the wall of a man slaying a monster using a sword.","","","");
  
  location2 = new locale(2,"There is a brick wall at this end of the room.","","","");
  
  location3 = new locale(3,"There is a desk with a flashlight", "Flashlight", "This is the spot I got the flashlight from.", "Oh look a flashlight. Good thing I already have one...");

  location4 = new locale(4,"This part of the room is very dark and difficult to see what lies ahead.","","Shining the flashlight, you see a door and the next room is a step to the east.","");
  
  location5 = new locale(5,"You have just entered a second room at its west end.","","","");
  
  location6 = new locale(6,"There is a brick wall at this end of the room","","","");
 
  location7 = new locale(7,"There is some rope on the ground here.","Rope","This is where the rope was","Oh look, some rope! Good thing I already have some...");
  
  location8 = new locale(8,"There is tall wall with some light shining down above it.","","There is a tall wall with some light shining down above it. Go north to climb up to the next room.","");
 
  location9 = new locale(9,"You are in the center of the room.","","","");

  location10 = new locale(10,"You have just entered a third room at its south end.","","","");
  
  location11 = new locale(11,"There is a brick wall at this end of the room.","","","");
  
  location12 = new locale(12,"There is a shiny sword on the ground here","Sword","This where the sword used to be","");
  
  location13 = new locale(13,"There is a ladder that seems to lead out of the darkness. Head west to climb the ladder!","","","");
  
  location14 = new locale(14,"You are in the center of the room. There appears to be an exit to the west of the room","","","");
  
  location15 = new locale(15,"You climb up the ladder and have reached the outside. Once you get outside you see a monster. The monster attacks you, but you are defensless and get eaten to death. Game over.","","You climb up the ladder and have reached the outside. Once you get outside you see a monster. The monster attacks you, but you use your sword and kill the monster. You are now free and can return home.","");
  
  locales[0]=location0;
  locales[1]=location1;
  locales[2]=location2;
  locales[3]=location3;
  locales[4]=location4;
  locales[5]=location5;
  locales[6]=location6;
  locales[7]=location7;
  locales[8]=location8;
  locales[9]=location9;  
  locales[10]=location10;
  locales[11]=location11;
  locales[12]=location12;
  locales[13]=location13;
  locales[14]=location14;
  locales[15]=location15;