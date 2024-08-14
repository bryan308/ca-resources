interface Resource {
	name: string;
	url: string;
	description: string;
	category: 'colors' | 'typography' | 'Other';
	icon: string;
}

export const resources: Resource[] = [
	{
		name: 'Pigment',
		url: 'https://pigment.shapefactory.co/',
		description:
			'A unique way to generate fresh and vibrant colors based on lighting and pigment, instead of math. Find a beautiful, free color palette in seconds to kick off your next project.',
		category: 'colors',
		icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAABSVJREFUWEeNWE9IXEcY/81bg0JF2qa5pYLruEijRYg0KVJQQdFgbQ8eTKOCVE8pqLSQErFtPJsGcxDBiAftRTGUJFqwhhp6EiuExou7swoqIki3NXiJxZl23pu3O+//zmn3zTff95vvz2++GYI8RwWlJQJoB1APoAZAGYC3reXkHwC7gHhJgDUAT1KMvdZVEwAixJact1S5BO3/8Xi82jCMARD0QsDIEzcHMCM4H0/v7LyKAiRtZYFkhYn6JARoBR2DwNfhxoO2kF11nzH2TdQGiO0LXZ3ywgwhuCoC/BnlapePNznnvTsu7+gy5vZNpUpzIpH4hHP+M4B3rZgRQKGJNu7dd3YNQcYgsc+TyeTvdrbo+hyhiZfHqw1iyGSzQESMK1c+wNnZv0ilUj6SvrAznIv6nZ20I29sZ2SVUEr/AMFV00dBMVHSxcXFWP5lGQWxAjQ3N+P09DQKtz2/ydKs1l1C2dCUUzoGRCVmztaDHx+g7dM2s9aePVvC0NCQt/yCY2klsDZvAlHJ+af/lmQ+iywJyAUtra0Yf/hQKzmBgYFBLC8vR3tFGeecf2glr/XBBEIr6CMIfBmoRWUzgcB7ly5hZWUFxcVvOar/5OQEra2tOD4+9pKSplhzwnSasT67KAmltATA3wAMD6v5IJub+wnXrn2kZqSaXL6vr6+ju6srlEE1lZL03mGKgQmlFV2AmPULp/tbT08PRkZGQt1/b3QUc7OzwTI2bssV3YyxOZNZKaWPgKiwAKWlpWYOFBYWhgJ58+YMN260Ym9vLzpfgGnG0n1mjpglC1myAYMABjGwuLiIqqoq35C4V25tbaGjowPn5+euKY/fNxlL19pA/ooisC9u3cK9H773PZqC8A8PD2N+fj7KKxnG2EWT0CilErbzVNU4P2YY+PX5c7x/+bJXqRAQhPicnMDBwQEaGxshQoiRADzFWEwmvD8QzWRNTQ0WFhaCd+YsHIdcW1sbtre3w8qZMxOI5REVmlw665FsamrCxMSEw4BlOwSBkh4cHMTS0lJ2rbcySSbNUhdNTXqy+gjis/Z2jN2X7K91Trag48jMidif+/v78WJtLYxXNtOM1dpAVPkq7S40lZWVePL0qcoD5QshQLINVHAOyxzZ398Pq5xpxlifHZouABoDOZEYhoGNjQ2UlEgC9h9ZmtamDw8P0dDQAM4lgZqmHGeW+tidZmxO9kJOitcUaQ0NbnbexOjoqA+K4Dy58+0dPF587Fyjh1TASfFS0sOujihZf6amplBfLxt4bchDWW1Ur+HV1VXcvv0VOA8lNOehJ9WGtwGW4aKiIkxOTqKuri4wRHJCMvDd4bvg53ZI/MU5F2YbIKvP4VdKK8YA4duxa20rWlpa0NnZievXP0YsJjs5q689OjrCdyMj+O3FmusCIwnPMqYNT2fvKMB8zh0b/oWCC0gkEpAt48nJaySTSWcogrozgk2WYrVuP5n8LBswOcri5fIyJbeUV/OsakHbbXBvqHqdDOe83nut0LsapcNznQjNCHsyBEBufcYwDHWdsLagh8zJjepfvCxeHTOMGWG3B/YhqPWuNjX4deM+dzLrgrW7+8pzR9IqNPBQonl19jlvWL883sn3yhnu+/J4vJrISzjQSwgMc7f2tVAt9Zgm4BCY4ZyP++WDn0UtNOFxNptsgnYIv2cJqGcJvPz/2cJ8ljCbYieTWvZ9UGevEzrCADnnJoJLM+ARxB0+/2eQLDvbDOdONr+N5ZC5UfkebpG19x9LEQxFX8kGEQAAAABJRU5ErkJggg==',
	},
	{
		name: 'Coolors',
		url: 'https://coolors.co',
		description: 'Generate or browse beautiful color combinations for your designs.',
		category: 'colors',
		icon: '/resources/colors/coolors.png',
	},
	{
		name: 'Color Hunt',
		url: 'https://colorhunt.co/',
		description:
			'Discover the newest hand-picked color palettes of Color Hunt. Get color inspiration for your design and art projects.',
		category: 'colors',
		icon: '/resources/colors/color-hunt.png',
	},
	{
		name: 'Khroma',
		url: 'https://color.adobe.com',
		description:
			'Khroma is the fastest way to discover, search, and save color combos and palettes you‘ll love. Discover a personalized AI-powered color tool for designers to find the perfect color scheme.',
		category: 'colors',
		icon: '/adobe-color.png',
	},
	{
		name: 'Google Fonts',
		url: 'https://fonts.google.com',
		description: 'A vast collection of open-source fonts provided by Google.',
		category: 'typography',
		icon: '/resources/colors/google-fonts.svg',
	},
	{
		name: 'Font Squirrel',
		url: 'https://www.fontsquirrel.com',
		description: 'A collection of free, high-quality fonts for commercial use.',
		category: 'typography',
		icon: '/font-squirrel.png',
	},
];
