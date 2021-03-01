
/* NAVBAR LINKS */
document.querySelector('#about-navlink').addEventListener('click', function(){
    document.querySelector('.cover-end').scrollIntoView({behavior: "smooth"});
})

document.querySelector('#projects-navlink').addEventListener('click', function(){
    document.querySelector('.projects-section').scrollIntoView({behavior: "smooth"});
})


document.querySelector('#projects-btn').addEventListener('click', function(){
    document.querySelector('.projects-section').scrollIntoView({behavior: "smooth"})
})






/* MOBILE MENU */
document.querySelector('.header-burger-inner').addEventListener('click', function(){
    document.querySelector('.presentation-section').classList.toggle('hidden-class')
    document.querySelector('.projects-section').classList.toggle('hidden-class')
    document.querySelector('.cover-end').classList.toggle('hidden-class')
    document.getElementById('mobile-menu').classList.toggle('mobile-menu-open');

})



document.getElementById('projects-navlink-mobile').addEventListener('click', function(){
    document.querySelector('.presentation-section').classList.remove('hidden-class');
    document.querySelector('.projects-section').classList.remove('hidden-class');
    document.querySelector('.cover-end').classList.remove('hidden-class')
    document.getElementById('mobile-menu').classList.remove('mobile-menu-open');
    document.querySelector('.projects-section').scrollIntoView({behavior: "smooth"})
})


document.getElementById('about-navlink-mobile').addEventListener('click', function(){
    document.querySelector('.presentation-section').classList.remove('hidden-class');
    document.querySelector('.projects-section').classList.remove('hidden-class');
    document.querySelector('.cover-end').classList.remove('hidden-class')
    document.getElementById('mobile-menu').classList.remove('mobile-menu-open');
    document.querySelector('.cover-end').scrollIntoView({behavior: "smooth"})
})



window.addEventListener('resize', function(){
   if(window.innerWidth >= 1100){
        document.querySelector('.presentation-section').classList.remove('hidden-class');
        document.querySelector('.projects-section').classList.remove('hidden-class');
        document.querySelector('.cover-end').classList.remove('hidden-class')
        document.getElementById('mobile-menu').classList.remove('mobile-menu-open');
   }
})



