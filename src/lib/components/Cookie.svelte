<!-- controller object for cookie -->
<script lang="ts">
  import { particleStore } from "./cookieStore";
  import CookieParticles from "./CookieParticles.svelte";
  import CookieRender from "./CookieRender.svelte";
  import ImageHolder from "./imageHolder.svelte";

  let crackAmount = 0;

  function onClick(e: MouseEvent) {
    crackAmount += Math.random() * 0.4;
    $particleStore.push({
      x: e.offsetX,
      y: e.offsetY,
    });
  }
</script>

<<<<<<< Updated upstream
<div id="parent" on:mouseup={onClick}>
   

    <div id="render">
        <CookieRender display={crackAmount <= 1} />

        <ImageHolder width={600} height={600} src="cookie-left-half.svg" display={crackAmount > 1} flip={true} />
        <ImageHolder width={600} height={600} src="cookie-right-half.svg" display={crackAmount > 1} />
      
    </div>

    <div id="particles">
        <CookieParticles />
    </div>
</div>

<style>
    #parent {
        position: relative;
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
        z-index: 100 !important;
        pointer-events: none;
    }
=======
<div
  id="parent"
  on:mouseup={onClick}
>
  <div id="particles">
    <CookieParticles />
  </div>

  <div id="render">
    <CookieRender display={crackAmount <= 1} />

    <ImageHolder
      width={600}
      height={600}
      src="cookie-right-half.png"
      display={crackAmount > 1}
    />
    <ImageHolder
      width={600}
      height={600}
      src="cookie-left-half.png"
      display={crackAmount > 1}
      flip={true}
    />
  </div>
</div>

<style>
  #parent {
    position: relative;
    width: 80%;
    aspect-ratio: 1 / 1;
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
>>>>>>> Stashed changes
</style>
