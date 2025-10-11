let input_cep = document.getElementById("cep");
let input_rua = document.getElementById("rua");
let input_estado = document.getElementById("estado");
let input_bairro = document.getElementById("bairro");

input_cep.addEventListener("input", () => {
  buscarCep(input_cep.value)
});

const buscarCep = (cep) =>{
  if(cep.length== 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data)=>{
            input_rua.value = data.logradouro
            input_estado.value = data.estado
            input_bairro.value = data.bairro
        })
    }
  }