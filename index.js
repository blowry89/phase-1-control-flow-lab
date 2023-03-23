function scuberGreetingForFeet(feet){
  // Less than or equal to 400 ft 
  if (feet <= 400){
    return "This one is on me!"
  // Greater than 400 ft & less than 2000 ft
  } else if (feet < 2000){
    return "That will be twenty bucks."
  // Greater than or equal to 2500 ft
  } else if (feet <= 2500){
    return "I will gladly take your thirty bucks."
  // Between 2000 and 2500 ft 
  }  else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
    return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(theBag){
  switch(theBag) {
    case 'generous' :
    return 'Thank you so much.' ;
    case 'not as generous' :
    return 'Thank you.'  ;
    default:
      return 'Bye.' ;
  }
}