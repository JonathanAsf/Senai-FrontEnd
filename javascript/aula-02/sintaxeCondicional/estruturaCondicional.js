// if(condicao){
// }else{
// }

let sinal = "vermelho";

// Exemplo if/else utilizando operador OR (||)
if (sinal == "verde" || sinal == "amarelo") {
  console.log("Permitido transitar");
  console.log(`Sinal ${sinal}`);
} else {
  console.log("Transito proibido");
  console.log(`Sinal ${sinal}`);
}

// Exemplo if/else utilizando operador Not (!)
if (sinal == !"verde" || sinal == "amarelo") {
  console.log("Permitido transitar");
  console.log(`Sinal ${sinal}`);
} else {
  console.log("Transito proibido");
  console.log(`Sinal ${sinal}`);
}
// ---------------
let idade = 18;
let temCarteira = true;

//Exemplo if/else utilizando operador AND (&&)
if (idade >= 18 && temCarteira == true) {
  console.log("Permissão para dirigir");
} else {
  console.log("Não possui permissão para dirigir");
}
