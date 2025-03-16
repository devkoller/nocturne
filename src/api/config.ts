export const PORT = window.location.protocol === "http:" ? ":3020" : ":3011"

export const API_URL = import.meta.env.DEV
	? `http://${window.location.hostname}${PORT}`
	: "https://backend.nocturne-labs.com"
