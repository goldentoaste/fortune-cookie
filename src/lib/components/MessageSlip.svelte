<script lang="ts">

    function typewriter(node: HTMLElement, { speed = 1, placeholder=false }) {
        const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

        if (!valid) {
            throw new Error(`This transition only works on elements with a single text node child`);
        }

        const text = node.textContent;
        const duration = text!.length / (speed * 0.01);


        if (placeholder){
          return {
            duration,
            tick : (t:number)=>{
              const i =  Math.max(1, Math.trunc(text!.length * t));
              node.innerHTML = `${text!.slice(0,i)}<span style="color:transparent;">${text!.slice(i)}</span>`
            }
          }
        }

        return {
            duration,
            tick: (t: number) => {
                const i = Math.trunc(text!.length * t);
                node.textContent = text!.slice(0, Math.max(1, i));
            },
        };
    }

    export let text: string = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="wrapper">
    <p on:click>
        {#key text}<span in:typewriter={{ speed: 3, placeholder : true }}> {text}</span>{/key}
    </p>
</div>

<style>
    p {
        font-size: var(--sp-xl);
        font-weight: 700;
        padding: 0;
        margin: 0;
        line-height: 2rem;
    }


    .wrapper {
      margin: var(--sp-xl);
      padding: var(--sp-xl) var(--sp-2xl);

      display: flex;
      align-items: center;
      justify-content: center;

      background-image: url('message.svg');
      background-size: 100% 100%;
      text-align: center;

      width: max-content;
    }
</style>
