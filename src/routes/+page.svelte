<script lang='ts'>
  import Cookie from "$lib/components/Cookie.svelte";
    import ImageContainer from "$lib/components/ImageContainer.svelte";
    import MessageSlip from "$lib/components/MessageSlip.svelte";
    import Title from "$lib/components/Title.svelte";
    import html2canvas from 'html2canvas';


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

<div id='root'>

  <Title style='height: 100%;'>Stuff</Title>



  <div class="cookie-container"><Cookie /></div>

  <div style="height: 100%"></div>
  <button on:click={render}>Share</button>


</div>


{#if src}
    <ImageContainer {src} {width} {height} on:click={()=>{src = '';}} ></ImageContainer>
{/if}


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
