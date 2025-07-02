export class ClientUrls {
	static BASE_URL = 'http://localhost:3000'
	static LOGIN = `${this.BASE_URL}/login`
	static REGISTER = `${this.BASE_URL}/register`
}

export class ServerUrls {
	static BASE_URL = 'http://localhost:4200/api'
	static AUTH = {
		LOGIN: `${this.BASE_URL}/auth/login`,
		REGISTER: `${this.BASE_URL}/auth/register`,
		NEW_TOKENS: `${this.BASE_URL}/auth/login/access-token`
	}
}
