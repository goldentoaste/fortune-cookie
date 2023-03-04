<!-- controller object for cookie -->
<script lang="ts">
    import { particleStore } from './cookieStore';
    import CookieParticles from './CookieParticles.svelte';
    import CookieRender from './CookieRender.svelte';
    import { split } from '$lib/scripts/split';

    let crackAmount = 0;
    $: {
        if (crackAmount > 1) {
            console.log('cracked');
        }
    }
    function onClick(e: MouseEvent) {
        crackAmount += Math.random() * 0.4;
        $particleStore.push({
            x: e.offsetX,
            y: e.offsetY,
        });
    }
</script>

<div id="parent" on:mouseup={onClick}>
    <div id="particles">
        <CookieParticles />
    </div>

    <div id="render">
        {#if crackAmount <= 1}
            <CookieRender />
        {:else}
            <img
                width="600"
                height="600"
                src="cookie.jpg"
                alt=""
                in:split={{
                    duration: 1000,
        
                }}
            />
            <img width="600" height="600" src="cookie.jpg" alt="" in:split={{ duration: 1000,flip:true }} />
        {/if}
    </div>
</div>

<style>
    #parent {
        position: relative;
        width: fit-content;
        height: fit-content;
    }
    #render {
        top: 0;
        left: 0;
    }
    #particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        pointer-events: none;
    }

    img {
        position: absolute;
        user-select: none;
    }
</style>
