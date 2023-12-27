

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
function fakeSubscribe() {
    var fakeEmail = document.getElementById("fakeEmail").value;

    if (fakeEmail !== "") {
        alert("¡Gracias por suscribirte! Te enviaremos información exclusiva a: " + fakeEmail);
    } else {
        alert("Por favor, ingresa tu correo electrónico.");
    }
}