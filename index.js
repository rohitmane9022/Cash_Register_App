var Billamount = document.querySelector("#Bill-amount")
var Cashgiven  =document.querySelector("#Cash-given")
var CheckButton  = document.querySelector("#check-btn")
var message = document.querySelector("#error-message")

var noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000,500,100,50,20,10,5,1];

CheckButton.addEventListener("click", function ValidateBillAmound(){
  HideMessage()
  if(Billamount.value > 0){
    if(Cashgiven.value > Billamount.value){
       amountToBeReturned = Cashgiven.value - Billamount.value;
      calculateChange(amountToBeReturned)
    }
    else{
      ShowMessage("I Thik I have work for you 😡🤬")
    }
  }
  else{
    ShowMessage("Invalid Bill Amount")
  }
});

function calculateChange(amountToBeReturned){
  
 for(let i =0; i< availableNotes.length; i++){
  var newNotes = Math.trunc(
    amountToBeReturned / availableNotes[i]
  );
  amountToBeReturned = amountToBeReturned % availableNotes[i]
  noOfNotes[i].innerText = newNotes;
}
}

function HideMessage(){
  message.style.display = "none";
}
function ShowMessage(MSG){
  message.style.display = "block";
    message.innerText = MSG;
}