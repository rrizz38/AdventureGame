var startRope=false;
var startFlashlight=false;
var playerHasSword=false;
var playerHasRope=false;
var playerHasFlashlight=false;
var playerHasNothing=false;
var playerHasStartRope=false;
var playerHasStartFlashlight=false;

function init(){
  updateDisplay("You wake up in a room with 4 walls.");
  updateDisplay("There is very little light and it is hard to see.");
  updateDisplay("All you have is a Compass.");
  updateDisplay("You can choose either a flashlight, rope or nothing to start the game.");
  updateDisplay("Click one of the three buttons below to choose an item.");
  updateDisplay(location0.description);
  currentLocation=0
  document.getElementById('btn1').disabled=false;
  document.getElementById('btn2').disabled=false;
  document.getElementById('btn3').disabled=false;
	startRope=false;
	startFlashlight=false;
	playerHasSword=false;
	playerHasRope=false;
	playerHasFlashlight=false;
	playerHasNothing=false;
	playerHasStartRope=false;
	playerHasStartFlashlight=false;

}  

function error_msg(){
  var msg = "That Is Not A Command Type Help For Command List"
  updateDisplay(msg);
}

function starting_item(text){
		switch(text){
			case "Take Rope" :
			case "Take rope" :
			case "take Rope" :
			case "take rope" :playerHasStartRope = true;
			                           updateDisplay(item4.description);
									   disablebuttonrope();
									   disablebuttonflashlight();
									   disablebuttonnothing();
		    break;
			
			case "Take Flashlight" :
			case "Take flashlight" :
			case "take Flashlight" :
			case "take flashlight" : playerHasStartFlashlight = true;
											updateDisplay(item3.description);
											disablebuttonrope();
											disablebuttonflashlight();
											disablebuttonnothing();
			break;
			
			case "Take Nothing" :
			case "Take nothing" :
			case "take Nothing" :
			case "take nothing" : playerHasNothing = true;
											updateDisplay("Who needs items?");
											disablebuttonrope();
											disablebuttonflashlight();
											disablebuttonnothing();
			break;
			
			default : updateDisplay("This should never happen ");
		}
}

function disablebuttonrope(){
	document.getElementById('btn1').disabled=true
}

function disablebuttonflashlight(){
	document.getElementById('btn2').disabled=true
}

function disablebuttonnothing(){
	document.getElementById('btn3').disabled=true
}

function command_list_help(){
  var msg = "Move North: N, n, North, or north \nMove West: W, w, West, or west\nMove East: E, e, East, or east\nMove South: S, s, South, or south\nTake Item: Take, take\nRead Item: Read, read\nOpen Object: Open, open\nReset Game: Reset, reset"
  updateDisplay(msg);
}

function cleartext(){
	document.getElementById('textprompt').value="";
}

function gettext(){
  var prompt = document.getElementById("textprompt");
    switch(prompt.value){
      case "N"    :
      case "n"    :
      case "North":
      case "north": movement(North);
						  cleartext();
      break;
   
      case "W"    :
      case "w"    :
      case "West" :
      case "west" : movement(West);
						   cleartext();
      break;
  
      case "E"    :
      case "e"    :
      case "East" :
      case "east" : movement(East);
						  cleartext();
      break;
 
      case "S"    :
      case "s"    :
      case "South":
      case "south": movement(South);
						   cleartext();
      break;
    
      case "Help" :
      case "help" : command_list_help();
						  cleartext();
      break;
   
      case "Take Flashlight" :
      case "Take flashlight" :
      case "take Flashlight" :
      case "take flashlight" : if (currentLocation==3 && !playerHasFlashlight()){
										take_items();
										cleartext();
										} else {
										var msg = "What are you trying to take that isn't even an item here!!!"
										updateDisplay(msg);
										cleartext();
										}
      break;
      
      case "Take Rope":
      case "Take rope":
      case "take Rope":
      case "take rope": if (currentLocation==7 && !playerHasRope()){
										take_items();
										cleartext();
										} else {
										var msg = "What are you trying to take that isn't even an item here!!!"
										updateDisplay(msg);
										cleartext();
										}
      break;
      
      case "Take Sword":
      case "Take sword":
      case "take Sword":
      case "take sword": if (currentLocation==12 && !playerHasSword()){
										take_items();
										cleartext();
										} else {
										var msg = "What are you trying to take that isn't even an item here!!!"
										updateDisplay(msg);
										cleartext();
										}
      break;
      
      case "Reset":
      case "reset":init();
						cleartext();
      break;          
         
              default   :error_msg();
							cleartext();
  }
} 


