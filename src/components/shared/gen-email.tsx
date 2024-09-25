/**
 * Email Generator
 * 
 * * This component is intended for demonstration purposes only. You can achieve similar functionality by utilizing the code example provided on this page.
 */

"use client"

import { useRef, useState } from "react"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Card, CardContent } from "../ui/card"

export const EmailGenerator = () => {
	const firstRef = useRef<HTMLInputElement>(null)
	const lastRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLParagraphElement>(null)
	const [hasInteracted, setHasInteracted] = useState(false)

	const generateEmail = () => {
		if (firstRef.current && lastRef.current && emailRef.current) {
			const email = `${firstRef.current.value}${lastRef.current.value}@gmail.com`
			emailRef.current.innerHTML = email

			// * Reset the form fields
			if (firstRef.current && lastRef.current) {
				firstRef.current.value = ""
				lastRef.current.value = ""
				firstRef.current.focus() // * Focus only after generating the email
			}
		}
		// * Set interaction state to true
		setHasInteracted(true)
	}

	return (
		<Card className="border p-4 bg-background-foreground mx-auto xl:mx-0 max-w-sm mt-4 rounded-lg border-border">
			<CardContent className="p-0">
				<form>
					<Label htmlFor="first">
						First Name
						<Input
							id="first"
							type="text"
							ref={firstRef}
							size={15}
							maxLength={15}
							autoFocus={hasInteracted}
						/>
					</Label>
					<Label htmlFor="last">
						Last Name
						<Input
							id="last"
							type="text"
							ref={lastRef}
							maxLength={15}
							size={15}
						/>
					</Label>
					<Button
						className="mt-4"
						type="button"
						onClick={generateEmail}
					>
						Generate Email
					</Button>
					<p ref={emailRef}></p>
				</form>
			</CardContent>
		</Card>
	)
}
