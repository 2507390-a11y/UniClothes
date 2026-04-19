let toastTimeout

document.fonts.ready.then(() => {})

export function showCartToast(productName) {
	const existing = document.querySelector(".cart-toast")
	if (existing) existing.remove()
	clearTimeout(toastTimeout)

	const toast = document.createElement("div")
	toast.className = "cart-toast hidden"
	toast.setAttribute("role", "status")
	toast.setAttribute("aria-live", "polite")
	toast.textContent = `"${productName}" adicionado ao carrinho`
	document.body.appendChild(toast)

	requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.remove("hidden")))

	toastTimeout = setTimeout(() => {
		toast.classList.add("hidden")
		setTimeout(() => toast.remove(), 300)
	}, 2500)
}