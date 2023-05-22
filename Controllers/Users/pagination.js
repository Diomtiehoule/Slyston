
const menuBtn=document.querySelectorAll('.sous-menu ul li');
const changeImage=document.querySelectorAll('.imgmore');
const allCadres=[];


for (let i = 1; i < 7; i++) {allCadres.push(document.querySelector(`.contenaire-elements${i}`))}
menuBtn[1].addEventListener('click', () => {
    menuBtn[2].classList.toggle('active');
    menuBtn[3].classList.toggle('active');
    
    if (menuBtn[2].classList.contains('active')) {
        changeImage[0].src = "../Ressources/Logo/icons8-minus-24.png";
    } else {
        changeImage[0].src = "../Ressources/Logo/icons8-plus-math-30.png";
    }
});
window.addEventListener('load',()=>{
    allCadres[0].classList.add('active-section');
    allCadres[1].classList.remove('active-section2');
    allCadres[2].classList.remove('active-section2');
    allCadres[4].classList.remove('active-section2');
    allCadres[5].classList.remove('active-section');
    allCadres[3].classList.remove('active-section2');
})
menuBtn[0].addEventListener('click', () => {
    allCadres[0].classList.add('active-section');
    allCadres[1].classList.remove('active-section2');
    allCadres[2].classList.remove('active-section');
    allCadres[4].classList.remove('active-section2');
    allCadres[3].classList.remove('active-section2');
    allCadres[5].classList.remove('active-section');
});

menuBtn[2].addEventListener('click', () => {
    allCadres[3].classList.add('active-section2');
    allCadres[0].classList.remove('active-section');
    allCadres[1].classList.remove('active-section2');
    allCadres[2].classList.remove('active-section');
    allCadres[4].classList.remove('active-section2');
    allCadres[5].classList.remove('active-section');
});
menuBtn[3].addEventListener('click', () => {
    allCadres[4].classList.add('active-section2');
    allCadres[0].classList.remove('active-section');
    allCadres[1].classList.remove('active-section2');
    allCadres[2].classList.remove('active-section');
    allCadres[3].classList.remove('active-section2');
    allCadres[5].classList.remove('active-section');
});


menuBtn[4].addEventListener('click',()=>{
    menuBtn[5].classList.toggle('active')
    menuBtn[6].classList.toggle('active')
    if (menuBtn[5].classList.contains('active')) {
        changeImage[1].src = "../Ressources/Logo/icons8-minus-24.png";
    } else {
        changeImage[1].src = "../Ressources/Logo/icons8-plus-math-30.png";
    }

})
menuBtn[5].addEventListener('click', () => {
    allCadres[1].classList.add('active-section2');
    allCadres[0].classList.remove('active-section');
    allCadres[2].classList.remove('active-section');
    allCadres[3].classList.remove('active-section2');
    allCadres[4].classList.remove('active-section2');
    allCadres[5].classList.remove('active-section');
});
menuBtn[6].addEventListener('click', () => {
    allCadres[2].classList.add('active-section');
    allCadres[0].classList.remove('active-section');
    allCadres[1].classList.remove('active-section2');
    allCadres[3].classList.remove('active-section2');
    allCadres[4].classList.remove('active-section2');
    allCadres[5].classList.remove('active-section');
});

menuBtn[7].addEventListener('click', () => {
    allCadres[5].classList.add('active-section');
    allCadres[1].classList.remove('active-section2');
    allCadres[2].classList.remove('active-section');
    allCadres[3].classList.remove('active-section2');
    allCadres[4].classList.remove('active-section2');
    allCadres[0].classList.remove('active-section');
});



