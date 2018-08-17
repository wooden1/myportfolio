// Sticky navbar 
const nav = document.querySelector("#main-nav");
const topOfNav = nav.offsetTop;
// console.log(topOfNav);
function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = `${nav.offsetHeight  }px`;
        document.body.classList.add("fixed-nav");
    } else {
        document.body.classList.remove("fixed-nav");
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener("scroll", fixNav);
console.log('This at least works!');