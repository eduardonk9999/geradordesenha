/**
 * Criar um form com opções de:
 * tem que ter a onde vai aparecer a senha
 * number inpit number
 * include uppercade input select
 * include numbers input select
 * include symbols input select
 * por fim btn de enviar "Gerar Senha"
 * Eu tenho que usar o ASCII Character Codes Table
 *
 */

//concat
// Math.foor(Math.random() * caracteres)


//ACHO QUE PRIMEIRO DE TUDO TENHO QUE CONSEGUIR PEGAR DE 1 ATÉ 9, dai baseado
// na quantidade de caraterers que eu escolher no front, tem que ser gerado a senha
// entre 0 e 9


const letras = document.querySelector('.letras')
const numeros = document.querySelector('.numeros')
const simbolos = document.querySelector('.simbolos')
const quantidadeNumeros = document.querySelector('.quantidade')
const quantidadeNumerosFront = document.querySelector('.quantidadeNumeros')
const form = document.querySelector('.form')

quantidadeNumeros.addEventListener('input', quantidadeCaracteres)
quantidadeNumerosFront.addEventListener('input', quantidadeCaracteres)


function quantidadeCaracteres(e) {
  const value = e.target.value
  quantidadeNumerosFront.value = value
  quantidadeNumeros.value = value

 
  validaSenhaComQuantidadeCerta(quantidadeNumeros.value = value)
}

const arraySenha = []
const arraySenhaParaserValidada = []

form.addEventListener('submit', e => {
  e.preventDefault()

 geraCaracters(letras, numeros, simbolos)
 preparaCaracteres()
 validaSenha()
})


function geraCaracters(letras, numeros, simbolos) {
  console.log(letras, numeros, simbolos)
  if(letras.checked === true) {
    let caracterStrings = String.fromCharCode(
      97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,
      120,121,122)
      
    arraySenha.push(caracterStrings)
  }
  if(numeros.checked === true) {
    for(let i = 0; i < 10; i++) {
      arraySenha.push(i)
    }
  }
  if(simbolos.checked === true) {
    let caracterEspeciais = String.fromCharCode(33,34,35,36,37,38,39,40,41,42,43)
      
    arraySenha.push(caracterEspeciais)
  }
}



function preparaCaracteres() {
  let passaArrayParaStrings = arraySenha.join()
  //console.log(passaArrayParaStrings)  
  arraySenhaParaserValidada.push(passaArrayParaStrings)
}

function validaSenhaComQuantidadeCerta(time) {
  console.log(arraySenhaParaserValidada)
  console.log(Number(time))
  // Preciso montar a logica da quantidada de caracter escolhido, dependendo da quantidade escolhida eu monto a senha;

}
