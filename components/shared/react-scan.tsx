"use client"

import { scan } from "react-scan"
import { JSX, useEffect } from "react"

export function ReactScan(): JSX.Element {
	useEffect(() => {
		scan({
			enabled: process.env.NODE_ENV === "development",
		})
	}, [])

	return <></>
}
