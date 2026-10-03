const cpfInput = document.querySelector("#cpf");
const phoneInput = document.querySelector("#phone");
const cepInput = document.querySelector("#cep");

const form = document.querySelector("#volunteer-form");
const formMessage = document.querySelector("#form-message");


/* =========================
   MÁSCARA CPF
========================= */

cpfInput.addEventListener("input", function () {

    let value = cpfInput.value.replace(/\D/g, "");

    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpfInput.value = value;

});


/* =========================
   MÁSCARA TELEFONE
========================= */

phoneInput.addEventListener("input", function () {

    let value = phoneInput.value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");

    phoneInput.value = value;

});


/* =========================
   MÁSCARA CEP
========================= */

cepInput.addEventListener("input", function () {

    let value = cepInput.value.replace(/\D/g, "");

    value = value.replace(/^(\d{5})(\d)/, "$1-$2");

    cepInput.value = value;

});


/* =========================
   ENVIO DO FORMULÁRIO
========================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!form.checkValidity()) {

        form.reportValidity();

        return;
    }

    formMessage.textContent =
        "Cadastro realizado com sucesso! Obrigado por querer fazer parte da ONG Esperança.";

    formMessage.style.marginTop = "20px";
    formMessage.style.fontWeight = "bold";

    form.reset();

});