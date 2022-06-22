/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		screens: {
			sm: "700px",
			md : "900px",
			lg: "1300px",
		},
		extend: {
			colors: {
				primary: "#3b81f5",
			},
		},
	},
	plugins: [],
};
