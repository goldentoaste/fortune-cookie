<script lang="ts">
    export let src: string;
    export let width: number;
    export let height: number;

    export let display = false;

    export let flip = false;

    let time = 0;
    let dt = 0;
    let remainder = 1000;

    let x = 0;
    let y = 0;

    function move() {
        dt = Date.now() - time;
        time = Date.now();

        let t = (1000 - remainder) / 1000;

        x = t * 100 * (flip ? -1 : 1);
        y = Math.sin(t * Math.PI) * -100;

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
<p>dasdasd</p>
<img
    {src}
    {width}
    {height}
    alt=""
    style={display ? `display:block; transform: translate(${x}px, ${y}px);` : 'display:none;'}
    loading="lazy"
/>

<style>
    img {
        position: absolute;
        user-select: none;
    }
</style>
