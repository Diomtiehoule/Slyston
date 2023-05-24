import {auth,createUserWithEmailAndPassword,addDoc,userCollection} from "../../DB/config.js";

const form=document.querySelector('.form-inscription')
const btn_form=document.querySelector('#submit_inscription');
const nom=document.querySelector('#user_name_inscription');
const prenom=document.querySelector('#user_prenom_inscription');
const email=document.querySelector('#user_mail_inscription');
const password=document.querySelector('#user_password_inscription');
const confPassword=document.querySelector('#user_passwordConfirme_inscription');

// Récupérer la date actuelle
const dateActuelle = new Date();

// Afficher la date actuelle
const currentDay = dateActuelle.getDate();
const currentMonth = dateActuelle.getMonth() + 1;
const currentYear = dateActuelle.getFullYear();
const formatteddateActuelle = `${currentDay}/${currentMonth}/${currentYear}`;

// Ajouter 4 ans
const futureDate = new Date();
futureDate.setFullYear(dateActuelle.getFullYear() + 4);

// Afficher la date avec +4 ans
const futureDay = futureDate.getDate();
const futureMonth = futureDate.getMonth() + 1;
const futureYear = futureDate.getFullYear();
const formattedFutureDate = `${futureDay}/${futureMonth}/${futureYear}`;


// Fonction pour générer un numéro de compte aléatoire
function generateAccountNumber() {
    const accountNumberLength = 5;
    let accountNumber = '';
  
    for (let i = 0; i < accountNumberLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10); 
      accountNumber += randomDigit; 
    }
  
    return accountNumber;
  }
  const accountNumber = generateAccountNumber();
  
  


console.log('from',form)
let id=`${new Date().getTime()}BK`
btn_form.addEventListener('click',(e)=>{
    e.preventDefault();
    const user={
        nom:nom.value,
        prenom:prenom.value,
        password:password.value,
        email:email.value,
        id: id,
        dates:{
            dateDebut: formatteddateActuelle,
            dateFin:formattedFutureDate
        },
        photoUser:"",
        metierClient:"",
        soldes:{
            soldActuel:0,
            soldRetraits:0,
            nbreRetraits:0,
            nbreDepots:0
        },
        messages:{
            smsRetrait:0,
            smsDepot:0,
        },
        Contact:"auto",
        NumCompte:accountNumber,
        sexe:"auto",
        age:"auto"

    }
    if(user.password==confPassword.value){
        createUser(user)
        form.reset();
    }else{
        alert("password !!!")
    }
   

})

//creer une fonction qui envoie mes donnees sur firebase

async function createUser(user){
    console.log("user",user.email,user.password)
    await createUserWithEmailAndPassword(auth, user.email,user.password)
        const data= await addDoc(userCollection, user);
        data ? alert("Compte créé avec succès !")  : console.log('Erreur !!!!');
       
}


