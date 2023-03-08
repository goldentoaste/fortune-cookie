<script>
    import MessageSlip from "$lib/components/MessageSlip.svelte";
    let text = 'adasa asd asdasd asd asdas  dasd asd as das das dasd assdas'
</script>


<MessageSlip text={text}/> 




<button on:click={()=>{text = (''+Date.now() + " ").repeat(Math.floor(Math.random() * 5) + 1)}}> Test ! </button>