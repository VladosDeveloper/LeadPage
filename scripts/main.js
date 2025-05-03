const burgerBtn = document.querySelector('.mobile-header__burger')
const headerNavList = document.querySelector('header ul')
const mobileHeader = document.querySelector('header')
const mainContentInfoIcon = document.querySelectorAll('.main-content__info .icon')
const headerNavListItem = document.querySelectorAll('.header-nav__list-item a')

const closeIcon = `
<svg viewBox="0 0 24 24" width="40" height="40" fill="#fff">
  <path d="M18 6L6 18M6 6l12 12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const burgerIcon = `
<svg viewBox="0 0 256 256" width="40" height="40" fill-rule="nonzero">
  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
       stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
       font-size="none" style="mix-blend-mode: normal">
        <g transform="scale(5.12,5.12)">
            <path
                    d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"/>
        </g>
    </g>
</svg>
`;



const toggleActiveClassName = () => {
	mobileHeader.classList.toggle('active')
	if (mobileHeader.classList.contains('active')) {
		headerNavList.style.left = '0'
		document.body.style.overflow = 'hidden';
		burgerBtn.innerHTML =  closeIcon
		return
	}
	headerNavList.style.left = '-100%'
	burgerBtn.innerHTML =  burgerIcon
	document.body.style.overflow = '';
}


headerNavListItem.forEach((item) => {
	item.addEventListener('click', toggleActiveClassName)
})

const resizeObserver = (e) => {
	if (e.currentTarget.innerWidth < 768) {
		burgerBtn.style.display = 'block'
		mobileHeader.classList.replace('header', 'mobile-header')
		headerNavList.classList.replace('header-nav__list', 'mobile-header-nav__list')
		burgerBtn.addEventListener('click', toggleActiveClassName)
		mainContentInfoIcon.forEach((item) => {
			item.setAttribute('viewBox', '0 0 55 55');
		})
	} else {
		burgerBtn.style.display = 'none'
		burgerBtn.removeEventListener('click',toggleActiveClassName)
		mobileHeader.classList.replace('mobile-header', 'header')
		headerNavList.classList.replace('mobile-header-nav__list', 'header-nav__list')
		mainContentInfoIcon.forEach((item) => {
			item.setAttribute('viewBox', '0 0 39 37');
		})
	}
}

window.addEventListener('load', resizeObserver)
window.addEventListener('resize', resizeObserver)


