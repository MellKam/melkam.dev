import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://melkam.dev",
	markdown: {
		shikiConfig: {
			// Dual themes: light colours are inlined, dark ones exposed as
			// --shiki-dark-* custom properties and picked up in global.css.
			themes: {
				light: "vitesse-light",
				dark: "vitesse-dark",
			},
			wrap: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
