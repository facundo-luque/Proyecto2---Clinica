// Reemplaza el código JavaScript existente con el siguiente:

document.addEventListener('DOMContentLoaded', function() {
    let listElements = document.querySelectorAll('.list-click');

    listElements.forEach(listElement => {
        listElement.addEventListener('click', () => {
            listElement.classList.toggle('arrow');

            let height = 0;
            let menu = listElement.nextElementSibling;

            if (menu.clientHeight === 0) {
                height = menu.scrollHeight;
            }

            menu.style.height = `${height}px`;
        });
    });

    document.getElementById('lupa').addEventListener('click', function() {
        document.getElementById('search').select();
    });
});
