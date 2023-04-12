

function age(){

    const myWeek = document.getElementById("day").value

    const activities = myWeek;

   

   switch(activities){
    case "Monday":
        document.getElementById('check').innerText = "Go To Class Around 8am-2pm" + " " + " Code from 3pm-6pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
        break;
      case "Monday".toUpperCase():
        document.getElementById('check').innerText = "Go To Class Around 8am-2pm" + " " + " Code from 3pm-6pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
        break;
      case "Monday".toLowerCase():
        document.getElementById('check').innerText = "Go To Class Around 8am-2pm" + " " + " Code from 3pm-6pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
        break;

        case "Tuesday":
          document.getElementById('check').innerText = "Go To Class Around 8am-10am" + " " + " Code from 1pm-4pm "
          + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm  Sleep";
          break;        
      case "Tuesday".toUpperCase():
        document.getElementById('check').innerText = "Go To Class Around 8am-10am" + " " + " Code from 1pm-4pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm  Sleep";
        break;
      case "Tuesday".toLowerCase():
        document.getElementById('check').innerText = "Go To Class Around 8am-10am" + " " + " Code from 1pm-4pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm  Sleep";
        break;

        case "Wednesday":
          document.getElementById('check').innerText = "Sports 8am-2pm" + " " + " Code from 3pm-6pm "
          + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
          break;
      case "Wednesday".toUpperCase():
        document.getElementById('check').innerText = "Go To Class Around 8am-2pm" + " " + " Code from 3pm-6pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
        break;
      case"Wednesday".toLowerCase():
        document.getElementById('check').innerText = "Go To Class Around 8am-2pm" + " " + " Code from 3pm-6pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
        break;

        case"Thursday":
        document.getElementById('check').innerText = "Go To Class Around 7am-8am" + " " + 
         " Church From 6:30pm-8pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
        break;
      case"Thursday".toUpperCase():
        document.getElementById('check').innerText = "Go To Class Around 8am-2pm" + " " + " Code from 3pm-6pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
        break;
      case"Thursday".toLowerCase():
        document.getElementById('check').innerText = "Go To Class Around 8am-2pm" + " " + " Code from 3pm-6pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep";
        break;

        case"Friday":
        document.getElementById('check').innerText = "No CLASS!!!!" + " " + " Thank God is Friday!!! "
        + " read From 6:30pm-9pm" + "  Sleep";
        break;
      case"Friday".toUpperCase():
        document.getElementById('check').innerText = "No CLASS!!!!" + " " + " Thank God is Friday!!! "
        + " read From 6:30pm-9pm" + "  Sleep";
        break;
      case"Friday".toLowerCase():
        document.getElementById('check').innerText = "No CLASS!!!!" + " " + " Thank God is Friday!!! "
        + " read From 6:30pm-9pm" + "  Sleep";
        break;

        case"Saturday":
        document.getElementById('check').innerText = "play basketball 6am-11am" + " " + " Code from 1pm-3pm "
        + " Movies From 6:30pm-9pm" + " After That From 9:30pm-11pm ,Chill with my guys";
        break;
      case"Saturday".toUpperCase():
        document.getElementById('check').innerText = "play basketball 6am-11am" + " " + " Code from 1pm-3pm "
        + " Movies From 6:30pm-9pm" + " After That From 9:30pm-11pm ,Chill with my guys";
        break;
      case"Saturday".toLowerCase():
        document.getElementById('check').innerText = "play basketball 6am-11am" + " " + " Code from 1pm-3pm "
        + " Movies From 6:30pm-9pm" + " After That From 9:30pm-11pm ,Chill with my guys";
        break;


        case"Sunday":
        document.getElementById('check').innerText = "Go To Church Around 8am-12pm" + "AnyThing Followsss!";
        break;
      case"Sunday".toUpperCase():
        document.getElementById('check').innerText = "Go To Church Around 8am-12pm" + "AnyThing Followsss!";
        break;
      case"Sunday".toLowerCase():
        document.getElementById('check').innerText = "Go To Church Around 8am-12pm" + "AnyThing Followsss!";
        break;
      

        default : document.getElementById('check').innerText = "Enter A Valid Day , E.g Monday, MONDAY , monday"
   }

}


age();