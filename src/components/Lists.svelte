<script>
    import { onMount } from "svelte";
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import List from "./List.svelte"

	export let lists
	
    const scroll = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

    let section
    let handleWheel = e => {}
    onMount(() => {
        scroll.subscribe(value => section.scrollLeft = value)
        handleWheel = function handleWheel(event) {
            const max = section.scrollWidth - section.clientWidth
            const move = max / 2 > 250 ? 250 : max / 2
            console.log(max, $scroll)
            if(event.deltaY > 0) {
                if($scroll + move > max) {
                    scroll.set(max)
                } else {
                    scroll.set($scroll + move)
                }
            } else {
                if($scroll - move < 0) {
                    scroll.set(0)
                } else {
                    scroll.set($scroll - move)
                }
            }
        }
    })
</script>

<svelte:window on:wheel={handleWheel}/>

<section bind:this={section}>
    <div>
        {#each Object.keys(lists) as name}
            <List {name} words={lists[name]}/>
        {:else}
            <h2>We got no lists yet !</h2>
            <h3>come back later</h3>
        {/each}
    </div>
</section>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	section::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	section {
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}

	section {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 2em 0;
		width: 100vw;
		overflow-y: auto;
	}
	section > div {
		padding: 0 2em;
		width: max-content;
		height: 100%;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
        align-items: flex-end;
	}
</style>