// Nav bar text removal for tablet and portrait style
const navText = document.querySelectorAll('nav-text');
if (window.innerWidth >= 600){
    navText.style.visibility = 'hidden';
}