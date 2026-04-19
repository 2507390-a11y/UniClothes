const sidebar = document.querySelector("[data-js='sidebar']")

export function openSidebar() {
	if (sidebar.classList.contains("hidden")) {
		sidebar.classList.remove("hidden")
	}
}

export function closeSidebar() {
	sidebar.classList.remove("visible")
	sidebar.classList.add("hidden")
}