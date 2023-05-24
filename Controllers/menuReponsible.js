

async function pages(){
    let menuBtn=document.querySelector('.logo');
    let menu=document.querySelector('.menu-dashboard');

    menuBtn.addEventListener('click',()=>{
        menu.classList.toggle('active-menu')
    })
}
pages()