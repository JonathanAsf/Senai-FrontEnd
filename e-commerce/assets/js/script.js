const input_cep = document.getElementById("cep");
const nome = document.getElementById("nome");
const username = document.getElementById("username");

input_cep.addEventListener("blur", () => {
  buscarCep(input_cep.value);
});

const buscarCep = (cep) => {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
      if (data.erro) return;
      const rua = document.getElementById("rua");
      const bairro = document.getElementById("bairro");
      const estado = document.getElementById("estado");
      if (rua)   rua.value = data.logradouro || "";
      if (bairro) bairro.value = data.bairro || "";
      if (estado) estado.value = data.uf || "";
    })
    .catch(err => console.error("Erro ViaCEP:", err));
};
