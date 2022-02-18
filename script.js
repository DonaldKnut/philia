const nav = document.querySelector('header');
const menu = document.querySelector('.text-nav');
const modal = document.querySelector('.modal');
const backDrop = document.querySelector('.backdrop');
const heroImage = document.querySelector('.hero-image');


function openNav(){
    backDrop.style.display = 'block';
    modal.style.display = 'block';
}


function closeNav(){
    backDrop.style.display = 'none';
    modal.style.display = 'none';
}


backDrop.addEventListener('click', closeNav);
menu.addEventListener('click', openNav);


window.addEventListener('scroll', fixNav);

function fixNav(){
    if (window.scrollY > nav.offsetHeight + 150) {
            nav.classList.add('active');
    } else{
        nav.classList.remove('active');
    }
}

function increaseHeight(){
    // if (window.scrollY > heroImage.offsetHeight + 10) {
    //         heroImage.style.height = '100vh';
    // }
    console.log(heroImage.offsetHeight);
}

heroImage.addEventListener('scroll', increaseHeight);