function take_items(item){
  var prompt = document.getElementById("textprompt");
    var msg="Taken"
          updateDisplay(msg);
      switch(prompt.value){
      case "Take flashlight":
      case "take Flashlight":
      case "Take Flashlight":
      case "take flashlight": playerHasFlashlight=true;
                        updateDisplay(item0.description);
      break;
      
      case "Take rope":
      case "take Rope":
      case "Take Rope":
          case "take rope":playerHasRope=true;
								updateDisplay(item1.description);
      break;
      
      case "Take Sword":
      case "take sword":
      case "Take sword":
      case "take Sword": playerHasSword=true;
                       updateDisplay(item2.description);
      break;

    default: var msg="You Cannot Take This"
  }
}

function updateLocation(){
  switch(currentLocation){
    case 0: updateDisplay(location0.description);
    break;
    
    case 1:  updateDisplay(location1.description);
    break;
    
    case 2:  updateDisplay(location2.description);
    break;
    
    case 3: if (playerHasFlashlight){
					updateDisplay(location3.description_2nd);
					} else if (playerHasStartFlashlight){
					updateDisplay(location3.description_3rd);
					} else {
					updateDisplay(location3.description);
					}
    break;
    
    case 4: if (playerHasFlashlight || playerHasStartFlashlight) {
				updateDisplay(location4.description_2nd);
				} else {
				updateDisplay(location4.description);
				}
    break;
    
    case 5: if (playerHasFlashlight || playerHasStartFlashlight){
			updateDisplay(location5.description);
            hasVisited_5=true;
			} else {
			updateDisplay(location4.description);
			currentLocation=4;
			}
    break;
   
    case 6: updateDisplay(location6.description);
            
    break;
   
    case 7: if (playerHasRope){
					updateDisplay(location7.description_2nd);
					} else if (playerHasStartRope){
					updateDisplay(location7.description_3rd);
					} else {
					updateDisplay(location7.description);
					}
       
    break;
   
    case 8: if (playerHasRope || playerHasStartRope) {
				updateDisplay(location8.description_2nd);
				} else {
				updateDisplay(location8.description);
				}
    
    break;
   
    case 9: updateDisplay(location9.description);
    break;
	
	case 10: if (playerHasRope || playerHasStartRope){
					updateDisplay(location10.description);
					hasVisited_10=true;
					} else {
					currentLocation = 8;
					updateDisplay(location8.description)
					}
    break;
	
	case 11: updateDisplay(location11.description);
    break;
	
	
	case 12: if (playerHasSword) {
				updateDisplay(location12.description_2nd);
				} else {
				updateDisplay(location12.description);
				}
    break;
	
	
	case 13: updateDisplay(location13.description);
    break;
	
	
	case 14: updateDisplay(location14.description);
    break;
	
	
	case 15: if (playerHasSword) {
				updateDisplay(location15.description_2nd);
				gameOver();
				} else {
				updateDisplay(location15.description);
				gameOver();
				}
			
    break;
 
   
    default: 
      var msg="Moving in that Direction isn't an option"
	  updateDisplay(msg);
  } 
}

function displayInventory(){
  if (playerHasFlashlight){
    updateDisplay("You have these items in your possession:" + "\n" + item0.name);
   if (playerHasRope){
    updateDisplay(item1.name);
  } if (playerHasSword){
    updateDisplay(item2.name);
  } if (playerHasStartFlashlight){
    updateDisplay(item3.name);
  } if (playerHasStartRope){
    updateDisplay(item4.name);
  } 
  } else {
      updateDisplay("You have these items in your possession:" + " Nothing");
  } 
  
}

function gameOver(){
  document.getElementById('btn1').disabled=true
  document.getElementById('btn2').disabled=true
  document.getElementById('btn3').disabled=true
  document.getElementById('btn4').disabled=true
  updateDisplay("Wanna Play Again? Type Reset.")
  
}
