/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				AmazonEmber: "'Amazon Ember', sans-serif;",
				FontAwsome: "'FontAwesome'",
			},
			colors: {
				amazonBlue: "#131921",
				amazonLight: "#232f3e",
				amazonYellow: "#F97316",
				whiteText: "#ffffff",
				lightText: "#cccccc",
				quantityBox: "#f0f2f2",
				footerBottom: "#131a22",
			},
			boxShadow: {
				textShadow: "0 0 32px 1px rgba(199,199,199,1)",
				amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%)",
				boxShadow1: "0 0 2px 1px rgb(199,199,199)",
			},
			backgroundImage: {
				amazonImage: "url('../assets/images/nav-sprite-global.png')",
				flags: "url('../assets/images/regions-and-countries.png')",
				icons: "url('../assets/images/icons.png')",
				"banner-1": "url('../assets/images/banner-1.jpg')",
				"banner-2": "url('../assets/images/banner-2.jpg')",
				"banner-3": "url('../assets/images/banner-3.jpg')",
				"banner-4": "url('../assets/images/banner-4.jpg')",
				"banner-5": "url('../assets/images/banner-5.jpg')",
				"banner-6": "url('../assets/images/banner-6.jpg')",
				"banner-7": "url('../assets/images/banner-7.jpg')",
				"gradient-banner": `linear-gradient(to top, #e3e6e6 40%, transparent)`,
			},
			backgroundPosition: {
				"logo-position": "left -4px top -38px",
				"location-position": "left -71px top -377px",
				"seacrh-icon-position": "left 4px top -280px",
				"us-position": "left top -130px",
				"cart-position": "left -4px top -327px",
				"menu-bars-position": "left -170px top -251px",
				"close-icon-position": "left -190px top -285px",
				"user-icon-position": "left -138px top -342px",
				"right-angle-icon-position": "left -130px top -287px",
				"hover-right-angle-icon-position": "left -159px top -287px",
				"left-arrow-icon-position": "left -136px top -309px",
				"hover-left-arrow-icon-position": "left -165px top -309px",
				"large-left-arrow": "left 2px top -183px",
				"large-right-arrow": "left -30px top -183px",
				"small-left-arrow": "left -13px top 0",
				"small-right-arrow": "left 0 top 0",
			},
			gridTemplateColumns: {
				300: "repeat(auto-fill, minmax(300px, 1fr))",
			},
			animation: {
				"slide-start": "marginLeft 1s ease",
				"slide-end": "marginRight 1s ease",
			},
			keyframes: {
				marginLeft: {
					"0%, 100%": {
						"margin-left": 0,
					},
					"50%": {
						"margin-left": "16px",
					},
				},
				marginRight: {
					"0%, 100%": {
						"margin-left": 0,
					},
					"50%": {
						"margin-left": "-16px",
					},
				},
			},
		},
	},
	plugins: [],
};
