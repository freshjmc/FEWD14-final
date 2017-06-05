// JavaScript Document

//user has to choose 3 images, each image is a representation of one of 3 catagories (Creator, Connosseur, Adventurous). The user choses places him in one of the 3 main catagories or puts in a "general" catagory.

$(document).ready(function() {

    var userStyleChoices = [];
    $('img').click(function() {
		
      if(userStyleChoices.length <= 3) {
        userStyleChoices.push(this.className);
        console.log(userStyleChoices);
      }
		
      if(userStyleChoices.length === 3){
        determineStyleType(userStyleChoices);
      }
    })

    function determineStyleType(selections){
      console.log(selections)
      var spreadOfSelections = selections.split("");
      // console.log(spreadOfSelections);

    }

  })