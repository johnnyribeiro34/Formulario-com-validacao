document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário se houver erros

    const inputs = document.querySelectorAll("#campo");
    let formValido = true;

    inputs.forEach((campo) => {
      campo.classList.remove("error");
      campo.nextElementSibling.textContent = "";
    });

    // Valida cada campo
    inputs.forEach((campo) => {
      if (campo.value.trim() === "") {
        campo.classList.add("error"); // Adiciona a classe de erro (borda vermelha)
        campo.nextElementSibling.textContent = "Campo obrigatório"; // Exibe mensagem de erro
        formValido = false;
      } else if (campo.value !== "") {
        campo.classList.add("correto");
      }
    });

    if (formValido) {
      alert("Formulário enviado com sucesso!");
      this.submit();
    }
  });
