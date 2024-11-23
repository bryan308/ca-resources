import { guides } from "@/lib/source"
import { createFromSource } from "fumadocs-core/search/server"

export const { GET } = createFromSource(guides)
