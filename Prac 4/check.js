
function submitButtonRestore () {
  var idOfSubButton = document.getElementById("subID");  
	
  idOfSubButton.value = "send the sentence";
} 

window.onload = function() {
  var idOfSubButton = document.getElementById("subID");
  var sentIDBox = document.getElementById("sentID"); 

  idOfSubButton.onclick = function(e) {
  	var submitButtonID = document.getElementById("subID");
	
  	if (sentIDBox.value == "") {
      submitButtonID.value = "Input box is empty!";
  	  submitValue.value = "please fill ALL fields";
  	  e.preventDefault();
    }
  }

  sentIDBox.onclick = submitButtonRestore;
  
} 