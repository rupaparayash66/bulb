function light(show){

    var picture ;

     if(show == 0){

        picture = "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"

     }else
     {
        picture = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"

     }
      document.getElementById('bulb').src = picture ;
}