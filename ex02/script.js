// Capturar o formulário 
const formEx02 = document.getElementById("formEx02");

formEx02.addEventListener("submit", function (evento) {

    evento.preventDefault();

    //Capturar inputs do html
    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const pizza = document.getElementById("pizza");
    const tamanho = document.getElementById("tamanho");
    const bebida = document.getElementById("bebida");

    //Testar nome 
    if (nome.value.trim() == "") {
        // invalido 
        nome.classList.add("is-invalid")
        nome.classList.remove("is-valid")
    } else {
        // valido
        nome.classList.add("is-valid");
        nome.classList.remove("is-invalid")
    }

     //Testar cpf
     if (cpf.value.trim() == "") {
        // invalido 
        cpf.classList.add("is-invalid")
        cpf.classList.remove("is-valid")
    } else {
        // valido
        cpf.classList.add("is-valid");
        cpf.classList.remove("is-invalid")
    }

     //Testar sabor da pizza
     if (pizza.value.trim() == "") {
        // invalido 
        pizza.classList.add("is-invalid")
        pizza.classList.remove("is-valid")
    } else {
        // valido
        pizza.classList.add("is-valid");
        pizza.classList.remove("is-invalid")
    }

    //Testar tamanhos da pizza
    if (tamanho.value.trim() == "") {
        // invalido 
        tamanho.classList.add("is-invalid")
        tamanho.classList.remove("is-valid")
    } else {
        // valido
        tamanho.classList.add("is-valid");
        tamanho.classList.remove("is-invalid")
    }

    //Testar bebida
    if (bebida.value.trim() == "") {
        // invalido 
        bebida.classList.add("is-invalid")
        bebida.classList.remove("is-valid")
    } else {
        // valido
        bebida.classList.add("is-valid");
        bebida.classList.remove("is-invalid")
    }

});
