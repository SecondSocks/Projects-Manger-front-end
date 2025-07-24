import Link from 'next/link'

export function ForgotPasswordLink() {
	return (
		<div className='flex justify-between mb-2'>
			<p>Forgot password?</p>
			<Link
				href='#'
				className='opacity-80 hover:opacity-100 transition-opacity'
			>
				Recover password
			</Link>
		</div>
	)
}
