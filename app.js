const toggleButton = document.getElementById('toggleButton');
const navbarCollapse = document.getElementById('navbarNav');
const aboutNavItem = document.getElementById('aboutNavItem');
const serviceNavItem = document.getElementById('serviceNavItem');
const pricesNavItem = document.getElementById('pricesNavItem');
const contactNavItem = document.getElementById('contactNavItem');
const galleryNavItem = document.getElementById('galleryNavItem');
const impressumNavItem = document.getElementById('impressumNavItem');

aboutNavItem.addEventListener('click', toggleNavbarCollapse);
serviceNavItem.addEventListener('click', toggleNavbarCollapse);
pricesNavItem.addEventListener('click', toggleNavbarCollapse);
contactNavItem.addEventListener('click', toggleNavbarCollapse);
galleryNavItem.addEventListener('click', toggleNavbarCollapse);
impressumNavItem.addEventListener('click', toggleNavbarCollapse);

function toggleNavbarCollapse() {
    navbarCollapse.classList.toggle('show');
    toggleButton.classList.toggle('collapsed');
    const isCollapsed = !navbarCollapse.classList.contains('show');
    toggleButton.setAttribute('aria-expanded', isCollapsed.toString());
}