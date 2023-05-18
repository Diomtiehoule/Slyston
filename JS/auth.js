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


formInscription.addEventListener('submit', (e)=>{

  e.preventDefault();
  const EmailInscriptionValeur = EmailInscription.value;
  const mdpInscriptionValeur = mdpInscription.value;

  app.createUserWithEmailAndPassword(EmailInscriptionValeur,mdpInscriptionValeur).then(cred =>{
    console.log('inscription effecuter');
  })
})