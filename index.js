/* Trabalho de IHC */
/* Alunos: Pedro Augusto, Isaque Gherardi */
/* Professor: Thiago Jabur Bitar */

/* 
Como descrito no trabalho, a validação deve ser feita utilizando JavaScript,
dessa forma utilizamos os recursos da linguagem para validar o input da
seguinte maneira:
  nome de usuário:
    - deve sempre ser maior ou igual a 5 caracteres
  senha: 
    - deve ser maior que 5 caracteres e conter pelo menos 1 numero
    - as duas senhas inseridas devem ser iguais
  email:
    - o email deve conter @ e . ( validação de email seguindo o padrão
    RFC 5322 é extremamente complexo e foge do escopo da matéria)

*/ 

/* validação de registro */

const errorDiv = document.getElementById("errorDiv");
const btn = document.getElementById("submit-btn");

function toggleBtn() {
  if (errorDiv.classList.contains("hidden")) {
    btn.style.opacity = 1;
    btn.disabled = false;
  }
  else {
    btn.style.opacity = 0.5;
    btn.disabled = true;
  }
  btn.ClassList.contains("disabled") ? btn.classList.remove("disabled") : btn.classList.add("disabled");
}

function validateUsrname() {
  const usr = document.getElementById("username").value;
  if (usr.length <= 5) {
    errorDiv.classList.remove("hidden");
    errorDiv.innerHTML = "<p class=\"text-lg pl-4\">Nome de usuário muito pequeno</p>";
    toggleBtn();
    return false;
  }
  else {
    if (!errorDiv.classList.contains("hidden")) errorDiv.classList.add("hidden");
    toggleBtn();
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  let re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    errorDiv.classList.remove("hidden");
    errorDiv.innerHTML = "<p class=\"text-lg pl-4\">O email não é valido</p>";
    toggleBtn();
    return false;
  }
  else {
    if (!errorDiv.classList.contains("hidden")) errorDiv.classList.add("hidden");
    toggleBtn();
    return true;
  }
}

function validatePwd() {
  const pwd = document.getElementById("password").value;
  if (pwd.search(/\d/) == -1) {
    errorDiv.classList.remove("hidden");
    errorDiv.innerHTML = "<p class=\"text-lg pl-4\">A senha não contém números</p>";
    toggleBtn();
    return false;
  }
  else if (pwd.length < 5) {
    errorDiv.classList.remove("hidden");
    errorDiv.innerHTML = "<p class=\"text-lg pl-4\">A senha fornecida é muito curta</p>";
    toggleBtn();
    return false;
  }
  else {
    if (!errorDiv.classList.contains("hidden")) errorDiv.classList.add("hidden");
    toggleBtn();
    return true;
  }
}

function confirmPwd() {
  const pwdConfirm = document.getElementById("pwd-confirm").value;
  const pwd = document.getElementById("password").value;
  if (pwdConfirm != pwd) {
    errorDiv.classList.remove("hidden");
    errorDiv.innerHTML = "<p class=\"text-lg pl-4\">As senhas não correspondem</p>";
    toggleBtn();
    return false;
  }
  else {
    if (!errorDiv.classList.contains("hidden")) errorDiv.classList.add("hidden");
    toggleBtn();
    return true;
  }
}

