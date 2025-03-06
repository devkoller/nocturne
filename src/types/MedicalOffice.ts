export interface MedicalOfficeType {
	id: number
	name: string
	description?: string
	street?: string
	neighborhood?: string
	city?: string
	state?: string
	country?: string
	zip_code?: string
	phone?: string
	whatsapp?: string
	email?: string
	latitude?: number
	longitude?: number
	attention_days?: string
	payment_methods?: string
	active?: boolean
	public?: boolean
}
