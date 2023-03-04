<script lang="ts">
  let img: HTMLImageElement;
  export let display = true;
  const click = () => {
    img.classList.add("clicked");
  };

  const release = () => {
    img.classList.remove("clicked");
  };
</script>

<div
  id="parent"
  style={display ? "" : "display:none;"}
  ><img
    id="cookie"
    bind:this={img}
    src="cookie-whole.png"
    width="600"
    height="600"
    alt="cookie"
    on:mousedown={click}
    on:mouseup={release}
  /></div
>

<style global>
  img {
    border: red 1px solid;
    transition: all cubic-bezier(0.5, 1, 0.89, 1) 200ms;
    user-select: none;
    width: 100%;
    height: auto;
    /* aspect-ratio: 1; */
  }

  :global(img#cookie:hover) {
    transform: scale(1.04) rotate(-5deg);
    border: blue 1px solid;
  }

  :global(img#cookie.clicked) {
    transform: scale(0.96) rotate(5deg);
    border: green 1px solid;
  }

  @keyframes breath {
    0% {
      transform: scale(1) rotate(0);
    }
    20% {
      transform: scale(0.99);
    }

    40% {
      transform: scale(1);
    }

    53% {
      transform: rotate(0);
    }
    54% {
      transform: rotate(-1deg);
    }
    56% {
      transform: rotate(1deg);
    }
    58% {
      transform: rotate(-1deg);
    }
    60% {
      transform: rotate(1deg);
    }
    62% {
      transform: rotate(-1deg);
    }
    63% {
      transform: rotate(0deg);
    }

    80% {
      transform: scale(0.99) rotate(0);
    }
  }

  #parent {
    animation: breath 8s infinite;
  }
</style>
