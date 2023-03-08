<!-- controller object for cookie -->
<script lang="ts">
    import { particleStore } from './cookieStore';
    import CookieParticles from './CookieParticles.svelte';
    import CookieRender from './CookieRender.svelte';
    import ImageHolder from './imageHolder.svelte';

    import { createEventDispatcher } from 'svelte';

    const disptch = createEventDispatcher();

    let crackAmount = 0;

    function onClick(e: MouseEvent) {
        if (crackAmount >= 1) {
            disptch('message', {
                details: 'cracked',
            });
        }

        crackAmount += Math.random() * 0.4;
        $particleStore.push({
            x: e.offsetX,
            y: e.offsetY,
        });
    }

    function clear(k: KeyboardEvent) {
        if (k.key == ' ') {
            localStorage.clear();
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="parent" on:click={onClick}>
    <div id="render">
        {#if crackAmount <= 1}
            <CookieRender display={crackAmount <= 1} />
        {:else}
            <ImageHolder width={600} height={600} src="cookie-left-half.svg" display={crackAmount > 1} flip={true} />
            <ImageHolder width={600} height={600} src="cookie-right-half.svg" display={crackAmount > 1} />
        {/if}
    </div>

    <div id="particles">
        <CookieParticles />
    </div>
</div>

<svelte:window on:keydown={clear} />

<style>
    #parent {
        position: relative;
        z-index: 200;
    }

    #render {
        height: 100%;
        position: relative;
        overflow: none;
    }

    #particles {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 100;
        pointer-events: none;
    }
</style>
