// Menu Responsivo
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

// Máscaras de Input
document.addEventListener("DOMContentLoaded", () => {
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    cpf.addEventListener("input", () => {
        let value = cpf.value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpf.value = value;
    });

    telefone.addEventListener("input", () => {
        let value = telefone.value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
        telefone.value = value;
    });

    cep.addEventListener("input", () => {
        let value = cep.value.replace(/\D/g, "");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        cep.value = value;
    });

    // Validação de envio
    const form = document.getElementById("formVoluntario");
    form.addEventListener("submit", (event) => {
        alert("Cadastro enviado com sucesso! Obrigado por se voluntariar 💙");
        event.preventDefault(); // Evita recarregar a página
        form.reset();
    });
});
