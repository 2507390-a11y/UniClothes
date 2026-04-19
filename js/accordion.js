export function accordionOpenClose(content, openIcon, closeIcon) {
	if(content.classList.contains("hidden")) {
		openIcon.classList.add("hidden")
		closeIcon.classList.remove("hidden")

		content.classList.remove("hidden")			
		content.style.height = "0px"

		return requestAnimationFrame(() => {
			content.style.height = content.scrollHeight + "px"
		})
	}

	content.style.height = "0px"
		
	closeIcon.classList.add("hidden")
	openIcon.classList.remove("hidden")

	content.addEventListener("transitionend", () => {
		if(content.style.height === "0px") content.classList.add("hidden")
	}, { once: true })
}