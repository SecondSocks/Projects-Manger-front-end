export interface IUser {
	id: string
	name: string | null
	surname: string | null
	age: number | null
	email: string
	phoneNumber: string | null
	password: string
	avatar: string | null
	aboutMe: string | null
	country: string | null
	isAdmin: boolean
	createdAt: string
	updatedAt: string
}
