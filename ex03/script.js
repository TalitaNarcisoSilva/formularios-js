// Capturar o formulário 
const formEx03 = document.getElementById("formEx03");

formEx03.addEventListener("submit", function (evento) {

    evento.preventDefault();

    //Capturar inputs do html
    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const ano = document.getElementById("ano");
    const genero = document.getElementById("genero");

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

     //Testar titulo
     if (titulo.value.trim() == "") {
        // invalido 
        titulo.classList.add("is-invalid")
        titulo.classList.remove("is-valid")
    } else {
        // valido
        titulo.classList.add("is-valid");
        titulo.classList.remove("is-invalid")
    }

    //Testar autor
    if (autor.value.trim() == "") {
        // invalido 
        autor.classList.add("is-invalid")
        autor.classList.remove("is-valid")
    } else {
        // valido
        autor.classList.add("is-valid");
        autor.classList.remove("is-invalid")
    }

    //Testar ano
    if (ano.value.trim() == "") {
        // invalido 
        ano.classList.add("is-invalid")
        ano.classList.remove("is-valid")
    } else {
        // valido
        ano.classList.add("is-valid");
        ano.classList.remove("is-invalid")
    }

    //Testar genero
    if (genero.value.trim() == "") {
        // invalido 
        genero.classList.add("is-invalid")
        genero.classList.remove("is-valid")
    } else {
        // valido
        genero.classList.add("is-valid");
        genero.classList.remove("is-invalid")
    }

    console.log("Nome: " + nome.value);
    console.log("cpf: " + cpf.value);
    console.log("titulo: " + titulo.value);
    console.log("autor: " + autor.value);
    console.log("ano: " + ano.value);
    console.log("genero: " + genero.value);

});
