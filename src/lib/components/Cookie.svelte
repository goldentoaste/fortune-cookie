<!-- controller object for cookie -->
<script lang="ts">
    import { particleStore } from './cookieStore';
    import CookieParticles from './CookieParticles.svelte';
    import CookieRender from './CookieRender.svelte';
    import ImageHolder from './imageHolder.svelte';
    import MessageSlip from './MessageSlip.svelte';
    import { generateText } from '../scripts/textGen';


    let crackAmount = 0;

    let message = "Bad Omen!";
    let displayMessage = false;

    function onClick(e: MouseEvent) {
        if (crackAmount >= 1) {
            displayMessage = true;

            if (localStorage.getItem('message') !== null && localStorage.getItem("day") !== null && localStorage.getItem('day') === new Date().getDay().toString()){
               message = localStorage.getItem('message')!;
            }
            else{
                message = generateText();
                localStorage.setItem('message', message);
                localStorage.setItem('day', new Date().getDay().toString())
            }
            
           return;
        }

        crackAmount += Math.random() * 0.4;
        $particleStore.push({
            x: e.offsetX,
            y: e.offsetY,
        });
    }

    function clear(k:KeyboardEvent){
        if (k.key == ' '){
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

{#if displayMessage}
    <MessageSlip on:click={()=>{displayMessage=false;}}>
        {message}
    </MessageSlip>
{/if}

<svelte:window on:keydown={clear}/>

<style>
    #parent {
        width: 600px;
        height: 600px;

        max-width: 600px;
        position: relative;
    }

    #render {
        width: 100%;
        height: 100%;
        position: relative;
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
</style>
