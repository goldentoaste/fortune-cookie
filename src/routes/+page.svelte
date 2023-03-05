<script>
  import Cookie from "$lib/components/Cookie.svelte";
    import MessageSlip from "$lib/components/MessageSlip.svelte";
    import Title from "$lib/components/Title.svelte";
</script>

<div id='root'>

  <Title style='height: 100%;'>Stuff</Title>



  <div class="cookie-container"><Cookie /></div>

  <div style="height: 100%"></div>

</div>
<style>

  #root {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    height: 100vh;
  }

  .cookie-container {
  
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;  
  
  }
</style>
