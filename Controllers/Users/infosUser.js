import { getDocs, userCollection, updateDoc, doc } from "../../DB/config.js";


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
           
        }
    }
    return null;
}


function createElement(data){
    nameUser.innerText=`${data.nom} ${data.prenom}`
}





// UPDATE INFOS GENERALES
const photoUser=document.querySelector('.search-photo>input');
const newName=document.querySelector('#nom');
const newLastname=document.querySelector("#prenom")
const dateNaissance=document.querySelector("#date")
const sexe=document.querySelector("#choix")


const btnSave1=document.querySelector('.save')
const form1=document.querySelector('.section1');



const newMail=document.querySelector('#email');
const newTel=document.querySelector('#tel');

const btnSave2=document.querySelectorAll('.miseajour');
const form2=document.querySelector('.section2');

let form3=document.querySelector('.section3');


btnSave1.addEventListener('click',(e)=>{
    e.preventDefault();
    const user={
        photoUser:photoUser.value,
        newName:newName.value,
        newLastname:newLastname.value,
        sexe:sexe.value,
        dateNaissance:dateNaissance.value
    }
    
    console.log(user)
})

btnSave2[0].addEventListener('click',(e)=>{
    e.preventDefault();
    const user={
        newMail:newMail.value,
    }
    console.log(user)
})
btnSave2[1].addEventListener('click',(e)=>{
    e.preventDefault();
    const user={
        newTel:newTel.value,
    }
    console.log(user)
    // insertNewInfos
})

// UPDATE PASSWORD

async function updatePassword(data) {
    const newPassword = document.querySelector('#password1').value;
    const newPasswordConfig = document.querySelector('#password2').value;
  
    if (newPassword !== newPasswordConfig) {
      console.error('Les mots de passe ne correspondent pas.');
      return;
    }
  
    try {
      // Mettez à jour le mot de passe dans la base de données
      const userRef = doc(userCollection, data.id);
         console.log(newPassword)
         console.log(userRef)
         console.log('ID utilisateur :', data.id);
         console.log('Chemin vers la collection :', userCollection.path);
      await updateDoc(userRef, { password: newPassword });
  
      console.log('Mot de passe mis à jour avec succès !');
      
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la mise à jour du mot de passe :', error);
    }

    form3.reset();
  }
  
function motpassNew(data){
    let btnSave3=document.querySelector('.save2');
    btnSave3.addEventListener('click', (e) => {
        e.preventDefault();
        updatePassword(data);
      });
      console.log(data);
}
  

function recupereId(){
    
}




