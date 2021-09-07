<script>
	import Word from "./Word.svelte"
	export let name
	export let words
	export let active = false
	let lock = false
	function open() {
		if(!lock) {
			active = true
		}
	}
	function close(e) {
		active = false
		lock = true
		setTimeout(() => lock = false)
	}
</script>

<div class:active on:click={open}>
	<h1>{name}</h1>
	<h2>{name[0]}</h2>
	{#if active}
		{#each words as word}
			<Word {word}/>
		{:else}
			<p>This list is empty !</p>
		{/each}
		<button on:click={close}>Close</button>
	{/if}
</div>

<style>
	div {
		background-color: var(--color-base);
		border-radius: 2em;
		margin: 0 1em;
		width: 12em;
		height: 20em;
		padding: 2em;
		flex: 0 0 auto;
		transition: 0.65s ease;
	}
	div:hover {
		background-color: #0e1024;
		opacity: 0.8;
		color: var(--color-base);
		width: 20em;
		height: 30em;
	}
	div > h1 {
		transition: 0.7s ease;
	}
	div:hover > h1 {
		color: var(--color-yell);
	}
	div.active {
		position: fixed !important;
		left: 0  !important;
		top: 0  !important;
		width: 100vw  !important;
		height: 100vh  !important;
		margin: 0  !important;
		background-color: #0e1024  !important;
		border-radius: 0  !important;
		opacity: 1 !important;
	}
	button {
		width: 7em;
		height: 4em;
		border-radius: 1.5em;
		color: var(--color-base);
		background-color: var(--color-yell);
	}
</style>