import { Resource } from "@/lib/types"

interface IResourcesList {
	title: string
	links: Resource[]
}

interface IResourceCategory {
	title: string
	resourcesList: IResourcesList[]
}

export const resourcesData: Record<string, IResourceCategory> = {
	colors: {
		title: "Colors",
		resourcesList: [
			{
				title: "Color Palettes",
				links: [
					{
						title: "HyperColor",
						url: "https://hypercolor.dev/",
						description:
							"A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.",
						iconPath: "/resources/colors/hyper-color.png",
					},
					{
						title: "Colorsss",
						url: "https://colorsss.com/",
						description:
							"Colors inpirations for graphic designers, UI/UX designers, artists. We curates awesome color palettes, gradients and tool to help you find great colors.",
						iconPath: "/resources/colors/colorsss.png",
					},
					{
						title: "Huemint",
						url: "https://huemint.com/",
						description: "Generate a unique 3-accent palette for your website.",
						iconPath: "/resources/colors/huemint.svg",
					},
					{
						title: "AI Colors",
						url: "https://aicolors.co/",
						description:
							"Create cool and unique color palettes with our AI-powered color palette generator. Browse, edit, and visualize your palettes to find the perfect combination for your project.",
						iconPath: "",
					},
					{
						title: "Happy Hues",
						url: "https://www.happyhues.co/",
						description:
							"See color palette inspiration on a real example website. As you click on different palettes every color on this site updates to give you context of how that color could be used for your design or illustration projects.",
						iconPath: "/resources/colors/happy-hues.png",
					},
					{
						title: "Colorsinspo",
						url: "https://colorsinspo.com",
						description:
							"Colorsinspo is all in one resource to find everything about colors with extreme ease. Also, you will get Freebies, Inspirations, Color Tools, Gradients and thousands of trendy hand-picked color palettes.",
						iconPath: "/resources/colors/colorsinspo.png",
					},
					{
						title: "Pigment",
						url: "https://pigment.shapefactory.co/",
						description:
							"A unique way to generate fresh and vibrant colors based on lighting and pigment, instead of math. Find a beautiful, free color palette in seconds to kick off your next project.",
						iconPath: "",
					},
					{
						title: "Coolors",
						url: "https://coolors.co",
						description: "Generate or browse beautiful color combinations for your designs.",
						iconPath: "/resources/colors/coolors.png",
					},
					{
						title: "Color Hunt",
						url: "https://colorhunt.co/",
						description:
							"Discover the newest hand-picked color palettes of Color Hunt. Get color inspiration for your design and art projects.",
						iconPath: "/resources/colors/color-hunt.png",
					},
				],
			},
			{
				title: "Color Systems",
				links: [
					{
						title: "UI Color",
						url: "https://uicolors.app",
						description:
							"Generate, edit, save and share Tailwind CSS color shades based on a given hexcode or HSL color.",
						iconPath: "/resources/colors/uicolor.png",
					},
					{
						title: "Geist",
						url: "https://vercel.com/geist/colors",
						description:
							"Vercel’s design system called Geist. Made for building consistent and delightful web experiences.",
						iconPath: "/resources/colors/vercel-icon-dark.png",
					},
					{
						title: "Tailwindcss",
						url: "https://tailwindcss.com/docs/customizing-colors",
						description: "Customizing the default color palette for your project.",
						iconPath: "/resources/colors/tailwindcss.svg",
					},
					{
						title: "Altassian",
						url: "https://atlassian.design/foundations/color-new",
						description:
							"Start designing and developing beautiful product experiences with Atlassian Design System UI foundations, components, and standards.",
						iconPath: "/resources/colors/atlassian.svg",
					},
					{
						title: "Material UI",
						url: "https://mui.com/material-ui/customization/color/#color-palette",
						description:
							"Convey meaning through color. Out of the box you get access to all colors in the Material Design guidelines.",
						iconPath: "/resources/colors/materialui.svg",
					},
					{
						title: "Bootstrap",
						url: "https://getbootstrap.com/docs/5.3/customize/color/#all-colors",
						description:
							"Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.",
						iconPath: "/resources/colors/bootstrap.png",
					},
				],
			},
		],
	},
	icons: {
		title: "Icons",
		resourcesList: [
			{
				title: "General Icons",
				links: [
					{
						title: "SVGmix",
						url: "https://svgmix.com",
						description: "Download thousands of free SVG icons, vector collections & brand logos.",
						iconPath: "/resources/icons/svgmix.svg",
					},
					{
						title: "SVGmix",
						url: "https://svgmix.com",
						description: "Download thousands of free SVG icons, vector collections & brand logos.",
						iconPath: "/resources/icons/svgmix.svg",
					},
					{
						title: "Font Awesome",
						url: "https://fontawesome.com",
						description:
							"The internet‘s icon library + toolkit. Used by millions of designers, devs, & content creators. Open-source. Always free. Always awesome.",
						iconPath: "/resources/icons/fontawesome.svg",
					},
					{
						title: "Eva Icons",
						url: "https://akveo.github.io/eva-icons",
						description:
							"Eva Icons is a pack of 480 delightful icons available for free. Download Eva Icons to use them in your products for mobile and web apps. Available as SVG, PNG, Web Font and Sketch. Open Source, built by the Nebular team.",
						iconPath: "",
					},
					{
						title: "Heroicons",
						url: "https://heroicons.dev/",
						description:
							"Heroicons is a collection of MIT open source interface icons for web and app development. Icons are free, no attribution required. Icons by @steveschoger. Website by @username_ZAYDEK.",
						iconPath: "/resources/icons/heroicons.svg",
					},
					{
						title: "ICONSVG",
						url: "https://iconsvg.xyz/",
						description:
							"Simple tool to find, customize and generate common SVG icons for your project",
						iconPath: "/resources/icons/iconsvg.png",
					},
					{
						title: "Tabler Icons",
						url: "https://tabler.io/icons",
						description:
							"Tabler Icons: 5467 free and open source SVG icons. Customizable size, color and stroke. Available for React, SolidJS, Vue, Figma and more for free!",
						iconPath: "/resources/icons/tabler.png",
					},
					{
						title: "Streamline",
						url: "https://www.streamlinehq.com/",
						description:
							"8 icon designers rebels. Creating from scratch innovative and harmonious icons sets.",
						iconPath: "/resources/icons/streamline.png",
					},
					{
						title: "Iconoir",
						url: "https://www.streamlinehq.com/",
						description:
							"Iconoir is the biggest open source icon library that provides a massive selection of high-quality icons, available for free download. No premium options or email sign-up required, free for real. Icons available in SVG, Font, React, React Nativ, and Flutter libraries, Figma and Framer.",
						iconPath: "/resources/icons/iconoir.png",
					},
					{
						title: "Line Icons",
						url: "https://lineicons.com/icons/",
						description:
							"Explore 8400+ Free & Premium Professionally Designed SVG Icons: Enhance your projects with our vast collection of SVG UI Icons from 40+ categories. Download in various formats - SVG, Web Font, Figma, React, PNG & More.",
						iconPath: "/resources/icons/line-icons.png",
					},
					{
						title: "CSS ICON",
						url: "https://cssicon.space/",
						description: 'Icon set made with pure css code, no dependencies, "grab and go" icons.',
						iconPath: "",
					},
					{
						title: "Bootstrap Icons",
						url: "https://icons.getbootstrap.com/",
						description: "Official open source SVG icon library for Bootstrap.",
						iconPath: "/resources/icons/bootstrap.svg",
					},
					{
						title: "Icon Scout",
						url: "https://iconscout.com/",
						description:
							"Access 9.4 Million+ free or premium vector icons, illustrations, 3D illustrations, and Lottie animations for any design. Available in PNG, SVG, GIF, EPS, JSON, and more.",
						iconPath: "/resources/icons/iconscout.png",
					},
					{
						title: "Noun Project",
						url: "https://thenounproject.com/",
						description:
							"Noun Project has the most diverse collection of free icons and stock photos. Download SVG and PNG. Over 5 million art-quality icons and free photos.",
						iconPath: "/resources/icons/nounproject.png",
					},
					{
						title: "Feather Icons",
						url: "https://feathericons.com/",
						description:
							"Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.",
						iconPath: "/resources/icons/feathericons.png",
					},
				],
			},
			{
				title: "Logos",
				links: [
					{
						title: "Dev Icon",
						url: "https://devicon.dev/",
						description:
							"Devicon aims to gather all logos representing development languages and tools in one font. 🚀",
						iconPath: "/resources/icons/dev-icon.png",
					},
					{
						title: "Browser Logos",
						url: "https://github.com/alrra/browser-logos#readme",
						description: "High resolution of web browser logos.",
						iconPath: "",
					},
					{
						title: "Simple Icons",
						url: "https://simpleicons.org/",
						description: "3161 Free SVG icons for popular brands",
						iconPath: "/resources/icons/simpleicons.svg",
					},
					{
						title: "Vector Logo Zone",
						url: "https://www.vectorlogo.zone/",
						description:
							"Gorgeous SVG logos, perfect for your README or credits page - Vector Logo Zone.",
						iconPath: "/resources/icons/vectorlogo.svg",
					},
				],
			},
		],
	},
	inspirations: {
		title: "Inspirations",
		resourcesList: [
			{
				title: "",
				links: [
					{
						title: "Dribbble",
						url: "https://dribbble.com/",
						description:
							"Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide.",
						iconPath: "/resources/inspirations/dribbble.jpg",
					},
					{
						title: "Awwwards",
						url: "https://www.awwwards.com/",
						description:
							"Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world.",
						iconPath: "/resources/inspirations/awwwards.svg",
					},
					{
						title: "Mobbin",
						url: "https://mobbin.com/",
						description:
							"Save hours of UI & UX research with our library of 300,000+ fully searchable mobile & web app screenshots.",
						iconPath: "/resources/inspirations/mobbin.svg",
					},
					{
						title: "Dark",
						url: "https://www.dark.design/",
						description:
							"The best hand-picked dark themed websites on the internet. From designers for designers. Curated with love.",
						iconPath: "/resources/inspirations/dark.png",
					},
					{
						title: "Behance",
						url: "https://www.behance.net/",
						description:
							"Join 50M+ members in the world’s largest creative network to showcase work, find inspiration and get hired. Connect with top freelance talent across every creative field.",
						iconPath: "/resources/inspirations/behance.jpg",
					},
					{
						title: "Httpster",
						url: "https://httpster.net/",
						description:
							"The best  website design inspiration. Get inspired by our gallery of creative design ideas and great examples of beautiful award-winning sites.",
						iconPath: "/resources/inspirations/httpster.svg",
					},
					{
						title: "Muzli",
						url: "https://muz.li/",
						description:
							"Designers‘ Secret Source: all the design inspiration from the world in one place. Served fresh.",
						iconPath: "/resources/inspirations/muzli.png",
					},
				],
			},
		],
	},
	mockups: {
		title: "Mockup Tools",
		resourcesList: [
			{
				title: "",
				links: [
					{
						title: "Shots",
						url: "https://shots.so/",
						description:
							"Craft beautiful presentation for your social media, website and more!",
						iconPath: "/resources/mockups/shots.png",
					},
					{
						title: "shotsnapp",
						url: "https://app.shotsnapp.com/",
						description:
							"Beautiful free device mockup presentation tool for your app and website design.",
						iconPath: "/resources/mockups/shotsnapp.png",
					},
					{
						title: "Overframe",
						url: "https://overframe.xyz/",
						description:
							"Overframe is a screen recording software to record your app & prototype window with device frame overlay. Available for Mac OS.",
						iconPath: "/resources/mockups/overframe.svg",
					},
					{
						title: "Freepik Mockups",
						url: "https://www.freepik.com/mockups",
						description:
							"Create professional mockups easily! Explore our large library of free and premium customizable mockup templates to edit online.",
						iconPath: "/resources/mockups/freepik.svg",
					},
					{
						title: "Cleanmock",
						url: "https://cleanmock.com/",
						description:
							"Create stunning mockups using latest device frames like iPhone X & custom backgrounds that make your mobile or website design standout, right from your browser quickly & for free.",
						iconPath: "/resources/mockups/cleanmock.png",
					},
					{
						title: "Ls",
						url: "https://www.ls.graphics/free-mockups",
						description:
							"Free and premium mockups, UI/UX tools, scene creators for busy designers.",
						iconPath: "/resources/mockups/lsgraphics.svg",
					},
					{
						title: "Angle 4",
						url: "https://angle.sh/",
						description:
							"Vector mockups for iPhone, iPad, Android and Mac devices, including the new iPhone 14, Plus, Pro, Pro Max and Mini. Perfect for presenting your apps. Huge library of components, compositions, wallpapers and plugins made for Figma, Sketch and XD.",
						iconPath: "/resources/mockups/angle.svg",
					},
					{
						title: "Dimmy.club",
						url: "https://dimmy.club/",
						description: "Device mockup generator for your website and app screenshots!",
						iconPath: "/resources/mockups/dimmy.png",
					},
					{
						title: "Ray.so",
						url: "https://ray.so",
						description: "Create beautiful screenshots of your code with customizable themes, padding, and export options.",
						iconPath: "/resources/mockups/rayso.png",
					},
				],
			},
		],
	},
	stockphotos: {
		title: "Stock Photos",
		resourcesList: [
			{
				title: "",
				links: [
					{
						title: "Texturelabs",
						url: "https://texturelabs.org/",
						description:
							"Texturelabs is an online resource for free, original textures and tutorials for art and design.",
						iconPath: "",
					},
					{
						title: "Freepik",
						url: "https://www.freepik.com/",
						description:
							"Millions of free graphic resources. ✓ Photos ✓ AI images ✓ Vectors ✓ Icons ✓ Templates ✓ Videos. Find out about our real-time AI art generator.",
						iconPath: "/resources/mockups/freepik.svg",
					},
					{
						title: "Pexels",
						url: "https://www.pexels.com/",
						description:
							"Free stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images & copyright free pictures. No attribution required.",
						iconPath: "/resources/stock-photos/pexels.png",
					},
					{
						title: "Unsplash",
						url: "https://unsplash.com/",
						description:
							"Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.",
						iconPath: "/resources/stock-photos/unsplash.png",
					},
					{
						title: "Coverr",
						url: "https://coverr.co/",
						description:
							"Discover a vast library of assets including high-quality free stock video clips and footage in HD and 4K. Perfect for personal or commercial projects.",
						iconPath: "/resources/stock-photos/coverr.png",
					},
					{
						title: "Burst",
						url: "https://www.shopify.com/stock-photos",
						description:
							"Browse thousands of beautiful copyright-free images. All our pictures are free to download for personal and commercial use, no attribution required.",
						iconPath: "/resources/stock-photos/burst.png",
					},
					{
						title: "Mixkit",
						url: "https://mixkit.co/",
						description:
							"Download Free Stock Video Footage, Stock Music & Premiere Pro Templates for your next video editing project. All assets can be downloaded for free!",
						iconPath: "/resources/stock-photos/mixkit.png",
					},
				],
			},
		],
	},
	svggenerators: {
		title: "SVG Generators",
		resourcesList: [
			{
				title: "",
				links: [
					{
						title: "MagicPattern",
						url: "https://www.magicpattern.design/",
						description:
							"Create Pro Visuals with MagicPattern. Generate SVG/CSS patterns, gradients and organic shapes to brand your product and social media posts.",
						iconPath: "/resources/svg-generators/magicpattern.png",
					},
					{
						title: "Creatica",
						url: "https://creatica.app/",
						description:
							"Create stunning backgrounds with Creatica, your go-to design tool for unique and dynamic designs. Perfect for web designers, graphic artists, and creative minds.",
						iconPath: "/resources/svg-generators/creatica.svg",
					},
					{
						title: "Haekei",
						url: "https://app.haikei.app/",
						description:
							"A web-based design tool to generate unique SVG design assets for websites, social media, blog posts, desktop and mobile wallpapers, posters, and more! Our generators let you discover, customize, randomize, and export generative SVG design assets ready to use with your favorite design tools.",
						iconPath: "/resources/svg-generators/haekei.png",
					},
					{
						title: "SVGator",
						url: "https://www.svgator.com/",
						description:
							"It‘s SVG animation made easy - Create impressive SVG animations online, without any coding skills. Add them easily to your website. Get started for free!",
						iconPath: "/resources/svg-generators/svgator.png",
					},
					{
						title: "Cool Backgrounds",
						url: "https://svgwave.in/",
						description:
							"Explore a beautifully curated selection of cool backgrounds that you can add to blogs, websites, or as desktop and phone wallpapers.",
						iconPath: "/resources/svg-generators/coolbg.png",
					},
					{
						title: "SVG Wave",
						url: "https://svgwave.in/",
						description:
							"SVG Wave is a minimal svg wave generator with lot of customization. It lets you abiltiy to generate and export pngs and svgs of beautiful waves. SVG wave also lets you layer multiple waves. Create SVGs for your website designs.",
						iconPath: "/resources/svg-generators/meshy.webp",
					},
					{
						title: "Tabbied",
						url: "https://tabbied.com/",
						description:
							"Tabbied lets you easily create timeless and beautifully generated patterns or artwork to use for wall art, websites, print materials and more.",
						iconPath: "/resources/svg-generators/tabbied.svg",
					},
				],
			},
		],
	},
	typography: {
		title: "Typography",
		resourcesList: [
			{
				title: "",
				links: [
					{
						title: "Typewolf",
						url: "https://fontsinuse.com/",
						description:
							"Typewolf helps designers choose the perfect font combination for their next design project—features web fonts in the wild, font recommendations and learning resources.",
						iconPath: "/resources/typography/typewolf.png",
					},
					{
						title: "Font In Use",
						url: "https://fontsinuse.com/",
						description:
							"A searchable archive of typographic design, indexed by typeface, format, and topic.",
						iconPath: "/resources/typography/fontinuse.png",
					},
					{
						title: "MyFonts",
						url: "https://www.myfonts.com/",
						description:
							"MyFonts is the largest font marketplace in the world, offering professional fonts for any project.",
						iconPath: "/resources/typography/myfonts.png",
					},
					{
						title: "FontFrabric",
						url: "https://www.fontfabric.com/",
						description:
							"A digital type foundry crafting retail fonts and custom typography for various brands. Sharing a passion for premium typefaces, calligraphy and lettering.",
						iconPath: "/resources/typography/fontfabric.png",
					},
					{
						title: "FontSpace",
						url: "https://www.fontspace.com/",
						description:
							"Free downloads of legally licensed fonts that are perfect for your design projects. The best place in the universe to search for amazing fonts.",
						iconPath: "/resources/typography/fontspace.png",
					},
					{
						title: "DaFont",
						url: "https://www.dafont.com/",
						description:
							"Archive of freely downloadable fonts. Browse by alphabetical listing, by style, by author or by popularity.",
						iconPath: "/resources/typography/dafont.png",
					},
					{
						title: "Google Fonts",
						url: "https://fonts.google.com",
						description: "A vast collection of open-source fonts provided by Google.",
						iconPath: "/resources/typography/google-fonts.svg",
					},
					{
						title: "Font Squirrel",
						url: "https://www.fontsquirrel.com",
						description:
							"Font Squirrel scours the internet for high quality, legitimately free fonts . Download thousands of completely legal, high quality, free fonts.",
						iconPath: "/resources/typography/fontsquirrel.png",
					},
					{
						title: "Type Scale",
						url: "https://typescale.com/",
						description:
							"Typescale - Create stunning typography, generate CSS, and find inspiration.",
						iconPath: "/resources/typography/typescale.svg",
					},
				],
			},
		],
	},
	webdev: {
		title: "Web Development",
		resourcesList: [
			{
				title: "",
				links: [
					{
						title: "W3Schools",
						url: "https://www.w3schools.com/",
						description:
							"HTML, Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, W3.CSS, XML, MySQL, Icons, NodeJS, React, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website",
						iconPath: "/resources/learnwebdev/w3schools.png",
					},
					{
						title: "The Odin Project",
						url: "https://theodinproject.com/",
						description:
							"The Odin Project empowers aspiring web developers to learn together for free",
						iconPath: "/resources/learnwebdev/top.png",
					},
					{
						title: "MDN Web Docs",
						url: "https://developer.mozilla.org/en-US/",
						description:
							"The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
						iconPath: "/resources/learnwebdev/mdn.png",
					},
					{
						title: "freeCodeCamp",
						url: "https://www.freecodecamp.org/",
						description: "Learn to Code — For Free",
						iconPath: "/resources/learnwebdev/freecodecamp.png",
					},
					{
						title: "codecademy",
						url: "https://www.codecademy.com/",
						description:
							"Learn the technical skills to get the job you want. Join over 50 million people choosing Codecademy to start a new career (or advance in their current one).",
						iconPath: "/resources/learnwebdev/codecademy.png",
					},
					{
						title: "SoloLearn",
						url: "https://www.sololearn.com/en/",
						description: "Join Now to learn the basics or advance your existing skills",
						iconPath: "/resources/learnwebdev/sololearn.png",
					},
				],
			},
		],
	},
}

export type ResourceType = keyof typeof resourcesData
