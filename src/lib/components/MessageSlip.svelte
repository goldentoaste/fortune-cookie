<script lang="ts">
  import { fade } from "svelte/transition";

  function typewriter(node: Node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
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

<p on:click in:typewriter={{ speed: 3 }}>
  <slot />
</p>

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
    /* padding: var(--sp-lg) var(--sp-2xl);
    background-image: url("message.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
  }

  p {
    font-size: var(--sp-xl);
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
