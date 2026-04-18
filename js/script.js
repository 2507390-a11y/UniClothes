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