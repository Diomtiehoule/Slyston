
const sousPage1=document.querySelector('.contenaire-elements1');
const sousPage2=document.querySelector('.contenaire-elements2');
const sousPage3=document.querySelector('.contenaire-elements3');
const btn_details=document.querySelectorAll('.details');


const menuBtn=document.querySelectorAll('.sous-menu ul li');

window.addEventListener('load',()=>{
    sousPage1.classList.add("active-section")
    sousPage2.classList.remove("active-section2")
})

menuBtn[0].addEventListener('click',()=>{
    sousPage1.classList.add("active-section")
    sousPage2.classList.remove("active-section2")
    sousPage3.classList.remove("active-section")
})
menuBtn[1].addEventListener('click',()=>{
    sousPage2.classList.add("active-section2")
    sousPage1.classList.remove("active-section")
    sousPage3.classList.remove("active-section")
})


function alldetails(){
    btn_details.forEach(element => {
         element.addEventListener('click',()=>{
            sousPage1.classList.remove("active-section")
            sousPage2.classList.remove("active-section2")
            sousPage3.classList.add("active-section")
         })
    });
}
alldetails()

