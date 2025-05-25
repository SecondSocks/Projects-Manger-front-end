export default function HomePage() {
	return (
		<div>
			<div className='bg-background w-25 h-25'>
				<h1>Home page</h1>
			</div>
			<div className='dark:bg-background w-25 h-25'>
				<h1 className='dark:text-foreground'>Home page</h1>
			</div>
		</div>
	)
}
