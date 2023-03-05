<script lang='ts'>
 import ImageContainer from "$lib/components/ImageContainer.svelte";
    import MessageSlip from "$lib/components/MessageSlip.svelte";
    import Title from "$lib/components/Title.svelte";
    import html2canvas from 'html2canvas';
  import Cookie from "$lib/components/Cookie.svelte";

   
</script>

<div id="root">
  <div class="cookie-container">
    <Title>Stuff</Title>
    <Cookie />
  </div>
</div>





<style>
  #root {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 100vh;
  }

  .cookie-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: var(--sp-2xl);
  }
</style>
