<script lang="ts">
    import { typewriter } from '$lib/scripts/typewriter';

    export let text: string = '';
    export let showHeader = true;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="wrapper">
    <div class="inner">
        {#if showHeader}
            <div class="header">
                <img src="cookie-whole.svg" alt="cookie logo" />
                <h5>Fortune of the day:</h5>
            </div>
        {/if}
        {#key text}
        <p on:click in:typewriter={{ speed: 3, placeholder: true }}>
            {text}
        </p>
        {/key}
    </div>
</div>

<style>
    .inner {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
    }

    .header {
        text-align: center;

        display: flex;
        align-items: center;
        gap: 1rem;
    }

    img {
        width: 2rem;
        height: auto;
    }

    p {
        font-size: var(--sp-xl);
        font-weight: 700;
        padding: 0;
        margin: 0;
        line-height: 2rem;
        text-align: justify;
    }

    .wrapper {
        border: 3px solid black;
        border-radius: 20px;

        margin: var(--sp-xl);
        padding: var(--sp-xl) var(--sp-2xl);

        display: flex;
        align-items: center;
        justify-content: center;

        
        background-image: url('crumbs.svg');
       
        background-position: top 10px right 10px;
        background-repeat: no-repeat;
        background-size: 4rem auto;
        background-color: #fcf9f1;

        text-align: center;

        width: fit-content;
        min-width: 300px;
        max-width: 60vw;
    }
</style>
