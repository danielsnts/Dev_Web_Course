var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() { // Definindo a dimensão do palco do jogo
	altura = window.innerHeight
	largura = window.innerWidth
	
	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()