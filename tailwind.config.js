/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
		colors: {
			xgreen: "#22af3D",
			xred: "#561B1F",
			xblue: "#193B53",
			xgold: "#beb07b",
			xlight_gold: "#beb0aa"
		},
	},
  },
  plugins: [],
}
