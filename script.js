let changeTheme = () => {
	if (theme.checked) {
		document.body.style.background = '#121212'
		document.body.style.color = '#fff'
		footer.classList.add('bg-dark')
		footer.classList.remove('bg-light')
		themeLabel.innerText = '☀'
	} else {
		document.body.style.background = '#fcfcfc'
		document.body.style.color = '#000'
		themeLabel.innerText = '🌙'
		footer.classList.add('bg-light')
		footer.classList.remove('bg-dark')
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