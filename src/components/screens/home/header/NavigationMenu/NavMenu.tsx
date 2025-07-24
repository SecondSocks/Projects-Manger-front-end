import { useRouter } from 'next/navigation'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import { ListItem } from './ListItem'

export function NavMenu() {
	const router = useRouter()

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
							<ListItem
								href='#'
								title='Introduction'
								onClick={() => router.push('/')}
							>
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem
								href='#'
								title='Introduction'
								onClick={() => router.push('/')}
							>
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem
								href='#'
								title='Introduction'
								onClick={() => router.push('/')}
							>
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem
								href='#'
								title='Introduction'
								onClick={() => router.push('/')}
							>
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						onClick={() => router.push('/')}
					>
						Documentation
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						onClick={() => router.push('/')}
					>
						Pricing
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						onClick={() => router.push('/')}
					>
						Contact Us
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						onClick={() => router.push('/')}
					>
						Blog
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
