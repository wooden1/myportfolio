// Nav bar text removal for tablet and portrait style
// :beer:
function hideElements(){
    const navText = document.querySelectorAll('.nav-text');
    const navIcons = document.querySelectorAll('.main-nav > a > i');
    if (window.innerWidth >= 600){
       navText.style.display = 'none';
    }
    if(window.innerWidth < 600){
        navIcons.style.visibility = 'hidden';
    }

}
hideElements();