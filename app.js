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



form.addEventListener('submit', e => {
  e.preventDefault()
  
})

function quantidadeCaracteres(e) {
  const value = e.target.value
  quantidadeNumerosFront.value = value
  quantidadeNumeros.value = value
}