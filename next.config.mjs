import { withContentCollections } from "@content-collections/next"

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

export default withContentCollections(config)

// ! MIGRATING TO FUMADOCS / CONTENT-COLLECTIONS
// import { withContentlayer } from "next-contentlayer2"
// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: true,
// }
// export default withContentlayer(nextConfig)
