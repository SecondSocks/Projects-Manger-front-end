import { H1 } from '../Text/H1'

export function Logo() {
	return (
		<div className='flex gap-3'>
			<div className='flex items-end gap-1.5'>
				<div className=''>
					<div className='w-[18px] h-[31px] rounded-[46px] bg-gradient-to-b from-[rgba(255,72,80,1)] to-[rgba(254,27,99,1)]' />
				</div>
				<div className='relative w-[18px] h-9'>
					<div className='fixed w-[18px] h-9 rounded-[40px] bg-gradient-to-b from-[rgba(14,175,235,1)] to-[rgba(14,148,212,1)]' />
				</div>
				<div className='relative w-[18px] h-[43px]'>
					<div className='fixed w-[18px] h-[43px] rounded-[34px] [background:linear-gradient(180deg,rgba(255,6,60,1)_0%,rgba(255,76,53,1)_100%)]' />
				</div>
			</div>
			<H1
				size='lg'
				content='Nexa'
				className='select-none cursor-default'
			/>
		</div>
	)
}
