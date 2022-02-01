const icon_bar = document.getElementById('bars-icon');
const nav_desktop = document.getElementById('navbar-desktop');
const close_nav_desktop = document.getElementById('close-nav-desktop');

const home_options = document.getElementById('home-options');
const submenu_home = document.getElementById('submenu-home');
const tienda_options = document.getElementById('tienda-options');
const submenu_tienda = document.getElementById('submenu-tienda');

icon_bar.addEventListener('click', ()=>{
    nav_desktop.classList.add('active');
});

close_nav_desktop.addEventListener('click', ()=>{
    nav_desktop.classList.remove('active');
});

home_options.addEventListener('click', ()=>{
    submenu_home.classList.toggle('active');
});

tienda_options.addEventListener('click', ()=>{
    submenu_tienda.classList.toggle('active');
});