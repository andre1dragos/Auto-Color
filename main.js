/*-- MOBILE MENU START ----------------------------------*/


const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.mobile-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.style.height = "45vh";
        menuOpen = true;
        menu.style.display = "flex";
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.style.display = "none";
        menu.style.height = "0";
    }
})

/*-- MOBILE MENU END ----------------------------------*/
