import { getDocs, userCollection, updateDoc, doc, getDoc } from "../../DB/config.js";

// DEPOT-TRANSATION //

const numCompte = document.querySelector('#Id_clients');
const nomClient = document.querySelector('#Nom');
const prenomClient = document.querySelector('#Prenom');
const contactClient = document.querySelector('#Contact');
const sexeClient = document.querySelector('#sexe');
const montantClient = document.querySelector('#Montant');
const btnTrans = document.querySelector('.send-depot-btn');

// Elements désactivés
const element1 = document.querySelectorAll('.name-content_depot');
const element2 = document.querySelector('.name-content-choix'); //flex
const element3 = document.querySelector('.profit-image_depot'); //flex

let allData = [];

numCompte.addEventListener('input', (e) => {
  if (e.target.value !== "") {
    element1.forEach((element) => {
      element.style.display = 'block';
    });
    element2.style.display = "flex";
    element3.style.display = 'flex';
    printValeur(e.target.value);
  }else{
   element1.forEach((element) => {
      element.style.display = 'none';
    });
    element2.style.display = "none";
    element3.style.display = 'none';
 }
});
btnTrans.addEventListener('click', (e)=>{
   e.preventDefault();
   
   const depot={
      nomClient:nomClient.value,
      prenomClient:prenomClient.value,
      contactClient:contactClient.value,
      sexeClient:sexeClient.value,
      montantClient:montantClient.value

   }
   console.log('moove depot',depot);
})

async function getAllData() {
  try {
    const querySnapshot = await getDocs(userCollection);
    querySnapshot.forEach((doc) => {
      const documentData = doc.data();
      allData.push(documentData);
    });
   //  console.log(allData); 
    return allData;
  } catch (error) {
    throw new Error("Une erreur s'est produite : " + error);
  }
}

function printValeur(elInput) {
  // Appel de la fonction getAllData() pour récupérer les données
  getAllData().then(() => {
    const result = recupereDataCompte(allData, elInput);
   //  console.log('result', result);
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
   nomClient.value=`${data.nom}`
   prenomClient.value=`${data.prenom}`
   contactClient.value=`${data.Contact}`
   sexeClient.value=`${data.sexe}`
}
