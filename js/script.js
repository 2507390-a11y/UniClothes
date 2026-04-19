// THEME 
const themeToggler = document.querySelector("[data-js='theme-toggler']")

themeToggler.addEventListener("click", () => {
	const root = document.documentElement
	
	if(root.classList.contains("dark")) {
		root.classList.remove("dark")
		return root.classList.add("light")
	}

	root.classList.remove("light")
	root.classList.add("dark")
})

// SIDEBAR 
const sidebar = document.querySelector("[data-js='sidebar']")

const sidebarOpen = document.querySelector("[data-js='sidebar-open']")

sidebarOpen.addEventListener("click", () => {

	if (sidebar.classList.contains("hidden")) {
		sidebar.classList.remove("hidden")
	}
})

const sidebarClose = document.querySelectorAll("[data-js='sidebar-close']")

sidebarClose.forEach(close => {
	close.addEventListener("click", () => {
		sidebar.classList.remove("visible")
		sidebar.classList.add("hidden")
	})
})

// ACCORDION
const accordions = document.querySelectorAll("[data-js='accordion']")

accordions.forEach(accordion => {
	const accordionToggler = accordion.querySelector("[data-js='accordion-toggler']")
	const accordionContent = accordion.querySelector("[data-js='accordion-content']")

	const openAccordionIcon = accordion.querySelector("[data-js='open-accordion-icon']")
	const closeAccordionIcon = accordion.querySelector("[data-js='close-accordion-icon']")

	accordionToggler.addEventListener("click", () => {
		 if(accordionContent.classList.contains("hidden")) {
				openAccordionIcon.classList.add("hidden")
				closeAccordionIcon.classList.remove("hidden")

				return accordionContent.classList.remove("hidden")
		 }

		 accordionContent.classList.add("hidden")

		 closeAccordionIcon.classList.add("hidden")
		 openAccordionIcon.classList.remove("hidden")
	})
})


// CART
const cartBadge = document.querySelector("[data-js='cart-badge']")
const addToCartButtons = document.querySelectorAll("[data-js='add-to-cart']")

let cartCount = 0
let toastTimeout

function showCartToast(productName) {
	const existing = document.querySelector(".cart-toast")
	if (existing) existing.remove()
	clearTimeout(toastTimeout)

	const toast = document.createElement("div")
	toast.className = "cart-toast"
	toast.textContent = `"${productName}" adicionado ao carrinho`
	document.body.appendChild(toast)

	toastTimeout = setTimeout(() => {
		toast.classList.add("hidden")
		setTimeout(() => toast.remove(), 300)
	}, 2500)
}

addToCartButtons.forEach(button => {
	button.addEventListener("click", () => {
		cartCount++

		cartBadge.textContent = cartCount
		cartBadge.classList.remove("hidden")
		cartBadge.classList.remove("bump")
		
		requestAnimationFrame(() => {
			cartBadge.classList.add("bump")
		})

		const productName = button.closest("[data-js='product-item']").querySelector("h3").textContent.trim()
		showCartToast(productName)
	})
})