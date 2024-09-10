import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { IconMenu2 } from "@tabler/icons-react"
import { getAllPaths } from "@/lib/get-paths"
import { overview, resources } from "@/data/links"
import Box from "./icons/box"
import { ModeToggle } from "./theme-switcher"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

function Header() {
	const componentPaths = getAllPaths()

	return (
		<header className="bg-background-foreground z-100 fixed top-0 mx-auto w-full max-w-[76.25rem] md:sticky border-border border-b xl:border-l xl:border-r z-50">
			<div className="flex w-full max-w-[76.188rem] pl-[1.375rem]">
				<div className="border-border flex grow items-center gap-4 border-r-0 xl:border-r py-4 pl-px xl:w-[14.8125rem] xl:grow-0">
					<Link
						className="flex items-center gap-2 no-underline font-semibold"
						href="/"
					>
						<Box />
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
							<SheetContent side="left" className="border-border">
								<div className="h-full flex flex-col justify-between overflow-y-auto mt-4">
									<div>
										<div className="my-4">
											<h3>Overview</h3>
											{overview.map((o, i) => (
												<SheetTrigger
													key={i}
													asChild
												>
													<Link
														href={o.path}
														className="text-muted-foreground text-lg flex items-center gap-2 mb-2"
													>
														<ArrowRight className="size-4 text-muted-foreground" />
														{o.text}
													</Link>
												</SheetTrigger>
											))}
										</div>
										<div className="my-4">
											<h3>Resources</h3>
											{resources
												.sort((a, b) => a.text.localeCompare(b.text))
												.map((r, i) => (
													<SheetTrigger
														key={i}
														asChild
													>
														<Link
															href={r.path}
															className="text-muted-foreground text-lg flex items-center gap-2 mb-2"
														>
															<ArrowRight className="size-4 text-muted-foreground" />
															{r.text}
														</Link>
													</SheetTrigger>
												))}
										</div>
										<div className="my-4">
											<h3>Guides</h3>
											{componentPaths
												.sort((a, b) => a.title.localeCompare(b.title))
												.map((p, i) => (
													<SheetTrigger
														key={i}
														asChild
													>
														<Link
															href={`/guides/${p.slug}`}
															className="text-muted-foreground text-lg flex items-center gap-2 mb-2"
														>
															<ArrowRight className="size-4 text-muted-foreground" />
															{p.title}
														</Link>
													</SheetTrigger>
												))}
										</div>
									</div>
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
