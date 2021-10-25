/*
 * Copyright (c) 2021 Samiun Nafis (SamiunNafis.github.io). All rights reserved.
 *
 * License under the GNU General Public License, Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Unless required by the applicable law or agreed in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
	let name = document.querySelector('.name')
	let nav = document.querySelector('.navbar')
	
	if (theme.checked) {
		document.body.style.background = '#121212'
		document.body.style.color = '#fff'
		footer.classList.add('bg-dark')
		footer.classList.remove('bg-light')
		themeLabel.innerText = '☀'
		im.style.color = '#0078ff'
		name.style.color = '#ffffff'
		name.classList.remove('bg-light')
		name.classList.add('bg-dark')
		nav.classList.remove('navbar-light')
		nav.classList.remove('bg-light')
		nav.classList.add('navbar-dark')
		nav.classList.add('bg-dark')
		
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
		name.style.color = '#000000'
		name.classList.remove('bg-dark')
		name.classList.add('bg-light')
		nav.classList.remove('navbar-dark')
		nav.classList.remove('bg-dark')
		nav.classList.add('navbar-light')
		nav.classList.add('bg-light')
		
		for (let i = 0; i < img.length; i++) {
			img[i].style.borderColor = '#333333'
		}
		
		for (let i = 0; i < card.length; i++) {
			card[i].style.background = '#fcfcfc'
		}
	}
}

theme.addEventListener('change', () => {
	changeTheme()
})

webvium.addEventListener('click', () => window.location.href = 'https://mrepol742.github.io/PROJECT-WEBVIUM')
chat.addEventListener('click', () => window.location.href = 'https://github.com/SamiunNafis/chat')
vgit.addEventListener('click', () => window.location.href = 'https://github.com/SamiunNafis/')
vrepo.addEventListener('click', () => window.location.href = 'https://github.com/SamiunNafis?tab=repositories')
show.addEventListener('click', () => window.location.replace(`projects/index.html?theme=${theme.checked}`))
dont.addEventListener('click', () => window.location.href = atob('aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUQ=='))
mj.addEventListener('click', () => window.location.href = 'https://mrepol742.github.io/')
