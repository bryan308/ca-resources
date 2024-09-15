import { withContentCollections } from "@content-collections/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig)
