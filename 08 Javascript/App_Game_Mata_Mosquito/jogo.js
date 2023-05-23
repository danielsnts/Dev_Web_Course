var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() { // Definindo a dimensão do palco do jogo
	altura = window.innerHeight
	largura = window.innerWidth
	
	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() { //Fornece uma posição aleatória
	
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	
	//lógica ternária
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	
	//criar elemento html
	var mosquito = document.createElement('img')
	mosquito.src = "imagens/mosquito.png"
	mosquito.className = tamanhoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	
	document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
			
		case 1:
			return 'mosquito2'
			
		case 2:
			return 'mosquito3'
	}
}