import { IconMenu2 } from "@tabler/icons-react"
import Link from "next/link"
import { overview, resources } from "@/data/links"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import ModeToggle from "./mode-toggle"
import { Separator } from "../ui/separator"
import SheetLinks from "./sheet-links"
import { Box } from "lucide-react"

function Header() {
	return (
		<header className="bg-background-foreground z-100 fixed top-0 mx-auto w-full max-w-[76.25rem] md:sticky border-border border-b xl:border-l xl:border-r z-50">
			<div className="flex w-full max-w-[76.188rem] pl-[1.375rem]">
				<div className="border-border flex grow items-center gap-4 border-r-0 xl:border-r py-4 pl-px xl:w-[14.8125rem] xl:grow-0">
					<Link
						className="flex items-center gap-2 no-underline font-semibold"
						href="/"
					>
						<Box className="size-4" />
						CA Resources
					</Link>
				</div>
				<div className="flex items-center justify-end p-4 xl:grow xl:border-none border-l border-border">
					<div className="hidden xl:block">
						<ModeToggle />
					</div>
					<div className="xl:hidden block size-6">
						<Sheet>
							<SheetTrigger aria-label="Trigger sidebar menu">
								<IconMenu2 />
							</SheetTrigger>
							<SheetContent
								side="left"
								className="border-border"
							>
								<SheetHeader>
									<SheetTitle asChild>
										<Link
											className="flex items-center gap-2 no-underline font-semibold"
											href="/"
										>
											<Box className="size-4" />
											CA Resources
										</Link>
									</SheetTitle>
								</SheetHeader>
								<div
									style={{ height: "80vh" }}
									className="flex flex-col mt-6 overflow-y-auto"
								>
									<SheetLinks
										header="Overview"
										paths={overview}
										isGuide={false}
									/>
									<Separator className="mb-2 mt-8" />
									<SheetLinks
										header="Resources"
										paths={resources}
										isGuide={false}
									/>
									<Separator className="mb-2 mt-8" />
									<SheetLinks
										header="HTML Guides"
										isGuide={true}
										category="html"
									/>
									<Separator className="mb-2 mt-8" />
									<SheetLinks
										header="JavaScript Guides"
										isGuide={true}
										category="javascript"
									/>
									<Separator className="mb-2 mt-8" />
									<ModeToggle />
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
