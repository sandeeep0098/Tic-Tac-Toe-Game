function openPlayerConfig(event) {
  // const selectedPlayerId = event.target.dataset.playerid;
  // editedPlayer =selectedPlayerId;
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closeplayerconfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    // enteredPlayerName === ''
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please Enter a Valid Name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName
  
players[editedPlayer - 1].name = enteredPlayerName;
//   if(editedplayer ===1 ){     
//     player[0].name = enteredPlayerName;

//   } else {
//     player[1].name = enteredPlayerName;

//   }

closeplayerconfig ();   

// the above thing was done to submit the form by itself by adding the parenthesis

}
