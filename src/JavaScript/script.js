function validar() {

    var usu = document.getElementById("user").value;
    var sen = document.getElementById("password").value;
    var lj = document.getElementById("lj").value;

    if (usu == '' || sen == '' || lj == '') {
        alert("Por favor informe todos os Campos");
    } else {

        document.getElementById("form_autent").submit();
    }

}
function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58))
        return true;
    else {
        if (tecla == 8 || tecla == 0)
            return true;
        else
            return false;
    }
}