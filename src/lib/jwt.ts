/* eslint-disable @typescript-eslint/no-unused-vars */
import { JWTPayload, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function verifyJwtToken<T = JWTPayload>(
	token: string
): Promise<T> {
	try {
		const { payload } = await jwtVerify(token, secret)
		return payload as T
	} catch (error) {
		throw new Error('Invalid token')
	}
}
