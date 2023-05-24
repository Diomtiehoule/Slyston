import {auth,createUserWithEmailAndPassword,addDoc,userCollection} from "../../DB/config.js";

const form=document.querySelector('.form-inscription')
const btn_form=document.querySelector('#submit_inscription');
const nom=document.querySelector('#user_name_inscription');
const prenom=document.querySelector('#user_prenom_inscription');
const email=document.querySelector('#user_mail_inscription');
const password=document.querySelector('#user_password_inscription');
const confPassword=document.querySelector('#user_passwordConfirme_inscription');



console.log('from',form)
let id=`${new Date().getTime()}BK`
btn_form.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('bonjour')
    const user={
        nom:nom.value,
        prenom:prenom.value,
        password:password.value,
        email:email.value,
        id: id,
        dates:{
            dateDebut: "",
            dateDebut:""
        },
        photoUser:"",
        metierClient:"",
        soldes:{
            soldActuel:"",
            soldRetraits:"",
            nbreRetraits:"",
            nbreDepots:""
        },
        messages:{
            smsRetrait:"",
            smsDepot:"",
        }

    }
    if(user.password==confPassword.value){
        createUser(user)
        form.reset();
    }else{
        swal("Veuillez entrer des mots de passe conforme");
    }
   if(!user.nom||!user.prenom || !user.email|| !user.password){
    swal("Inscription impossible", "Veuillez remplir tout le formulaire !", "error");
   }

})

//creer une fonction qui envoie mes donnees sur firebase

async function createUser(user){
    console.log("user",user.email,user.password)
    await createUserWithEmailAndPassword(auth, user.email,user.password)
        const data= await addDoc(userCollection, user);
        // data ?swal("Félicitation !", "Votre inscription a été éffectuer avec succes !", "success"):swal("Désolé", "Impossible de vous inscrire !", "error");
    if(data){
        swal("Félicitation !", "Votre inscription a été éffectuer avec succes !", "success")

        window.location.href="../HTML/connexion.html"
    }else{
        swal("Désolé", "Impossible de vous inscrire !", "error");
    }
       
}





//  autre methode d'inscription
