import Link from 'next/link'

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
							>
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem
								href='#'
								title='Introduction'
							>
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem
								href='#'
								title='Introduction'
							>
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem
								href='#'
								title='Introduction'
							>
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href='/docs'
						passHref
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Documentation
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href='/pricing'
						passHref
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Pricing
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href='/contact-us'
						passHref
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Contact Us
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href='/blog'
						passHref
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Blog
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
