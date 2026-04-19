import { toggleTheme } from "./theme.js"
import { openSidebar, closeSidebar } from "./sidebar.js"
import { accordionOpenClose } from "./accordion.js"

const themeToggler = document.querySelector("[data-js='theme-toggler']")
themeToggler.addEventListener("click", toggleTheme)

// SIDEBAR 
const sidebarOpenButton = document.querySelector("[data-js='sidebar-open']")
sidebarOpenButton.addEventListener("click", openSidebar)

const sidebarCloseButtons = document.querySelectorAll("[data-js='sidebar-close']")
sidebarCloseButtons.forEach(close => close.addEventListener("click", closeSidebar))

// ACCORDION

const accordions = document.querySelectorAll("[data-js='accordion']")

accordions.forEach(accordion => {
	const toggler = accordion.querySelector("[data-js='accordion-toggler']")
	const content = accordion.querySelector("[data-js='accordion-content']")

	const openIcon = accordion.querySelector("[data-js='open-accordion-icon']")
	const closeIcon = accordion.querySelector("[data-js='close-accordion-icon']")

	toggler.addEventListener("click", () => accordionOpenClose(content, openIcon, closeIcon))
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
	toast.setAttribute("role", "status")
	toast.setAttribute("aria-live", "polite")
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