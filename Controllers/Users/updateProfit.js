
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// UPDATE INFOS GENERALES
const photoUser=document.querySelector('.search-photo>input');
const newName=document.querySelector('#nom');
const newLastname=document.querySelector("#prenom")

const btnSave1=document.querySelector('.save')
const form1=document.querySelector('.section1');



const newMail=document.querySelector('#email');
const newTel=document.querySelector('#tel');

const btnSave2=document.querySelectorAll('.miseajour');
const form2=document.querySelector('.section2');


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

btnSave2.addEventListener('click',(e)=>{
    e.preventDefault();
    const user={
        newMail:newMail.value,
        newName:newName.value,
        newLastname:newLastname.value
    }
    console.log(user)
})

// UPDATE PASSWORD

const newPassword=document.querySelector('#password1');
const newPasswordConfig=document.querySelector('#password2');

const btnSave3=document.querySelector('.save2');
const form3=document.querySelector('.section3');


btnSave3.addEventListener('click',(e)=>{
    e.preventDefault();
    const user={
        newPassword:newPassword.value
    }

    console.log(user)
})