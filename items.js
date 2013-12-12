//
// Items.js
//

// Items prototype
var inventory = new Array();

function item(_id, _name, _description){
  this.id          = _id;
  this.name        =_name;
  this.description =_description;

  this.toString = function(){
    var retVal = "";
    retVal = "[Items]"                         + "\n" +
				"id:"          + this.id          + "\n" +
				"name:"        + this.name          + "\n" +
				"description:" + this.description + "\n";
    return retVal;
  }
}

  item0 = new item(0, "flashlight", "Sweet now I can see the door at the east end."); 
  item1 = new item(1,"rope","What the heck am I gonna do with rope?");
  item2 = new item(2,"sword","Hope I don't need to use this.");
  item3 = new item(3,"startflashlight","This may come in handy since it looks dark.");
  item4 = new item(4,"startrope","Who knows if I'll even need this.");
   
  
  
  inventory[0]=item0
  inventory[1]=item1
  inventory[2]=item2
  inventory[3]=item3
  inventory[4]=item4
