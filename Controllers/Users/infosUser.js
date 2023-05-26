import { getDocs, userCollection, updateDoc, doc,getDoc } from "../../DB/config.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

let alldataUser = [];
let insertNewInfos=[]

async function getAllData() {
    try {
        const querySnapshot = await getDocs(userCollection);
        const data = [];
        querySnapshot.forEach((allData) => {
            const documentData = allData.data();
            data.push(documentData);
        });
        return data;
    } catch (error) {
        throw new Error("Une erreur s'est produite :", error);
    }
}

async function printAllData() {
    try {
        const data = await getAllData();
        alldataUser.push(data);
        testRecupere(alldataUser);
    } catch (error) {
        console.log("Une erreur s'est produite :", error);
    }
}

printAllData();

let nameUser=document.querySelector('.card-photo-name>h3')
function testRecupere(data) {
    // console.log(data[0], "my data");
    for (const item of data[0]) {
        if (item.id === id) {
            createElement(item)
            motpassNew(item);
            emailNew(item);
            emailTel(item);
            infosNew(item);
        }
    }
    return null;
}
let soldes=document.querySelectorAll('.cadre-elements>p')

function createElement(data){
    nameUser.innerText=`${data.nom} ${data.prenom}`
    soldes[0].innerText=`${data.smsDepot}`
    soldes[1].innerText=`${data.smsRetrait}`
    soldes[2].innerText=`${data.soldActuel}`
}





// UPDATE INFOS GENERALES

const form1=document.querySelector('.section1');
const form2=document.querySelector('.section2');
let form3=document.querySelector('.section3');

//UPDATE NAME LASTNAME OTHERS
async function updateGlobale(data) {
  const photoUser = document.querySelector('.search-photo>input');
  const newName = document.querySelector('#nom');
  const newLastname = document.querySelector("#prenom");
  const age = document.querySelector("#age");
  const sexe = document.querySelector("#choix");
  
  const utilisateur = {
    newName: newName.value,
    newLastname: newLastname.value,
    sexe: sexe.value,
    age: age.value
  } 

fichier.readAsDataURL(photo.files[0]);
fichier.addEventListener("load", () => {
    objData.photo = fichier.result;
    objData.id = "A00L" + (localData.length + 1);
    localData.push(objData);
    localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(localData));
});
  
  if (utilisateur.newName === "" || utilisateur.newLastname === "") {
    alert('Les informations ne sont pas complètes.');
    return;
  }

  try {
    const userRef = doc(userCollection, await recupereDocumentId(userCollection));
    console.log(userRef, 'mon mot de passe');
    console.log('ID utilisateur :', await recupereDocumentId(userCollection));
    console.log('Chemin vers la collection :', userCollection.path);
    await updateDoc(userRef, {
      nom: utilisateur.newName,
      prenom: utilisateur.newLastname,
      age: utilisateur.age,
      sexe: utilisateur.sexe
    });

    alert('Informations mises à jour avec succès !');
  } catch (error) {
    console.error("Une erreur s'est produite lors de la mise à jour :", error);
  }

  form1.reset();
}

function infosNew(data) {
  let btnSave1 = document.querySelector('.save');
  btnSave1.addEventListener('click', (e) => {
    e.preventDefault();
    updateGlobale(data);
    console.log('coucou');
  });
}


// UPDATE PASSWORD

// EN COURS ....//

async function recupereDocumentId(userCollection) {
  const allDocId = [];
  try {
    const querySnapshot = await getDocs(userCollection);
    querySnapshot.forEach((doc) => {
      const documentData = doc.data();
      const documentId = doc.id;

      if (documentData.id === id || (Array.isArray(documentData) && documentData.includes(id))) {
        allDocId.push(documentId);
      }
    });

    console.log("ID du document 2:", allDocId);
    if (allDocId.length > 0) {
      return allDocId[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération des documents :", error);
    return null;
  }
}

     /*UPDATE MOT DE PASSE */
async function updatePassword(data) {
  const newPassword = document.querySelector('#password1').value;
  const newPasswordConfig = document.querySelector('#password2').value;

  if (newPassword !== newPasswordConfig) {
    alert('Les mots de passe ne correspondent pas.');
    return;
  }

  try {
    const userRef = doc(userCollection, await recupereDocumentId(userCollection));
    console.log(userRef, 'my password');
    console.log('ID utilisateur :', await recupereDocumentId(userCollection));
    console.log('Chemin vers la collection :', userCollection.path);
    await updateDoc(userRef, { password: newPassword });

    alert('Mot de passe mis à jour avec succès !');
  } catch (error) {
    console.error("Une erreur s'est produite lors de la mise à jour du mot de passe :", error);
  }

  form3.reset();
}

function motpassNew(data) {
  let btnSave3 = document.querySelector('.save2');
  btnSave3.addEventListener('click', (e) => {
    e.preventDefault();
    updatePassword(data);
  });
}


 /* UPDATE EMAIL */
async function updateEmail(data) {
  let newMail = document.querySelector('#email').value;

  if (newMail === "") {
    alert('Les adresses e-mail ne correspondent pas.');
    return;
  }

  try {
    const userRef = doc(userCollection, await recupereDocumentId(userCollection));
    console.log(userRef, 'mon email');
    console.log('ID utilisateur :', await recupereDocumentId(userCollection));
    console.log('Chemin vers la collection :', userCollection.path);
    await updateDoc(userRef, { email: newMail });

    alert('Adresse e-mail mise à jour avec succès !');
  } catch (error) {
    console.error("Une erreur s'est produite lors de la mise à jour de l'adresse e-mail :", error);
  }
}

function emailNew(data) {
  let btnSave = document.querySelector('.miseajour');
  btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('coucou')
    updateEmail(data);
  });
}


/* UPDATE NUMERO */
async function updateTel(data) {
  let newTel = document.querySelector('#Contact').value;
  console.log(newTel);
  
  try {
    const userRef = doc(userCollection, await recupereDocumentId(userCollection));
    console.log(userRef, 'mon email');
    console.log('ID utilisateur :', await recupereDocumentId(userCollection));
    console.log('Chemin vers la collection :', userCollection.path);
    await updateDoc(userRef, { Contact: newTel });

    alert('Contact mis à jour avec succès !');
  } catch (error) {
    console.error("Une erreur s'est produite lors de la mise à jour du contact :", error);
  }
}

function emailTel(data) {
  let btnSave = document.querySelector('.miseajour1');
  btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    updateTel(data);
  });
}

// EN COURS ....//
