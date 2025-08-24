document.getElementById('bar-icon')
    .addEventListener('click', function () {
        document.getElementById('menuList').style.display = 'block';
        const close = document.getElementById('x-icon');
        close.style.display = 'block';
        if (close.style.display === 'block') {
            document.getElementById('bar-icon').style.display = 'none';
        }
    });
document.getElementById('x-icon')
    .addEventListener('click', function () {
        document.getElementById('menuList').style.display = 'none';
        const bar = document.getElementById('bar-icon');
        bar.style.display = 'block';
        if (bar.style.display === 'block') {
            document.getElementById('x-icon').style.display = 'none';
        }
    })


