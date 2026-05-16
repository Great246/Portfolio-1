const special = document.querySelector(".special");
const bty = document.querySelector(".bty");
const about = document.getElementById("about")
const but = document.getElementById("but");
function toggleMenu() {
    const navs = document.querySelector('.navs');
    navs.classList.toggle('mobile-active');
}

but.addEventListener ('click', () => {
     about.scrollIntoView({
        behavior: "smooth"
     });
});
special.addEventListener ('click', ()=> {
    alert("Contact in tiktok or facebook by clicking the icon")
});