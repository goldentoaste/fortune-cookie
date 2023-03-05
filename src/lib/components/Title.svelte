<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export let style = '';

    const d = new Date();
    let date = `Today is ${d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })}`;

    let message = 'What will your fortune hold?';

    let displayDate = true;

    onMount(() => {
        setInterval(() => {
            displayDate = !displayDate;
        }, 4000);
    });
</script>

<div class="title-div" {style}>
    {#if displayDate}
        <h4 in:fade={{ duration: 1000, delay: 1000 }} out:fade={{ duration: 1000 }}>{date}</h4>
    {:else}
        <h4 in:fade={{ duration: 1000, delay: 1000 }} out:fade={{ duration: 1000 }}>{message}</h4>
    {/if}
</div>

<style>
    h4 {
        position: absolute;
    }

    div {
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
