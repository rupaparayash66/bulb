i = 0;

function light(){
   if(i%2==0)
      {
         document.getElementById('bulb').src ="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
         i++;
         document.getElementById('btn').innerHTML="ON"
      }
      else{
         document.getElementById('bulb').src ="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
          i++;
          document.getElementById('btn').innerHTML="OFF"

      }

}