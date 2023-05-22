//   les bouttons utiliser  pour les connexion et inscription
const btnConnect = document.querySelector('#submit_connexion');
const btnInscription = document.querySelector('#submit_inscription');

// les inputs et leurs valeurs

const EmailInscription = document.querySelector('#user_mail_inscription');
const mdpInscription = document.querySelector('#user_password_inscription');
const verifMdpInscription = document.querySelector('#user_passwordConfirme_inscription');

const emailConnexion = document.querySelector('#user_mail_connexion');
const mdpConnexion = document.querySelector('#user_password_connexion');

//   formulaire inscription et connexion

const formInscription = document.querySelector('.form-inscription');
const formConnexion = document.querySelector('.form-connexion');


// formInscription.addEventListener('submit', (e)=>{

//   e.preventDefault();
//   const EmailInscriptionValeur = EmailInscription.value;
//   const mdpInscriptionValeur = mdpInscription.value;


//   const auth = getAuth();

//   auth.createUserWithEmailAndPassword(EmailInscriptionValeur,mdpInscriptionValeur).then(cred =>{
//     console.log('inscription effecuter');
//   })
// })






// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });




formInscription.addEventListener('submit', (e)=>{

  e.preventDefault();
  const EmailInscriptionValeur = EmailInscription.value;
  const mdpInscriptionValeur = mdpInscription.value;

    // const auth = getAuth();
    auth.createUserWithEmailAndPassword(EmailInscriptionValeur,mdpInscriptionValeur)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  console.log('bonjour')
})





// formulaire  d'inscription et de connexion des utilisateurs

const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const buttonlogin = document.querySelector('.btnPopup');
const buttoncloselogin = document.querySelector('.icon-close');
const HomePage = document.querySelector('.home');
let nom = document.querySelector('.Username');
let mail = document.querySelector('.email');
let motCle = document.querySelector('.password');

registerlink.addEventListener('click', ()=>{

    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

buttonlogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    HomePage.classList.remove('here');
});

buttoncloselogin.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    HomePage.classList.add('active-popup');
});

HomePage.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});