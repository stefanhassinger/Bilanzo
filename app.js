
// // Neuer Eintrag machen

const addDatumInput = document.querySelector("input.addDatumInput");
const addProduktInput = document.querySelector("input.addProduktInput");
const addKategorieInput = document.querySelector("input.addKategorieInput");
const addBetragInput = document.querySelector("input.addBetragInput");
const addInputButton = document.querySelector("button.addInputButton");
const einnahme_ausgabe_button = document.querySelector("button.einnahme_ausgabe_button");


addInputButton.addEventListener("click", () => {
  let list_ul_1 = document.getElementById("list_ul");
  let list_ul_2 = document.getElementById("list_ul");
  let list_ul_3 = document.getElementById("list_ul");
  let list_ul_4 = document.getElementById("list_ul");
  let ul = document.createElement("ul");
  let li_1 = document.createElement("li");
  let li_2 = document.createElement("li");
  let li_3 = document.createElement("li");
  let li_4 = document.createElement("li");
  li_1.textContent = addDatumInput.value;
  li_2.textContent = addProduktInput.value;
  li_3.textContent = addKategorieInput.value;
  li_4.textContent = addBetragInput.value;
  list_ul_1.appendChild(ul).appendChild(li_1);
  list_ul_2.appendChild(ul).appendChild(li_2);
  list_ul_3.appendChild(ul).appendChild(li_3);
  list_ul_4.appendChild(ul).appendChild(li_4);
  //Entscheidung, ob ul grün oder rot wird

  let auswahl_1 = document.getElementById("auswahl_1");
  let auswahl_2 = document.getElementById("auswahl_2");

  if (auswahl_1.checked) {
    ul.className = "einnahme_test";
  } else {
    ul.className = "ausgabe_test";
  };



  // ul.className = "einnahme_test";
  //Remove-Button automatisch hinzufügen//
  attachRemoveButton(ul);
  //Eintragsfelder leeren//
  addDatumInput.value = "";
  addProduktInput.value = "";
  addKategorieInput.value = "";
  addBetragInput.value = "";
});

// "Remove"-Button bei den drei bestehenden Einträgen automatisch hinzufügen
const liste_ul = document.getElementById("list_ul");
const anzahl_ul = liste_ul.children;

function attachRemoveButton(ul) {
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "Remove";
  ul.appendChild(remove);
};

for (let i = 0; i < anzahl_ul.length; i += 1) {
  attachRemoveButton(anzahl_ul[i]);
};

//Löschen per Klick auslösen//
liste_ul.addEventListener("click", (event) => {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  });






// const listDiv = document.querySelector(".list");
// const listUl_1 = document.querySelectorAll("ul")[0];
// const listUl_2 = document.querySelectorAll("ul")[1];
// const listUl_3 = document.querySelectorAll("ul")[2];
//
// function attachRemoveButton(button) {
//   let remove = document.createElement ("button");
//   remove.className = "remove";
//   remove.textContent = "Remove";
//   button.appendChild(remove);
// }
//
// attachRemoveButton(listUl_1);
// attachRemoveButton(listUl_2);
// attachRemoveButton(listUl_3);





// function attachListItemButtons(li) {
//   let remove = document.createElement('button');
//   remove.className = 'remove';
//   remove.textContent = 'Remove';
//   li.appendChild(remove);
// };


// for (let i = 0; i < lis.length; i += 1) {
//   attachListItemButtons(lis[i]);
// }

// Klicken auf den Button, um Eintrag zu entfernen!
// const listUl = listDiv.querySelector("ul");
// const lis = listUl.children;
//
// listUl.addEventListener("click", (event) => {
//   let li = event.target.parentNode;
//   let ul = li.parentNode;
//   ul.removeChild(li);
// });


// Entscheiden, ob Hintergrundfarbe rot oder grün wird






//Neuer Eintrag einen Remove-Button hinzufügen



// function attachListItemButtons(li) {
//   let remove = document.createElement('button');
//   remove.className = 'remove';
//   remove.textContent = 'Remove';
//   li.appendChild(remove);
// };
//
// for (let i = 0; i < lis.length; i += 1) {
//   attachListItemButtons(lis[i]);
// }



// for (let i = 0; i < lis.length; i += 1) {
//   attachListItemButtons(lis[i]);
// };



// // Testversuch
// function attachRemoveButton() {
//   let remove = document.createElement("button");
//   remove.className = "remove";
//   remove.textContent = "Remove";
//   document.querySelector("ul").appendChild(remove);
// }
//
// attachRemoveButton();




// Musterlösung
// const listDiv = document.querySelector('.list');
// const listUl = listDiv.querySelector('ul');
// const lis = listUl.children;
//
// function attachListItemButtons(li) {
//
//   let remove = document.createElement('button');
//   remove.className = 'remove';
//   remove.textContent = 'Remove';
//   li.appendChild(remove);
// }
//
// for (let i = 0; i < lis.length; i += 1) {
//   attachListItemButtons(lis[i]);
// }
//
// listUl.addEventListener("click", (event) => {
//   let li = event.target.parentNode;
//   let ul = li.parentNode;
//   ul.removeChild(li);
// });
