/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'

import { verifyJwtToken } from '@/lib/jwt'
import { IUser } from '@/shared/types/user.types'

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const token = request.cookies.get('accessToken')?.value

	// Публичные Маршруты
	const publicPaths = ['/login/', '/register/', '/']
	if (publicPaths.some(path => pathname.startsWith(path))) {
		return NextResponse.next()
	}

	if (!token) return NextResponse.redirect(new URL('/login', request.url))

	try {
		const user = await verifyJwtToken<IUser>(token)

		if (pathname.startsWith('/dashboard') && !user.isAdmin) {
			return NextResponse.redirect(new URL('/', request.url))
		}

		return NextResponse.next()
	} catch (error) {
		return NextResponse.redirect(new URL('/login', request.url))
	}
}

export const config = {
	matcher: ['/dashboard/:path*', '/application/:path*']
}
