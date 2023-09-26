console.log("debug do codigo");

function capturarDados() {
  console.log("você clicou no botão capturar dados");

  const valorCampoNome = document.getElementById("campo-nome");
  console.log("nome: ", valorCampoNome.value);

  // verificar se o campo nome tem valor
  if (valorCampoNome.value.length == 0) {
    alert("campo nome é obrigatório!");

    return;
  }

  // maior >
  // menor <

  if (valorCampoNome.value.length < 3) {
    alert("campo nome precisa ter no minimo 3 letras");

    return;
  }

  // alert("cadastro realizado com sucesso!");
  const divCadastroOk = document.getElementById("cadastro-ok");
  divCadastroOk.style.display = "block";
  divCadastroOk.style.color = "green";
}
