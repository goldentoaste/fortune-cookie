<script lang="ts">
    export let src: string;
    export let width: number;
    export let height: number;

    export let display = false;

    export let flip = false;

    let time = 0;
    let dt = 0;
    let total = 800;
    let remainder = total;

    let x = 0;
    let y = 0;
    let rot = 0;

    function move() {
        dt = Date.now() - time;
        time = Date.now();

        let t = (total - remainder) / total;

        x = t * 100 * (flip ? -1 : 1);
        y = Math.sin(t * Math.PI) * -100;
        rot = 10 * t * (flip ? -1 : 1);
        

        remainder -= dt;

        if (remainder > 0) {
            requestAnimationFrame(move);
        }
    }

    $: {
        if (display) {
            time = Date.now();
            requestAnimationFrame(move);
        }
    }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
    {src}
    {width}
    {height}
    style={display ? `display:block; transform: translate(${x}px, ${y}px) rotate(${rot}deg);` : 'display:none;'}

/>

<style>
    img {
        position: absolute;
        user-select: none;
        
        /* width: 100%;
        height: 100%; */
    }
</style>
