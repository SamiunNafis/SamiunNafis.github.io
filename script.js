try {
	var typedLogo = new Typed('#type', {
		strings: ['Hey there, <span class="wave"></span>', '<span class="iam" style="display:inline;">I am</span>','<span class="span" style="display:inline;">Samiun Nafis</span>'],
		typeSpeed: 120,
		backSpeed: 40,
		backDelay: 600,
		startDelay: 800,
		cursorChar: '_',
		loop: false
	});
} catch (e) {
	typed.innerHTML = '<h1>Hey there, <span class="wave"></span></h1><h2><span class="iam" style="display:inline;">I am</span> <span class="span" style="display:inline;">Samiun Nafis</span></h2>'
	typed.style.flexDirection = 'column'
	typed.style.alignItems = 'flex-start'
}

window.addEventListener('scroll', reveal)
reveal();
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

let changeTheme = () => {
	let im = document.querySelector('.iam') || type
	let img = document.querySelectorAll('.img')
	let card = document.querySelectorAll('.card')
	
	if (theme.checked) {
		document.body.style.background = '#121212'
		document.body.style.color = '#fff'
		footer.classList.add('bg-dark')
		footer.classList.remove('bg-light')
		themeLabel.innerText = '☀'
		im.style.color = '#0078ff'
		
		for (let i = 0; i < img.length; i++) {
			img[i].style.borderColor = '#fcfcfc'
		}
		
		for (let i = 0; i < card.length; i++) {
			card[i].style.background = '#333333'
		}
	} else {
		document.body.style.background = '#eee'
		document.body.style.color = '#000'
		themeLabel.innerText = '🌙'
		footer.classList.add('bg-light')
		footer.classList.remove('bg-dark')
		im.style.color = '#0078ff'
		
		for (let i = 0; i < img.length; i++) {
			img[i].style.borderColor = '#333333'
		}
		
		for (let i = 0; i < card.length; i++) {
			card[i].style.background = '#fcfcfc'
		}
	}
}

theme.checked = true;
changeTheme()

theme.addEventListener('change', () => {
	changeTheme()
})

webvium.addEventListener('click', () => {
	window.location.href = 'https://SamiunNafis.github.io/PROJECT-WEBVIUM'
})

chat.addEventListener('click', () => {
	window.location.href = 'https://github.com/SamiunNafis/chat'
})

vgit.addEventListener('click', () => {
	window.location.href = 'https://github.com/SamiunNafis/'
})

show.addEventListener('click', () => window.location.replace(`projects/index.html?theme=${theme.checked}`))