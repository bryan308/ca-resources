import Image from "next/image"
import React from "react"

function RenderThumbnail() {
	return (
		<div className="flex h-screen bg-white overflow-hidden">
			<div className="pl-20 py-20 flex flex-col justify-between h-full w-[70%]">
				<div>
					<h1 className="text-9xl">Introduction to JavaScript</h1>
					<h3 className="text-4xl">JavaScript Guides</h3>
				</div>
				<h4>CA Resources</h4>
			</div>
			<div className="w-2/4 h-screen">
				<Image
					src="/abstract.jpg"
					alt="abstract"
					width={5001}
					height={2916}
				/>
			</div>
		</div>
	)
}

export default RenderThumbnail
