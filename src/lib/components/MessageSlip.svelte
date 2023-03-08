<script lang="ts">
    import { typewriter } from '$lib/scripts/typewriter';

    export let text: string = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="wrapper">
    <p on:click>
        {#key text}<span in:typewriter={{ speed: 3, placeholder: true }}> {text}</span>{/key}
    </p>
</div>

<style>
    p {
        font-size: var(--sp-xl);
        font-weight: 700;
        padding: 0;
        margin: 0;
        line-height: 2rem;
    }

    .wrapper {
        margin: var(--sp-xl);
        padding: var(--sp-xl) var(--sp-2xl);

        display: flex;
        align-items: center;
        justify-content: center;

        background-image: url('message.svg');
        background-size: 100% 100%;
        text-align: center;

        width: fit-content;
        min-width: 300px;
        max-width: 60vw;
    }

    @media screen and (max-width: 600px) {
        .wrapper {
            background-image: url('message-600.svg');
        }
    }
</style>
