<!-- controller object for cookie -->
<script lang="ts">
  import { particleStore } from "./cookieStore";
  import CookieParticles from "./CookieParticles.svelte";
  import CookieRender from "./CookieRender.svelte";
  import ImageHolder from "./imageHolder.svelte";
  import MessageSlip from "./MessageSlip.svelte";
  import { generateText } from "../scripts/textGen";
  import { scale } from "svelte/transition";
  import html2canvas from "html2canvas";
    import ImageContainer from "./ImageContainer.svelte";
  let crackAmount = 0;

  let message = "Bad Omen!";
  let displayMessage = false;

  function onClick(e: MouseEvent) {
    if (crackAmount >= 1) {
      displayMessage = true;

      if (
        localStorage.getItem("message") !== null &&
        localStorage.getItem("day") !== null &&
        localStorage.getItem("day") === new Date().getDay().toString()
      ) {
        message = localStorage.getItem("message")!;
      } else {
        message = generateText();
        localStorage.setItem("message", message);
        localStorage.setItem("day", new Date().getDay().toString());
      }

      return;
    }

    crackAmount += Math.random() * 0.4;
    $particleStore.push({
      x: e.offsetX,
      y: e.offsetY,
    });
  }

  function clear(k: KeyboardEvent) {
    if (k.key == " ") {
      localStorage.clear();
    }
  }

  let src: string = '';
    let width = 0;
    let height = 0;

    function render(){
      console.log("sdasdas")
      html2canvas(document.getElementsByTagName('body')[0]).then((canvas) =>{
        console.log(canvas)
        src = canvas.toDataURL();
        width = canvas.width;
        height = canvas.height;
      })
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  id="parent"
  on:click={onClick}
>
  <div id="render">
    {#if crackAmount <= 1}
      <CookieRender display={crackAmount <= 1} />
    {:else}
      <ImageHolder
        width={600}
        height={600}
        src="cookie-left-half.svg"
        display={crackAmount > 1}
        flip={true}
      />
      <ImageHolder
        width={600}
        height={600}
        src="cookie-right-half.svg"
        display={crackAmount > 1}
      />
    {/if}
  </div>

  <div id="particles">
    <CookieParticles />
  </div>
</div>
{#if displayMessage}
  <div
    transition:scale
    id="message"
  >
    <MessageSlip
      on:click={() => {
      render();
      }}
    >
      {message}
    </MessageSlip>
  </div>
{/if}



{#if src}
    <ImageContainer {src} {width} {height} on:click={()=>{src = '';}} ></ImageContainer>
{/if}



<svelte:window on:keydown={clear} />

<style>
  #parent {
    width: 600px;
    height: 600px;

    max-width: 600px;
    position: relative;
    z-index: 200;
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


  #message {
    height: calc(100% - 600px - 20%);
    width: 90%;
    margin-top: var(--sp-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--sp-lg) var(--sp-2xl);
    background-image: url("message-1920.svg");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
  }
</style>
