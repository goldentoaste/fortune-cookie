<script lang="ts">
  export let src: string;
  export let width: number;
  export let height: number;
</script>

<div id="dialog">
  <div id="box">
    <img
      {src}
      {width}
      {height}
    />
    <button
      class="button button-small"
      on:click>close</button
    >
  </div>
</div>

<style>
  #box {
    border: 3px black solid;
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }

  #dialog {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 600px;
    height: auto;
  }
</style>
