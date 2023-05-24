import { getDocs, userCollection, updateDoc, doc, getDoc } from "../../DB/config.js";
// RETRAIT-TRANSATION //

const numCompte_retrait = document.querySelector('#Id_clients_retrait');
const nomClient_retrait = document.querySelector('#Nom_retrait');
const prenomClient_retrait = document.querySelector('#Prenom_retrait');
const contactClient_retrait = document.querySelector('#Contact_retrait');
const sexeClient_retrait = document.querySelector('#sexe_retrait');
const montantClient_retrait = document.querySelector('#Montant');
const btnTrans_retrait = document.querySelector('.send-depot-btn');

// Elements désactivés
const element1_retrait = document.querySelectorAll('.name-content');
const element2_retrait = document.querySelector('.name-content-choix-retrait'); //flex
const element3_retrait = document.querySelector('.profit-image'); //flex

let allData = [];

numCompte_retrait.addEventListener('input', (e) => {
  if (e.target.value !== "") {
    element1_retrait.forEach((element) => {
      element.style.display = 'block';
    });
    element2_retrait.style.display = "flex";
    element3_retrait.style.display = 'flex';
    printValeur(e.target.value);
  }else{
    element1_retrait.forEach((element) => {
        element.style.display = 'none';
      });
      element2_retrait.style.display = "none";
      element3_retrait.style.display = 'none';
  }
});

async function getAllData() {
  try {
    const querySnapshot = await getDocs(userCollection);
    querySnapshot.forEach((doc) => {
      const documentData = doc.data();
      allData.push(documentData);
    });
    console.log(allData); 
    return allData;
  } catch (error) {
    throw new Error("Une erreur s'est produite : " + error); 
  }
}

function printValeur(elInput) {
  getAllData().then(() => {
    console.log(allData, 'test transition');
    const result = recupereDataCompte(allData, elInput);
    console.log('result', result);
  });
}

function recupereDataCompte(tab, elInput) {
  for (let i = 0; i < tab.length; i++) {
    const element = tab[i];
    console.log('item', element.NumCompte);
    if (element.NumCompte === elInput) {
      afficheValueInput(element)
      return element;
    }
  }
  return null;
}

function afficheValueInput(data){
   nomClient_retrait.value=`${data.nom}`
   prenomClient_retrait.value=`${data.prenom}`
   contactClient_retrait.value=`${data.Contact}`
   sexeClient_retrait.value=`${data.sexe}`
}
