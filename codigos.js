console.log("debug do codigo");

function validaCampoSenha(event) {
  console.log(event);
}

document.addEventListener("change", validaCampoSenha);

function toWindowHome() {
  window.location.href = "http://127.0.0.1:5500/principal.html";
}

function capturarDados(event) {
  console.log("você clicou no botão capturar dados");

  const valorCampoEmail = document.getElementById("campo-email");
  const valorCampoSenha = document.getElementById("campo-senha");

  // verificar se o campo nome tem valor
  if (valorCampoEmail.value.length == 0) {
    const alertaEmail = document.getElementById("alerta-email");

    alertaEmail.style.display = "block";

    return;
  }

  if (valorCampoSenha.value.length < 3) {
    const alertaSenha = document.getElementById("alerta-senha");

    alertaSenha.style.display = "block";

    return;
  }

  window.location.href = "http://127.0.0.1:5500/principal.html";
}

function changeTypeInput() {
  const campoSenha = document.getElementById("campo-senha");
  const icone = document.getElementById("icon-eye");

  if (campoSenha.type == "password") {
    campoSenha.type = "text";
    icone.className = "fa-regular fa-eye";
  } else {
    campoSenha.type = "password";
    icone.className = "fa-regular fa-eye-slash";
  }
}
