let theme = new URLSearchParams(window.location.search).get('theme')
theme = theme || 'true'

let card = document.querySelectorAll('.card')

if (theme === 'true') {
	document.body.style.background = '#121212'
	document.body.style.color = '#fff'
	
	for (let i = 0; i < card.length; i++) {
		card[i].style.background = '#333333'
	}
} else {
	document.body.style.background = '#fcfcfc'
	document.body.style.color = '#000'
	
	for (let i = 0; i < card.length; i++) {
		card[i].style.background = '#fcfcfc'
	}
}

window.addEventListener('scroll', reveal)
reveal()

function reveal() {
	let items = document.querySelectorAll('.item')
	
	for (let i = 0; i < items.length; i++) {
		let windowHeight = window.innerHeight;
		let revealTop = items[i].getBoundingClientRect().top;
		let distance = 50;
		
		if (revealTop < windowHeight - distance) {
			items[i].classList.add('active')
		} else {
			items[i].classList.remove('active')
		}
	}
	
}


webvium.addEventListener('click', () => {
	window.location.href = 'https://SamiunNafis.github.io/PROJECT-WEBVIUM'
})

chat.addEventListener('click', () => {
	window.location.href = 'https://github.com/SamiunNafis/chat'
})

insight.addEventListener('click', () => {
	window.location.href = 'https://github.com/SamiunNafis/insight'
})