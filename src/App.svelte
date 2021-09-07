<script>
	import Lists from "./components/Lists.svelte"
	export let lists = []
</script>

<main>
	<h1>Listify</h1>
	<Lists {lists}/>
	<p>We make lists !</p>
</main>

<style>
	:root {
		--color-base: #e9eaed;
		--color-neut: #babbc5;
		--color-text: #0e1024;
		--color-tone: #787886;
		--color-yell: #c94343;
		box-sizing: border-box;
		background-color: var(--color-base);
	}
	:global(body) {
		overflow-y: hidden;
		overflow-x: hidden;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: var(--color-text);
		text-transform: uppercase;
		font-size: 0.7em;
		font-weight: bold;
	}
	p {
		color: var(--color-text);
		font-size: 1.5em;
		font-weight: bold;
	}
	@media (min-width: 640px) {
		main {
			text-align: left;
			max-width: none;
			margin-left: 4em;
		}
		h1 {
			margin-left: 4em;
		}
		p {
			font-size: 3em;
		}
	}
</style>