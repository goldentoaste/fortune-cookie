<script>
  import Cookie from "$lib/components/Cookie.svelte";
    import MessageSlip from "$lib/components/MessageSlip.svelte";
</script>
<MessageSlip>sdfasdaadasdasdasdsdsa</MessageSlip>

<div class="cookie-container">
  <Cookie />
</div>

<style>
  .cookie-container {
    max-width: 100vw;
    max-height: 100vh;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
</style>
