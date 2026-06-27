// Capturar o formulário 
const formEx04 = document.getElementById("formEx04");

formEx04.addEventListener("submit", function (evento) {

    evento.preventDefault();

    //Capturar inputs do html
    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const tamanho = document.getElementById("tamanho");
    const calda = document.getElementById("calda");
    const fruta = document.getElementById("fruta");
    const complemento = document.getElementById("complemento");

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

     //Testar tamanho
     if (tamanho.value.trim() == "") {
        // invalido 
        tamanho.classList.add("is-invalid")
        tamanho.classList.remove("is-valid")
    } else {
        // valido
        tamanho.classList.add("is-valid");
        tamanho.classList.remove("is-invalid")
    }

    //Testar calda
    if (calda.value.trim() == "") {
        // invalido 
        calda.classList.add("is-invalid")
        calda.classList.remove("is-valid")
    } else {
        // valido
        calda.classList.add("is-valid");
        calda.classList.remove("is-invalid")
    }

    //Testar fruta
    if (fruta.value.trim() == "") {
        // invalido 
        fruta.classList.add("is-invalid")
        fruta.classList.remove("is-valid")
    } else {
        // valido
        fruta.classList.add("is-valid");
        fruta.classList.remove("is-invalid")
    }

    //Testar complemento
    if (complemento.value.trim() == "") {
        // invalido 
        complemento.classList.add("is-invalid")
        complemento.classList.remove("is-valid")
    } else {
        // valido
        complemento.classList.add("is-valid");
        complemento.classList.remove("is-invalid")
    }

    console.log("Nome: " + nome.value);
    console.log("cpf: " + cpf.value);
    console.log("tamanho: " + tamanho.value);
    console.log("calda: " + calda.value);
    console.log("fruta: " + fruta.value);
    console.log("complemento: " + complemento.value);

});
