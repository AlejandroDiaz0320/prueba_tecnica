    const btn = document.querySelector('#btn-submit');
    const form = document.querySelector('#form-user');


    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        let regexNumero = /^[0-9]+$/;
        const data = new FormData(form);
        const values = [...data.entries()];
        console.log(values)
        if (values.length < 5) {
            valida_campo('datosCheck', 'add')
        } else {
            valida_campo('datosCheck', 'remove')
        }
        let posValue = 1
        values.forEach(element => {
            if (element[1] == '') {
                valida_campo(element[0], 'add')
            } else {
                valida_campo(element[0], 'remove')
            }
            if (posValue == 3 && regexNumero.test(element[1]) == false) {
                valida_campo(element[0], 'add')
            }
            if (posValue == 4 && regexCorreo.test(element[1]) == false) {
                valida_campo(element[0], 'add')
            }
            posValue++
        });
    });

    function valida_campo(elemento, accion) {
        console.log(elemento)
        switch (accion) {
            case 'remove':
                document.querySelector(`#${elemento}`).classList.remove("border", "border-danger", "border-4");
                break;
            case 'add':
                document.querySelector(`#${elemento}`).classList.add("border", "border-danger", "border-4");
                break;
        }
    }