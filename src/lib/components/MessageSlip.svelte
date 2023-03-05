<script lang="ts">
    import { fade } from 'svelte/transition';

    function typewriter(node: Node, { speed = 1 }) {
        const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

        if (!valid) {
            throw new Error(`This transition only works on elements with a single text node child`);
        }

        const text = node.textContent;
        const duration = text!.length / (speed * 0.01);

        return {
            duration,
            tick: (t: number) => {
                const i = Math.trunc(text!.length * t);
                node.textContent = text!.slice(0, i);
            },
        };
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div id="container">
    <!-- <div id="background" on:click in:fade /> -->
    <div id="wrapper">
        <p in:typewriter={{ speed: 3 }}>
            <slot />
        </p>
    </div>
</div>

<style>
    #container {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: fit-content;
        left: 0;
        bottom: 0;
        margin-bottom: 1rem;
    }

    #wrapper {
        /* background-color: beige;
        border: 4px black solid; */
        border-radius: 1rem;
        padding: var(--sp-lg) var(--sp-2xl);
    }

    p {
        font-size: var(--sp-2xl);
        font-weight: 700;
        padding: 0;
        margin: 0;
    }

    #background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;

        background-color: black;
        opacity: 0.2;
        z-index: -1;
    }
</style>
