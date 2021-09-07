import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		lists: {
			countries: ["Germany", "Iran"],
			cities: ["Frankfurt", "Shiraz"],
			flowers: ["Rose", "Sunflower"],
			mountains: ["Alp", "Alborz"],
			sports: ["Soccer", "Volleyball"],
			nones: [],
			colors: ["yellow", "purple"]
		}
	}
});

export default app;