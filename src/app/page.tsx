import PageHeader from "@/components/shared/page-header"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Introduction() {
	return (
		<>
			<section>
				<PageHeader>Introduction</PageHeader>
				<h4>Welcome to CA Resources!</h4>
				<p>
					It is a website designed to improve productivity, especially for web development, among
					other fields in education. It provides the most valuable resources and guides.
				</p>
			</section>
			<section>
				<h2 className="text-2xl text-foreground font-bold mb-2">Inspired by</h2>
				<p>
					The conceptualization of CA Resources is influenced by the{" "}
					<Link
						href="https://vercel.com/geist/introduction"
						target="_blank"
						className="link"
					>
						Vercel Geist Design System
					</Link>
					.
				</p>
			</section>
			<section>
				<p className="mt-0">
					<strong className="text-foreground">CA Resources</strong> was created and managed by{" "}
					<Link
						href="https://cdrcangulo.vercel.app/"
						target="_blank"
						className="link"
					>
						Cedric Angulo
					</Link>
					.
				</p>
			</section>
			{/* <section>
				<h3>Contribute</h3>
				<p>
					CA Resources is an open-source project. You can view the code, contribute, or suggest
					improvements by visiting the{" "}
					<Link
						href="https://github.com/bryan308/ca-resources"
						target="_blank"
						className="link"
					>
						Github Repository
					</Link>
					.
				</p>
				<Separator className="my-6" />
				<h4>Contributors</h4>
				<div className="flex gap-2 py-4">
					<Avatar>
						<AvatarImage src="/avatar-test.jpg" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarImage src="/avatar-test.jpg" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</section> */}
		</>
	)
}
