

function age(){

    const myWeek = document.getElementById("day").value

    const activities = myWeek;
   

   switch(activities){
      case "Monday" :
        document.getElementById('check').innerText = "Go To Class Around 8am-2pm" + " " + " Code from 3pm-6pm "
        + " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep"
        break;
      case "Tuesday" :
        document.getElementById('check').innerText = "Go To Class Around 8am-12pm" + " " + " Code from 1pm-6pm "+ " Eat and Rest From 6:30pm-9pm" + " After That From 9:30pm-11pm , I Read My Books , Then Sleep"
        break;
      case "Wensday" :
        document.getElementById('check').innerText =  "Go To Class Around 9am-11am" + " " + " Sports "
        break;
      case "Thursday" :
        document.getElementById('check').innerText = "Go To Class Around 7am-8am" + " " + "  Code from 12pm-6pm" + "  Sleep"
        break;
      case "Friday" :
        document.getElementById('check').innerText = "Thank God it's Friday" + "  Watch A Movie" + "  Sleep"
        break;
      case "Saturday" :
        document.getElementById('check').innerText = "Cooking" + "  Watch A Movie" + "  Code" + "  Sleep"
        break;
      case "Sunday" :
        document.getElementById('check').innerText = "Reading From 10am-12pm" + "  Code from 12pm-6pm" + "  Sleep"
        break; 
        default : document.getElementById('check').innerText = "Enter A Valid Day"
   }

}
age();