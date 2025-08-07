let bar = document.getElementById('bar-icon');
let menu = document.getElementById('menuList');
let close = document.getElementById('x-icon');

bar.addEventListener('click', () => {
    menu.style.display = 'block';
    close.style.display = 'block';
    bar.style.display= 'none'
});

close.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'none';
    bar.style.display= 'block'
});




