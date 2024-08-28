var jogahtml = window.document.getElementById('saida')

function clique1() {
    jogahtml.innerHTML += '<p> Você clicou escolheu a primeira opção = NADA ACONTECEU</p>'
}

function clique2() {
    jogahtml.innerHTML += '<p> Você Clicou escolheu a primeira opção = NADA ACONTECEU DE NOVO</p>'
}

function clique3() {
    jogahtml.innerHTML += '<p> Você clicou escolheu a primeira opção = NADINHA </p>'
}

function clique4() {
    jogahtml.innerHTML += '<p> Você clicou escolheu a primeira opção = ISSO AE, NADA </p>'
}


function parimpar() {
   let num = Number(window.prompt('Digite um número: '))
   let tipo
   if (num % 2 == 0) {
       tipo = '<strong>PAR</strong>'
   } else {
       tipo = '<strong>IMPAR</strong>'
   }

   let res = document.querySelector('section#result')
   res.innerHTML = `<p>0 número digitado foi $(num) e ele é: ${tipo}! </p>` 
} 
